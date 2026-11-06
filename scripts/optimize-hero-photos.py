"""Create optimized WebP copies of the hero slideshow photographs.

Usage: python3 scripts/optimize-hero-photos.py <ridges> <glacial-valley> <canyon>
The source files are never modified. Output: public/images/hero/<name>-<width>.webp
Colour is converted to sRGB from any embedded profile; metadata is not copied.
"""
import io
import sys
from pathlib import Path
from PIL import Image, ImageCms

OUT = Path(__file__).resolve().parent.parent / "public" / "images" / "hero"
NAMES = ["mountain-ridges-sea-of-clouds", "glacial-valley", "river-canyon"]
WIDTHS = [2560, 1600, 960]
SRGB = ImageCms.createProfile("sRGB")


def to_srgb(im: Image.Image) -> Image.Image:
    icc = im.info.get("icc_profile")
    im = im.convert("RGB")
    if icc:
        src = ImageCms.ImageCmsProfile(io.BytesIO(icc))
        im = ImageCms.profileToProfile(im, src, SRGB, outputMode="RGB")
    return im


def main(paths):
    OUT.mkdir(parents=True, exist_ok=True)
    for name, path in zip(NAMES, paths):
        src = Image.open(path)
        im = to_srgb(src)
        widths = sorted({min(w, im.width) for w in WIDTHS}, reverse=True)  # never upscale
        for w in widths:
            h = round(im.height * w / im.width)
            r = im if w == im.width else im.resize((w, h), Image.LANCZOS)
            dest = OUT / f"{name}-{w}.webp"
            r.save(dest, "WEBP", quality=72 if w >= 2000 else 80, method=6)
            print(f"{dest.name}: {w}x{h}, {dest.stat().st_size // 1024} KB")


if __name__ == "__main__":
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    main(sys.argv[1:])
