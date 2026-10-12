"""Render Explorer's Atlas social cards with the approved blue design.

Run from the repository root: python3 scripts/generate-social-cards.py
Requires Pillow, Node dependencies from npm install, and macOS Avenir Next.
"""

from pathlib import Path
import subprocess
import tempfile

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "design" / "social-card"
OUTPUT = ROOT / "public" / "social"
FONT_PATH = Path("/System/Library/Fonts/Avenir Next.ttc")
SIZE = (1200, 630)

COPY = {
    "es": {
        "eyebrow": "EXPLORER'S ATLAS",
        "title_top": "ATLAS DEL",
        "title_bottom": "EXPLORADOR",
        "line_one": "Explora países, descubre banderas",
        "line_two": "y pon a prueba lo que sabes.",
    },
    "en": {
        "eyebrow": "WORLD · FLAGS · GAMES",
        "title_top": "EXPLORER'S",
        "title_bottom": "ATLAS",
        "line_one": "Explore countries, discover flags,",
        "line_two": "and test what you know.",
    },
}


def font(size: int, style: int = 0) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_PATH), size, index=style)


def rasterize_svg(source: Path, destination: Path, width: int) -> None:
    subprocess.run(
        [
            "node",
            "-e",
            "const sharp=require('sharp');"
            "sharp(process.argv[1]).resize(Number(process.argv[3])).png().toFile(process.argv[2]);",
            str(source),
            str(destination),
            str(width),
        ],
        cwd=ROOT,
        check=True,
    )


def render(locale: str, atlas_icon: Image.Image, jf_icon: Image.Image) -> None:
    copy = COPY[locale]
    image = Image.new("RGBA", SIZE, "#0052D0")
    profile = Image.open(SOURCE / "profile_1.png").convert("RGB")
    profile = ImageOps.fit(
        profile, (442, 630), method=Image.Resampling.LANCZOS, centering=(0.5, 0.43)
    )
    image.paste(profile, (758, 0))
    draw = ImageDraw.Draw(image)

    draw.polygon([(686, 0), (758, 0), (758, 630), (716, 630)], fill="#FDC003")
    draw.ellipse((-200, 305, 310, 815), outline="#337BEB", width=3)
    draw.ellipse((-126, 374, 242, 742), outline="#337BEB", width=3)
    image.alpha_composite(atlas_icon, (72, 54))

    draw.text((155, 72), copy["eyebrow"], font=font(24), fill="#FDC003")
    draw.text((71, 173), copy["title_top"], font=font(36, 2), fill="#D5E1FF")
    draw.text((67, 217), copy["title_bottom"], font=font(61, 8), fill="#FFFFFF")

    draw.rounded_rectangle((72, 331, 674, 459), radius=18, fill="#FFFFFF")
    draw.text((100, 349), copy["line_one"], font=font(27, 2), fill="#1A1E46")
    draw.text((100, 386), copy["line_two"], font=font(27, 2), fill="#1A1E46")

    draw.line((72, 526, 672, 526), fill="#6493ED", width=2)
    image.alpha_composite(jf_icon, (72, 552))
    draw.text((112, 555), "Jorge Fonseca", font=font(18, 5), fill="#BCCBFF")

    OUTPUT.mkdir(parents=True, exist_ok=True)
    image.convert("RGB").save(OUTPUT / f"explorers-atlas-{locale}.png", optimize=True)


def main() -> None:
    if not FONT_PATH.exists():
        raise RuntimeError("macOS Avenir Next is required to reproduce the approved design")
    with tempfile.TemporaryDirectory() as directory:
        temp = Path(directory)
        rasterize_svg(ROOT / "src" / "app" / "icon.svg", temp / "atlas.png", 66)
        rasterize_svg(SOURCE / "jf-favicon.svg", temp / "jf.png", 31)
        atlas_icon = Image.open(temp / "atlas.png").convert("RGBA")
        jf_icon = Image.open(temp / "jf.png").convert("RGBA")
        for locale in COPY:
            render(locale, atlas_icon, jf_icon)


if __name__ == "__main__":
    main()
