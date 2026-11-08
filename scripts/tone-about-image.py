"""Tone the placeholder landscape (src/assets/images/hero/hero-2560.jpg) for the homepage Research Areas band.

Black-and-white with a faint navy cast: the picture is turned to greyscale, then mapped through a
black -> navy -> grey -> white ramp, so only the shadows carry the navy (#132433, the site accent).
The top edge fades to pure black so it joins the dark About section without a seam.
Usage: python3 scripts/tone-about-image.py   (writes public/images/about/misty-ridges-{960,1600,2560}.webp)
"""
from pathlib import Path
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src/assets/images/hero/hero-2560.jpg"
OUT = ROOT / "public/images/about"

# (position, colour): the navy sits in the darks, the lights are neutral
RAMP = [(0.00, (0, 0, 0)), (0.30, (19, 36, 51)), (0.62, (122, 130, 138)), (1.00, (255, 255, 255))]


def tone(im: Image.Image) -> Image.Image:
    a = np.asarray(im.convert("RGB"), float) / 255.0
    lum = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
    lum = np.clip((lum - 0.02) / 0.62, 0, 1) ** 0.8  # the source is very dark: stretch it a little
    xs = [p for p, _ in RAMP]
    out = np.stack([np.interp(lum, xs, [c[i] for _, c in RAMP]) for i in range(3)], axis=-1)
    h = out.shape[0]
    y = np.linspace(0, 1, h)[:, None, None]
    top = np.clip(y / 0.14, 0, 1)
    out *= top * top * (3 - 2 * top)  # smoothstep: pure black at the very top
    return Image.fromarray(np.clip(out, 0, 255).astype("uint8"), "RGB")


def main() -> None:
    big = tone(Image.open(SRC))
    OUT.mkdir(parents=True, exist_ok=True)
    for w in (960, 1600, 2560):
        img = big if w == big.width else big.resize((w, round(big.height * w / big.width)), Image.LANCZOS)
        img.save(OUT / f"misty-ridges-{w}.webp", quality=82, method=6)
        print("wrote", f"misty-ridges-{w}.webp", img.size)


if __name__ == "__main__":
    main()
