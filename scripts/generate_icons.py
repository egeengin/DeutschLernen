#!/usr/bin/env python3
"""
DeutschLernen — Transparent PWA and Desktop Icon Generator
Generates high-resolution, transparent, borderless icons for:
- Web App Manifest (192x192, 512x512)
- iOS Safari (apple-touch-icon 180x180)
- Desktop Favicons (16x16, 32x32, favicon.ico)
Optimized for high visibility and professional appearance on Windows Taskbar and macOS Dock.
"""

import os
import sys
from PIL import Image

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
ICONS_DIR = os.path.join(ROOT_DIR, "assets", "icons")


def generate_icons(source_image_path=None, output_dir=None):
    """
    Generates all desktop and PWA icon resolutions with transparent backgrounds.
    Ensures the emblem fills ~92-96% of the canvas for maximum taskbar clarity.
    """
    if output_dir is None:
        output_dir = ICONS_DIR
    os.makedirs(output_dir, exist_ok=True)

    # Use 512 icon as default high-res source if none provided
    if source_image_path is None:
        source_image_path = os.path.join(ICONS_DIR, "icon-512.png")

    if not os.path.exists(source_image_path):
        raise FileNotFoundError(f"Source icon image not found at: {source_image_path}")

    master = Image.open(source_image_path).convert("RGBA")
    bbox = master.getbbox()
    cropped = master.crop(bbox) if bbox else master

    def create_canvas(size, fill_ratio=0.92):
        target_size = int(round(size * fill_ratio))
        resized = cropped.resize((target_size, target_size), Image.Resampling.LANCZOS)
        canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        offset = (size - target_size) // 2
        canvas.paste(resized, (offset, offset), resized)
        return canvas

    generated = {}

    # 1. 512x512 Main PWA icon
    p512 = os.path.join(output_dir, "icon-512.png")
    icon_512 = create_canvas(512, 0.92)
    icon_512.save(p512, "PNG", optimize=True)
    generated["512"] = p512

    # 2. 192x192 Standard PWA icon
    p192 = os.path.join(output_dir, "icon-192.png")
    icon_192 = create_canvas(192, 0.92)
    icon_192.save(p192, "PNG", optimize=True)
    generated["192"] = p192

    # 3. 180x180 Apple Touch Icon
    p180 = os.path.join(output_dir, "apple-touch-icon.png")
    icon_180 = create_canvas(180, 0.92)
    icon_180.save(p180, "PNG", optimize=True)
    generated["180"] = p180

    # 4. 32x32 Favicon
    p32 = os.path.join(output_dir, "favicon-32.png")
    icon_32 = create_canvas(32, 0.94)
    icon_32.save(p32, "PNG", optimize=True)
    generated["32"] = p32

    # 5. 16x16 Favicon
    p16 = os.path.join(output_dir, "favicon-16.png")
    icon_16 = create_canvas(16, 0.96)
    icon_16.save(p16, "PNG", optimize=True)
    generated["16"] = p16

    # 6. Multi-resolution ICO
    p_ico = os.path.join(output_dir, "favicon.ico")
    icon_512.save(p_ico, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    generated["ico"] = p_ico

    # Also sync root favicon.ico if outputting to assets/icons
    if output_dir == ICONS_DIR:
        root_ico = os.path.join(ROOT_DIR, "favicon.ico")
        icon_512.save(root_ico, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
        generated["root_ico"] = root_ico

    return generated


def main():
    print("Generating transparent, large-emblem icons for DeutschLernen...")
    generated = generate_icons()
    for key, path in generated.items():
        print(f"  [OK] Generated {key}: {path}")
    print("Icon generation complete!")


if __name__ == "__main__":
    main()
