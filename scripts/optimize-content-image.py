"""Create optimized WebP copies of a content photograph (research or people photos).

Usage: python3 scripts/optimize-content-image.py <source> <output-dir> <name> <max-width> [<max-width> ...]
Writes <output-dir>/<name>-<width>.webp for each width (never upscaled). EXIF orientation is applied,
colour is converted to sRGB and metadata (including GPS) is not copied. The source file is never modified.
"""
import io
import sys
from pathlib import Path
from PIL import Image, ImageCms, ImageOps

SRGB = ImageCms.createProfile("sRGB")


def main(src, out_dir, name, widths):
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    im = Image.open(src)
    icc = im.info.get("icc_profile")
    im = ImageOps.exif_transpose(im).convert("RGB")
    if icc:
        try:
            im = ImageCms.profileToProfile(im, ImageCms.ImageCmsProfile(io.BytesIO(icc)), SRGB, outputMode="RGB")
        except Exception:
            pass
    for w in sorted({min(int(x), im.width) for x in widths}, reverse=True):
        h = round(im.height * w / im.width)
        r = im if w == im.width else im.resize((w, h), Image.LANCZOS)
        dest = out / f"{name}-{w}.webp"
        r.save(dest, "WEBP", quality=82 if w <= 1000 else 78, method=6)
        print(f"{dest}: {w}x{h}, {dest.stat().st_size // 1024} KB")


if __name__ == "__main__":
    if len(sys.argv) < 5:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4:])
