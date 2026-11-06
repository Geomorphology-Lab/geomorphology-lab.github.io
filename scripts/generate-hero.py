"""Render an original, license-free layered-ridge landscape used as the interim hero image.

Replace the output files in src/assets/images/hero/ with a real fieldwork photograph
when one is available; this script is only kept for reproducibility.
Usage: python3 scripts/generate-hero.py
"""
import numpy as np
from PIL import Image, ImageFilter
from pathlib import Path

W, H = 2880, 1620
rng = np.random.default_rng(20261106)
OUT = Path(__file__).resolve().parent.parent / "src" / "assets" / "images" / "hero"
OUT.mkdir(parents=True, exist_ok=True)


def noise2d(w, h, cell, rng):
    gw, gh = max(2, w // cell + 2), max(2, h // cell + 2)
    g = (rng.random((gh, gw)) * 255).astype(np.uint8)
    im = Image.fromarray(g, "L").resize((gw * cell, gh * cell), Image.BICUBIC)
    return np.asarray(im, dtype=np.float32)[:h, :w] / 255.0


def fbm2d(w, h, base, octaves, rng, gain=0.5):
    acc, amp, tot, cell = np.zeros((h, w), np.float32), 1.0, 0.0, base
    for _ in range(octaves):
        acc += amp * noise2d(w, h, max(2, int(cell)), rng)
        tot += amp
        amp *= gain
        cell /= 2
    return acc / tot


def ridge_profile(w, base, octaves, rng, sharp=True):
    acc, amp, tot, cell = np.zeros(w, np.float32), 1.0, 0.0, base
    x = np.arange(w)
    for _ in range(octaves):
        n = int(w / cell) + 3
        pts = rng.random(n)
        xp = np.arange(n) * cell
        v = np.interp(x, xp, pts)
        if sharp:
            v = 1 - np.abs(v * 2 - 1)  # ridged noise -> crests
        acc += amp * v
        tot += amp
        amp *= 0.52
        cell /= 2.1
    p = acc / tot
    # smooth very slightly
    k = np.ones(5) / 5
    return np.convolve(p, k, mode="same")


def lerp(a, b, t):
    return a + (b - a) * t


yy = np.linspace(0, 1, H, dtype=np.float32)[:, None]
xx = np.linspace(0, 1, W, dtype=np.float32)[None, :]

# Sky: deep navy at top to pale teal-grey near horizon, soft glow on right
top = np.array([10, 20, 32], np.float32)
hor = np.array([120, 150, 160], np.float32)
t = np.clip(yy / 0.62, 0, 1) ** 1.6
img = lerp(top, hor, t[..., None]) * np.ones((1, W, 1), np.float32)
glow = np.exp(-(((xx - 0.74) / 0.24) ** 2 + ((yy - 0.47) / 0.15) ** 2))
img += glow[..., None] * np.array([92, 80, 58], np.float32)
# horizontally stretched noise reads as stratus cloud banks
_c = fbm2d(W // 5, H, 140, 6, rng)
clouds = np.asarray(Image.fromarray((_c * 255).astype(np.uint8), "L").resize((W, H), Image.BICUBIC), np.float32) / 255.0
cloud_mask = np.clip((clouds - 0.45) * 2.6, 0, 1) * np.clip(1 - yy / 0.58, 0, 1) * 0.22
img = lerp(img, np.array([170, 185, 190], np.float32), cloud_mask[..., None])

layers = 7
for i in range(layers):
    d = i / (layers - 1)  # 0 far -> 1 near
    base_y = lerp(0.52, 0.90, d ** 1.15)
    amp = lerp(0.12, 0.24, d)
    prof = ridge_profile(W, lerp(900, 1300, d), 8, rng)
    # keep left-center lower for title legibility on nearer layers
    calm = 1 - 0.35 * np.exp(-(((np.linspace(0, 1, W) - 0.25) / 0.25) ** 2)) * d
    ridge = base_y - amp * prof * calm
    ry = (ridge * H)[None, :]
    py = np.arange(H, dtype=np.float32)[:, None]
    mask = np.clip(py - ry + 1.0, 0, 1)
    far_col = np.array([96, 124, 136], np.float32)
    near_col = np.array([9, 17, 24], np.float32)
    col = lerp(far_col, near_col, d ** 0.8)
    # slope texture (forest/rock) stronger on near layers
    tex = fbm2d(W, H, int(lerp(48, 14, d)), 5, rng) - 0.5
    shade = np.clip((py - ry) / (H * 0.25), 0, 1)  # darker deeper below crest
    lit = np.exp(-(((xx - 0.74) / 0.35) ** 2)) * np.exp(-np.clip(py - ry, 0, None) / 18) * (1 - d * 0.6) * 34
    layer = col[None, None, :] * (1 - 0.35 * shade[..., None]) + tex[..., None] * lerp(10, 26, d) + lit[..., None]
    img = lerp(img, layer, mask[..., None])
    # valley fog sitting above next layer's base
    if i < layers - 1:
        fog_y = lerp(0.56, 0.90, ((i + 0.7) / (layers - 1)) ** 1.15)
        fog_n = fbm2d(W, H, 400, 5, rng)
        fog = np.exp(-(((yy - fog_y) / lerp(0.035, 0.05, d)) ** 2)) * (0.35 + 0.65 * fog_n) * lerp(0.55, 0.30, d)
        fog_col = np.array([150, 172, 178], np.float32)
        img = lerp(img, fog_col[None, None, :] * np.ones_like(img), np.clip(fog, 0, 0.8)[..., None])

# film grain & vignette
img += (rng.standard_normal((H, W, 1)).astype(np.float32)) * 2.2
vig = 1 - 0.38 * (((xx - 0.55) / 0.75) ** 2 + ((yy - 0.5) / 0.8) ** 2)
img *= np.clip(vig, 0.5, 1)[..., None]
img = np.clip(img, 0, 255).astype(np.uint8)
im = Image.fromarray(img, "RGB").filter(ImageFilter.GaussianBlur(0.6))

for w, q in [(2560, 80), (1600, 80), (960, 78)]:
    h = round(w * H / W)
    r = im.resize((w, h), Image.LANCZOS)
    r.save(OUT / f"hero-{w}.jpg", "JPEG", quality=q, optimize=True, progressive=True)
    print("wrote", OUT / f"hero-{w}.jpg")
