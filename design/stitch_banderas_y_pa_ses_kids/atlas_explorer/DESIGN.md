# Design System Document: The Explorer’s Atlas

## 1. Overview & Creative North Star: "The Modern Navigator"
This design system moves away from the chaotic, over-stimulating "kid-centric" designs of the past. Our Creative North Star is **The Modern Navigator**. We are designing a premium, educational ecosystem that treats a 10-year-old with intellectual respect while maintaining a sense of wonder. 

The experience is defined by **tactile depth and organic flow**. We break the traditional "boxed-in" web grid by using intentional asymmetry—think of a map spread across a table where elements overlap naturally. We use high-contrast typography scales and "hero-sized" interactive elements to create a sense of importance and discovery. This isn't just an app; it's a sophisticated digital field guide.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
Our palette is vibrant yet grounded, using a sophisticated Material Design logic. We avoid "flatness" by leaning into tonal transitions.

### Color Strategy
- **Primary (`#0052d0`):** Our "Navigation Blue." Use this for core movement and primary discovery actions.
- **Secondary (`#176a21`):** "Wilderness Green." Used for progress, success, and nature-themed exploration.
- **Tertiary (`#755700`):** "Scholar’s Gold." Used for flags, achievements, and "special" discovery moments.

### The "No-Line" Rule
**Designers are strictly prohibited from using 1px solid borders for sectioning.** 
Structure must be defined through background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background. To create a container, use the color change itself to inform the eye where one concept ends and another begins.

### The "Glass & Gradient" Rule
To ensure the UI feels premium:
- **Glassmorphism:** For floating menus or "Flag Cards" over maps, use `surface` with 80% opacity and a `24px` backdrop blur.
- **Signature Gradients:** Main CTAs should use a subtle linear gradient from `primary` to `primary-container`. This adds a "jewel-like" quality that feels more tactile and high-end than a flat fill.

---

## 3. Typography: The Friendly Authority
We use **Plus Jakarta Sans** across all levels. Its rounded terminals provide the "friendly" feel required for a child, while its modern geometric structure maintains a "professional" educational tone.

- **Display (Lg/Md/Sm):** Used for world regions or major chapter titles. These are massive and bold, serving as the "landmark" for the page.
- **Headline (Lg/Md/Sm):** Used for section headers. They should feel authoritative but approachable.
- **Title (Lg/Md/Sm):** Used for card titles (e.g., "The Flag of Japan").
- **Body (Lg/Md/Sm):** Set with generous line height (1.6) to ensure high readability for young learners.
- **Label (Md/Sm):** Used for metadata, such as "Population" or "Capital City."

**Typographic Contrast:** Always pair a `display-lg` headline with a `body-lg` intro to create a sophisticated, editorial hierarchy that guides the eye.

---

## 4. Elevation & Depth: Tonal Layering
We reject the standard "drop shadow" in favor of **Tonal Layering**. Depth is a physical manifestation of information importance.

- **The Layering Principle:** 
    - Level 0: `surface` (The Base Map)
    - Level 1: `surface-container-low` (Content Sections)
    - Level 2: `surface-container-highest` (Interactive Cards)
- **Ambient Shadows:** Only use shadows for floating elements (like a "Passport" modal). Shadows must be tinted with `on-surface` (`#272b51`) at 6% opacity with a `32px` blur. This creates a "glow" of depth rather than a harsh edge.
- **The "Ghost Border" Fallback:** If a boundary is visually necessary for accessibility, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Tactile & Intuitive

### Buttons (The "Touch-First" Philosophy)
- **Primary:** High-contrast `primary` gradient with `xl` (3rem) rounded corners. Padding should be generous (`1.5rem 2.5rem`) to ensure a large hit-target for 10-year-olds.
- **Tertiary:** Text-only with an icon, using `title-md` styling.
- **States:** On hover/tap, the button should "lift" via a transition to `primary-fixed-dim`, rather than just changing color.

### Exploration Cards
- **Forbid Dividers:** Do not use lines to separate "Flag" from "Description." Use a vertical spacing of `2rem` (from the spacing scale) and a background shift to `surface-container-lowest`.
- **Nesting:** Place a `surface-container-highest` card inside a `surface-container-low` section to create a soft, "nested" lift.

### Illustrated Icons & Chips
- **Chips:** Use `secondary-container` for active states. Corners must be `full` (pill-shaped).
- **Icons:** Icons should be "illustrated"—meaning they are multi-tone, using the `primary` and `secondary` palettes, rather than simple monochromatic glyphs.

### Map Input Fields
- Use `surface-container-highest` for the input track. Labels should be `title-sm` and sit *above* the field, never inside as placeholder text, to maintain accessibility.

---

## 6. Do’s and Don’ts

### Do:
- **Use Intentional Asymmetry:** Let a flag illustration "break" the container of a card, overlapping onto the background.
- **Prioritize Breathing Room:** Use the `xl` spacing scale between major sections.
- **Use Color as Information:** Use `secondary` (Green) for "Found" items and `primary` (Blue) for "To Explore" items.

### Don’t:
- **Don't use 100% Black:** Always use `on-surface` (`#272b51`) for text to keep the vibe sophisticated and soft.
- **Don't use Sharp Corners:** Nothing in this system should have a radius smaller than `sm` (0.5rem).
- **Don't use Grid Lines:** If you feel the urge to draw a line, use a 24px gap of white space instead. 
- **Don't Over-Animate:** Transitions should be "snappy" (200ms) and use a subtle "back-out" ease to feel bouncy and playful, but not slow.