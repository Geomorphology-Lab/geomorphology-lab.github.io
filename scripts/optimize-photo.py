"""Create optimized WebP copies of a photograph for the website.

Usage: python3 scripts/optimize-photo.py <source> <output-dir> <name>
Writes <output-dir>/<name>-<width>.webp at 960, 1600 and 2560 px wide
(never upscaled). Colour is converted to sRGB; metadata is not copied.
The source file is never modified.
"""
import io
import sys
from pathlib import Path
from PIL import Image, ImageCms

WIDTHS = [2560, 1600, 960]
SRGB = ImageCms.createProfile("sRGB")


def main(src, out_dir, name):
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    im = Image.open(src)
    icc = im.info.get("icc_profile")
    im = im.convert("RGB")
    if icc:
        im = ImageCms.profileToProfile(im, ImageCms.ImageCmsProfile(io.BytesIO(icc)), SRGB, outputMode="RGB")
    for w in sorted({min(w, im.width) for w in WIDTHS}, reverse=True):
        h = round(im.height * w / im.width)
        r = im if w == im.width else im.resize((w, h), Image.LANCZOS)
        dest = out / f"{name}-{w}.webp"
        r.save(dest, "WEBP", quality=72 if w >= 2000 else 80, method=6)
        print(f"{dest}: {w}x{h}, {dest.stat().st_size // 1024} KB")


if __name__ == "__main__":
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    main(*sys.argv[1:])
