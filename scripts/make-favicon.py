"""Create the browser-tab icons from the university emblem (navy emblem on white).

Usage: python3 scripts/make-favicon.py <emblem.png>
The emblem's colours are swapped (white emblem on a navy square) and the result is written to
public/favicon.ico (16/32/48 px), public/favicon-32.png and public/favicon-192.png (rounded corners,
transparent outside them) and public/apple-touch-icon.png (180 px, square: iOS rounds it itself).
The source file is not modified.
"""
import sys
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw

OUT = Path(__file__).resolve().parent.parent / "public"
CORNER = 0.15  # corner radius as a fraction of the icon size (rounded, not circular)


def swapped_square(src: str, size: int = 1024, pad: float = 0.05) -> Image.Image:
    im = Image.open(src).convert("RGB")
    a = np.asarray(im, float)
    lum = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
    navy = a[lum < 90].mean(axis=0) if (lum < 90).any() else np.array([38.0, 52.0, 112.0])
    lum_navy = 0.2126 * navy[0] + 0.7152 * navy[1] + 0.0722 * navy[2]
    # coverage: 0 on the white paper, 1 on the navy ink (keeps the anti-aliased edges)
    t = np.clip((255.0 - lum) / (255.0 - lum_navy), 0, 1)
    ys, xs = np.where(t > 0.04)
    t = t[ys.min() : ys.max() + 1, xs.min() : xs.max() + 1]
    h, w = t.shape
    side = int(max(h, w) * (1 + 2 * pad))
    canvas = np.zeros((side, side), float)
    y0, x0 = (side - h) // 2, (side - w) // 2
    canvas[y0 : y0 + h, x0 : x0 + w] = t
    cov = Image.fromarray((canvas * 255).astype("uint8"), "L").resize((size, size), Image.LANCZOS)
    c = np.asarray(cov, float)[..., None] / 255.0
    bg = navy.reshape(1, 1, 3)
    white = np.array([255.0, 255.0, 255.0]).reshape(1, 1, 3)
    out = bg * (1 - c) + white * c  # navy background, white emblem
    return Image.fromarray(out.astype("uint8"), "RGB"), tuple(int(round(v)) for v in navy)


def rounded(img: Image.Image, ratio: float = CORNER) -> Image.Image:
    """RGBA copy with rounded corners; the mask is drawn at 4x for smooth edges."""
    w, h = img.size
    mask = Image.new("L", (w * 4, h * 4), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, w * 4 - 1, h * 4 - 1), radius=int(min(w, h) * 4 * ratio), fill=255)
    out = img.convert("RGBA")
    out.putalpha(mask.resize((w, h), Image.LANCZOS))
    return out


def main(src: str) -> None:
    big, navy = swapped_square(src)
    big_round = rounded(big)
    for name, px in [("favicon-192.png", 192), ("favicon-32.png", 32)]:
        big_round.resize((px, px), Image.LANCZOS).save(OUT / name, optimize=True)
    big.resize((180, 180), Image.LANCZOS).save(OUT / "apple-touch-icon.png", optimize=True)
    big_round.save(OUT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    print("navy", "#%02x%02x%02x" % navy, "| wrote", ", ".join(p.name for p in sorted(OUT.glob("*")) if "icon" in p.name))


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
