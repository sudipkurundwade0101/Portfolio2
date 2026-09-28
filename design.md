# Playful Geometric Design System

## Design Philosophy

**Playful Geometric** is the antidote to sterile, corporate minimalism. It creates an emotional connection through **optimism, clarity, and tactile fun**.

The core concept is **"Stable Grid, Wild Decoration"**. The content itself (text, forms) lives in clean, readable areas, but the world around it is alive with movement and shape. It references the **Memphis Group** but cleans it up for modern digital screens, removing the chaos while keeping the energy.

### The Vibe

**Friendly. Tactile. Pop. Energetic.**

It feels like a playground or a well-organized sticker book. It invites clicking.

### Visual Signatures

- **Primitive Shapes**: Circles, triangles, squares, pill shapes, and squiggles used as background elements, masks, or icons.
- **Hard Shadows**: Elements often have a hard, offset drop shadow with no blur, giving a sticker or cut-out paper feel.
- **Pattern Fills**: Polka dots, grid lines, and diagonal stripes used to fill shapes or backgrounds.
- **Varied Radii**: Mixing fully rounded corners with sharp ones to create leaf shapes or asymmetric blobs.

## Design Token System

### Colors

```css
background:        #FFFDF5;
foreground:        #1E293B;
muted:             #F1F5F9;
mutedForeground:   #64748B;
accent:            #8B5CF6;
accentForeground:  #FFFFFF;
secondary:         #F472B6;
tertiary:          #FBBF24;
quaternary:        #34D399;
border:            #E2E8F0;
input:             #FFFFFF;
card:              #FFFFFF;
ring:              #8B5CF6;
```

Use `accent` for primary actions. Use `secondary`, `tertiary`, and `quaternary` rotationally for decorative shapes, icons, or emphasized words to create a confetti effect.

### Typography

**Headings**: `"Outfit", system-ui, sans-serif`

- Weights: 700, 800

**Body**: `"Plus Jakarta Sans", system-ui, sans-serif`

- Weights: 400, 500, 700

Scale ratio: 1.25.

### Radius & Border

```css
radius-sm:   8px;
radius-md:   16px;
radius-lg:   24px;
radius-full: 9999px;
border-width: 2px;
```

Special blob radius examples:

- `24px 24px 24px 0`
- `9999px 9999px 0 0`

### Shadows & Effects

```css
box-shadow:        4px 4px 0 0 #1E293B;
box-shadow-hover:  6px 6px 0 0 #1E293B;
box-shadow-active: 2px 2px 0 0 #1E293B;
```

No blur. Use solid offset colors.

### Textures & Patterns

- Dot grid backgrounds.
- SVG squiggles as section accents or heading underlines.
- Confetti shapes positioned behind content.

## Component Stylings

### Buttons

Primary button:

- Background: `#8B5CF6`
- Text: white, bold
- Radius: full pill
- Border: `2px solid #1E293B`
- Shadow: `4px 4px 0 #1E293B`
- Hover: translate up/left and extend shadow
- Active: translate down/right and shrink shadow
- Icon: enclosed in a circular shape

Secondary button:

- Transparent background
- Foreground text
- `2px solid #1E293B`
- Full pill
- Hover fill: `#FBBF24`

### Cards

Sticker card:

- White background
- `2px solid #1E293B`
- Rounded corners
- Hard shadow, often colored for featured cards
- Hover with slight rotation and scale
- Floating icon circle half-in/half-out of the top border

### Inputs

- White background
- `2px solid #CBD5E1`
- Rounded corners
- Foreground text
- Hidden hard shadow initially
- Focus border and hard shadow use accent color
- Labels are bold, uppercase, and small

## Layout Strategy

- Container: max width around `72rem`
- Section spacing: generous vertical rhythm around `96px`
- Grid: stable 12-column logic, grouped into readable blocks
- Hero: text left, visual right, yellow circle, dotted patterns, blob geometry
- Cards: tactile, asymmetric, and scannable

## Effects & Animation

- Hover transition: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Entrances pop in with scale and translation
- Hard-shadow lift on hover
- Wiggle only where it reinforces interactivity
- Respect `prefers-reduced-motion`

## Iconography

Icons should feel chunky, rounded, and enclosed in shapes. A check icon is a check inside a green circle, not a floating check mark.

## Responsive Strategy

- Stack major layouts on mobile.
- Reduce hard shadow offsets on small screens.
- Hide or simplify complex decorations that could overlap content.
- Keep touch targets at least 48px.
- Prevent horizontal overflow.

## Accessibility

- Use semantic HTML.
- Maintain strong contrast.
- Never rely only on color.
- Use visible focus states.
- Respect reduced motion.
