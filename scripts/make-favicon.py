"""Create the browser-tab icons from the university emblem (navy emblem on white).

Usage: python3 scripts/make-favicon.py <emblem.png>
The emblem's colours are swapped (white emblem on a navy square) and the result is written to
public/favicon.ico (16/32/48 px), public/favicon-32.png, public/favicon-192.png and
public/apple-touch-icon.png (180 px). The source file is not modified.
"""
import sys
from pathlib import Path
import numpy as np
from PIL import Image

OUT = Path(__file__).resolve().parent.parent / "public"


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


def main(src: str) -> None:
    big, navy = swapped_square(src)
    for name, px in [("favicon-192.png", 192), ("apple-touch-icon.png", 180), ("favicon-32.png", 32)]:
        big.resize((px, px), Image.LANCZOS).save(OUT / name, optimize=True)
    big.save(OUT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    print("navy", "#%02x%02x%02x" % navy, "| wrote", ", ".join(p.name for p in sorted(OUT.glob("*")) if "icon" in p.name))


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
