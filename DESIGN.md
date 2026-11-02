---
name: Blueprint Modern
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3f4850'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#00668a'
  on-secondary: '#ffffff'
  secondary-container: '#40c2fd'
  on-secondary-container: '#004d6a'
  tertiary: '#4d5d73'
  on-tertiary: '#ffffff'
  tertiary-container: '#66768d'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: 3rem
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 1.875rem
    fontWeight: '700'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: 2.5rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is conceived as an architectural, high-fidelity wireframe and blueprint aesthetic tailored for academic and institutional project showcases (built on HTML5, CSS3, vanilla JS, and customized Materialize). It bridges the gap between raw prototype precision and polished, modern digital delivery.

### Brand Personality & Emotional Tone
- **Methodical & Trustworthy:** Presents structured thinking, project methodology, and deliverables with crisp clarity and zero visual clutter.
- **Architectural & Intentional:** Evokes the clean discipline of modern engineering diagrams, wireframe blueprints, and refined technical documentation.
- **Accessible & Transparent:** Prioritizes scannability, legibility, and effortless cognitive processing over decorative ornamentation.

### Design Movement: Blueprint Minimalism
The aesthetic merges high-fidelity wireframe framing with clean contemporary SaaS minimalism:
- Structured border boundaries (`1px solid`) substitute heavy drop shadows to preserve an authentic schematized feel.
- High-contrast neutral canvases with subtle surface shifts give distinct containment to project sections (Misión, Visión, Integrantes, Avances, Contacto).
- Sparing use of light technical blue (`#0284C7` / `#38BDF8`) designates interactive affordances, progress states, and key navigational points without breaking the calm wireframe discipline.

## Colors

The color palette is built around high-clarity slate neutrals with soft blue accents, engineered to modernize the standard Materialize palette into a tailored architectural prototype aesthetic.

### Core Semantic Roles
- **Primary (`#0284C7`):** Focused technical blue used for active navigation anchors, primary action buttons, focused input outlines, and key badges.
- **Secondary (`#38BDF8`):** Crisp sky blue for hover states, subtle active chips, and soft accent indicator lines.
- **Tertiary / Subdued Accent (`#64748B`):** Muted slate for metadata labels, card categories, table outlines, and secondary helper text.
- **Neutral Foreground (`#0F172A`):** Deep slate-black delivering optimal WCAG AAA contrast against light backgrounds for body copy and headings.

### Surface System
- **Background Root Canvas:** `#F8FAFC` (Slate 50) — ultra-clean, slightly warm slate background that eliminates harsh clinical pure-white glare.
- **Surface Container (Cards, Collapsibles, Forms):** `#FFFFFF` — crisp white interior containers to isolate modular content blocks cleanly.
- **Surface Muted / Inset (Banners, Code blocks, Secondary panels):** `#F1F5F9` (Slate 100) — structural distinction for pre-headers, hero wireframe placeholders, and collection item hovers.
- **Borders & Dividers:** Primary structural dividers use `#E2E8F0` (Slate 200); focused containment and interactive borders use `#CBD5E1` (Slate 300).

## Typography

The typographic hierarchy uses **Inter** across all display, body, and label roles. Its neutral geometry, tall x-height, and precise tabular metrics embody the analytical spirit of an interactive wireframe and prototype.

### Typographic Hierarchy & Scale
- **Headlines (`headline-xl`, `headline-lg`):** Reserved for document titles (e.g., "Mi Proyecto en la Web") and major section titles ("Objetivos", "Estructura del sitio"). Features tight letter-spacing (`-0.02em` to `-0.03em`) and confident weights (`600`/`700`).
- **Subheadings (`headline-md`, `headline-sm`):** Form headers, card titles, and collapsible summary triggers.
- **Body (`body-md`, `body-sm`):** Standard reading text for mission statements, teammate role descriptions, and development milestones. Line heights are tuned to `1.5` and `1.57` for fluid reading.
- **Labels & Monospaced Accents (`label-md`, `label-sm`):** Used for navigation anchors, tags, badges, and form labels. For technical metadata (e.g. `index.html`, `HTML5`, `CSS3`), pair inline `<code>` blocks using browser monospace or JetBrains Mono fallback at `0.85em` with subtle framing.

## Layout & Spacing

The layout is anchored by a structured 12-column grid system compatible with Materialize's row and column layout (`col s12 m6 l4`), enhanced with custom CSS containment rules.

### Grid & Max Dimensions
- **Max Content Width:** Container elements cap at `1120px` (or `70rem`) centered with auto margins, ensuring reading widths never over-extend on wide displays.
- **Gutters:** Standard horizontal gutter of `1.5rem` (`24px`), reducing to `1rem` on screens below `600px`.
- **Vertical Rhythm:** Sections are separated by `space-xl` (`2.5rem`) to `3rem`, creating deliberate architectural chapters throughout each page.

### Responsive Breakpoints
- **Mobile (`< 600px`):** Single-column stack. Outer margin shrinks to `1rem`. Grids reflow cards and team member blocks to `100%` width.
- **Tablet (`601px - 992px`):** 2-column card layouts, side-by-side collapsible and info blocks. Outer margin expands to `1.5rem`.
- **Desktop (`> 992px`):** 3-column team cards, horizontal card advancement previews, and fixed-width form layouts.

## Elevation & Depth

To maintain the clarity of an authentic high-fidelity wireframe while avoiding the heaviness of default Material Design drop shadows, this design system relies primarily on **Crisp Structural Borders** and **Subtle Dual-Tone Insets**.

### Depth Layers
- **Ground (Canvas):** Tone `#F8FAFC`. Zero elevation, non-interactive foundation.
- **Surface Level 1 (Cards, Collections, Navbars):** Solid `#FFFFFF` enclosed in a precise `1px solid #E2E8F0` border. Materialize's default `z-depth-1` box-shadows are overridden with a hairline outline and a very soft ambient shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
- **Surface Level 2 (Hovered Cards, Modals, Dropdowns):** Elevates via border darkening to `#CBD5E1` combined with subtle lifted diffusion: `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`.
- **Surface Inset (Search bars, Code panels, Progress tracks):** `#F1F5F9` background with a slightly darker inset boundary (`#E2E8F0`) to feel structurally embedded into the plane.

## Shapes

The design system enforces **Soft (Level 1)** corner geometry (`0.25rem` / `4px` default, up to `0.5rem` / `8px` for major containers).

### Implementation Guide
- **Buttons, Badges, Inputs, Form Fields:** `4px` (`0.25rem`) border radius. This preserves the wireframe diagrammatic sharpness without feeling severe or aggressive.
- **Cards, Collapsible Shells, Modals:** `8px` (`0.5rem`) border radius, balancing modular modern software UI with clean structural framing.
- **Avatars & Status Dots:** Fully circular (`50%`) with an enclosing `2px solid #E2E8F0` border to stand out cleanly against white and grey surfaces.

## Components

Custom CSS overrides for Materialize components ensure the site reads as an intentional, high-fidelity wireframe and technical blueprint rather than a generic template.

### 1. Navigation Bar (`nav`)
- **Background:** `#FFFFFF` with a bottom border `1px solid #E2E8F0`. Shadow stripped to `box-shadow: none`.
- **Brand Logo:** `#0F172A`, font-weight `700`, subtle primary accent dot or blueprint icon.
- **Nav Links:** Color `#64748B`, font-weight `500`. On hover and active state: text color switches to `#0284C7` with a bottom border highlight of `2px solid #0284C7`.

### 2. Cards (`.card`)
- Override default Materialize styles:
  ```css
  .card {
    background-color: #ffffff;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  .card:hover {
    border-color: #CBD5E1;
    box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.07);
  }
  ```
- **Horizontal Cards:** For "Nosotros" team profiles and "Avances", maintain a wireframe avatar/thumbnail frame on the left with `background: #F1F5F9; border-right: 1px solid #E2E8F0`.

### 3. Collections & Progress Lists (`.collection`)
- Replace Materialize default border styling:
  ```css
  .collection {
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    overflow: hidden;
  }
  .collection .collection-item {
    background-color: #ffffff;
    border-bottom: 1px solid #F1F5F9;
    color: #0F172A;
    padding: 12px 16px;
  }
  .collection .collection-item:last-child {
    border-bottom: none;
  }
  .collection .collection-item.active {
    background-color: #F8FAFC;
    color: #0284C7;
    border-left: 3px solid #0284C7;
  }
  ```

### 4. Buttons (`.btn`, `.btn-flat`, `.btn-outline`)
- **Primary Action (`.btn`):** Background `#0284C7`, text `#FFFFFF`, flat shadow, `border-radius: 4px`. Hover background `#0369A1`.
- **Wireframe Secondary (`.btn-outline`):** Background transparent, border `1px solid #CBD5E1`, text `#0F172A`. Hover background `#F1F5F9` with border `#94A3B8`.
- Remove wave ripple excess if preferred, or color ripples to translucent `#38BDF8`.

### 5. Form Controls (`input`, `textarea`)
- Clear underline-only default styles in favor of full wireframe boxed inputs:
  ```css
  .input-field input[type=text],
  .input-field input[type=email],
  .input-field textarea {
    background-color: #ffffff !important;
    border: 1px solid #CBD5E1 !important;
    border-radius: 4px !important;
    padding: 0.75rem 1rem !important;
    box-sizing: border-box !important;
    height: auto !important;
  }
  .input-field input:focus,
  .input-field textarea:focus {
    border-color: #0284C7 !important;
    box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15) !important;
  }
  ```

### 6. Collapsibles (`.collapsible`)
- Used in "Objetivos" and "Avances":
  ```css
  .collapsible {
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    box-shadow: none;
  }
  .collapsible-header {
    background-color: #ffffff;
    border-bottom: 1px solid #E2E8F0;
    font-weight: 600;
    color: #0F172A;
  }
  .collapsible-body {
    background-color: #F8FAFC;
    border-bottom: 1px solid #E2E8F0;
  }
  ```

### 7. Interactive Feedback (JavaScript Integration)
- **Toasts (`M.toast`):** Styled with `#0F172A` background, `border: 1px solid #334155`, text `#F8FAFC`, and a subtle `#38BDF8` icon badge for form confirmations and alerts.
- **Dynamic Color Switch / Wireframe Toggle:** For the required JS interaction, toggling background between light mode canvas (`#F8FAFC`) and blueprint slate mode (`#0F172A`) with inverse outline tokens.