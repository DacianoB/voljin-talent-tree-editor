---
name: "Vol'jin CoA Tree Editor"
description: "A forged Witch Doctor workbench where the familiar talent tree becomes directly editable."
colors:
  charcoal-field: "#101214"
  canvas-black: "#050707"
  forged-surface: "#202224"
  forged-control: "#2c2e31"
  forged-control-hover: "#37393d"
  iron-border: "#484a4e"
  bone-ink: "#f3f0e9"
  ash-muted: "#aaa7a1"
  aged-gold: "#d6a556"
  allocation-yellow: "#ffd447"
  ritual-violet: "#e100db"
  available-green: "#66d94f"
  focus-gold: "#f2c66d"
typography:
  display:
    fontFamily: "Beaufort, serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Beaufort, serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  field: "5px"
  panel: "6px"
  control: "7px"
  pill: "20px"
  circle: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "18px"
  xl: "34px"
components:
  button-default:
    backgroundColor: "{colors.forged-control}"
    textColor: "{colors.bone-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "9px 16px"
  button-default-hover:
    backgroundColor: "{colors.forged-control-hover}"
    textColor: "{colors.bone-ink}"
  button-accent:
    backgroundColor: "#63155f"
    textColor: "{colors.bone-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "9px 16px"
  button-danger:
    backgroundColor: "#3b2424"
    textColor: "#ffb0b0"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "9px 16px"
  field:
    backgroundColor: "#151719"
    textColor: "{colors.bone-ink}"
    rounded: "{rounded.field}"
    padding: "10px"
  tree-tab-active:
    backgroundColor: "#53104f"
    textColor: "{colors.bone-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.field}"
    padding: "9px 11px"
  talent-node:
    backgroundColor: "#090a0b"
    textColor: "{colors.bone-ink}"
    rounded: "{rounded.circle}"
    size: "50px"
  mode-switch-on:
    backgroundColor: "#691866"
    rounded: "{rounded.pill}"
    height: "21px"
    width: "38px"
---

# Design System: Vol'jin CoA Tree Editor

## Overview

**Creative North Star: "The Witch Doctor Workbench"**

The interface treats the supplied Vol'jin tree as a real working artifact: a dense charcoal editing bench lit by restrained class energy, not a generic diagram tool decorated after the fact. Aged gold Beaufort headings carry the fantasy lineage while compact system-font controls keep allocation and authoring quick to scan.

The canvas remains the visual center. Original Witch Doctor field imagery and the CoA icon sprite sit beneath exact branching geometry; forged panels, fine iron borders, and low ambient shadows organize the tool without competing with the tree. Violet means class identity or active editing, green marks currently available talents and paths, bright allocation yellow marks leveled talents and their connections, and cyan marks connection-authoring state.

**Key Characteristics:**

- Charcoal stone surfaces with visible but quiet tonal steps.
- Aged gold Beaufort display type paired with compact system UI controls.
- Restrained violet class energy, never an all-purpose decoration.
- Original local Witch Doctor imagery and icon sprites with recorded provenance.
- Direct manipulation that preserves a clear boundary between spending points and reshaping the tree.

## Colors

The palette is nearly black and mineral, with aged gold for hierarchy and violet used sparingly as the Witch Doctor's active energy.

### Primary

- **Ritual Violet:** Class identity, the active tree tab, and edit-mode borders.
- **Aged Gold:** Display headings and tooltip titles that need fantasy authority without becoming interactive accents.

### Secondary

- **Available Green:** Talents currently selectable and their available incoming paths.
- **Allocation Yellow:** Talents with at least one level and connections between leveled talents.
- **Focus Gold:** The universal keyboard focus ring across buttons, links, and fields.

### Neutral

- **Charcoal Field:** The page ground surrounding the builder.
- **Canvas Black:** The dark veil over the Witch Doctor artwork, keeping talent geometry legible.
- **Forged Surface:** Inspector, tabs, and supporting panel surfaces.
- **Forged Control / Forged Control Hover:** Compact button rest and hover states.
- **Iron Border:** Control and panel edges that separate layers without bright rules.
- **Bone Ink / Ash Muted:** Primary information and supporting metadata.

**The Restrained Energy Rule.** Violet is reserved for class identity and active edit state; do not wash every surface or control in it.

## Typography

**Display Font:** Beaufort (with serif fallback)  
**Body Font:** system-ui (with sans-serif fallback)  
**Label Font:** system-ui (with sans-serif fallback)

**Character:** Beaufort supplies an aged, carved display voice; the native system stack keeps dense controls, counts, and form content immediate and dependable.

### Hierarchy

- **Display:** Bold, tightly tracked responsive type for the centered CoA Builder title.
- **Headline:** Bold Beaufort for help-section headings.
- **Title:** Bold system UI for the Witch Doctor identity in the class header.
- **Body:** Regular system UI with an open reading line height for help copy.
- **Label:** Bold, compact, letter-spaced system UI; uppercase is used for persistent metadata and control labels, not paragraphs.

**The Two-Voice Rule.** Beaufort names the world; system UI operates it.

## Layout

The page sits in a centered 1280px maximum-width frame beneath a sticky 66px top bar. A single collapsible source bar progressively reveals class/spec selection and Ascension-link import, then gets out of the way above the class identity, two tree tabs, and full branching workspace. The tree canvas is a square up to 790px wide inside a stage with a 790px desktop minimum height.

Edit mode reveals a 310px contextual inspector beside the canvas. At 800px and below, the workspace stacks, tabs become single-column, and the inspector moves below the tree. At 520px and below, the canvas stays 620px wide inside a horizontally scrollable stage, talent nodes reduce from 50px to 44px, and the builder reaches the viewport edges.

**The Contextual Inspector Rule.** The inspector occupies layout only in Edit mode; view mode gives the entire workspace to the tree.

## Elevation & Depth

Depth is a hybrid of charcoal tonal layering and restrained ambient shadow. Borders do the structural work; shadows lift only the builder shell, controls, nodes, tooltips, and transient toast above their immediate surface.

### Shadow Vocabulary

- **Control Lift** (`0 5px 14px rgba(0,0,0,.18)`): Default button separation.
- **Builder Ambient** (`0 20px 60px rgba(0,0,0,.25)`): The single large shadow anchoring the editor shell.
- **Node Relief** (`0 5px 13px rgba(0,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.13)`): Talents remain tactile over detailed field art.
- **Tooltip Float** (`0 12px 30px rgba(0,0,0,.55)`): Tooltips clear nodes and connecting lines.
- **Toast Float** (`0 12px 40px #0008`): Short-lived system feedback above the page.

**The Tonal Depth Rule.** Establish structure with near-black surface changes and fine borders first; reserve broad shadow for genuinely elevated objects.

## Shapes

The form language is compact and forged: panels use gently rounded 5–7px corners, while only toggles, portraits, talent nodes, and zoom controls become circles or pills. Talent shape remains meaningful—most nodes are circular, with every fourth rendered as a square—so global rounding must not erase that distinction. Borders are thin on panels and controls but thicken to 3px on talent nodes where state color needs to read immediately.

**The Forged Geometry Rule.** Small radii belong to tools and panels; full circles belong to identity, canvas controls, and talent topology.

## Components

### Buttons

- **Shape:** Compact forged control with a 7px radius and 9px × 16px padding.
- **Primary:** Dark charcoal fill, bone text, and a fine iron border.
- **Hover / Focus:** One-step lighter charcoal on hover; a 2px focus-gold outline with 3px offset for keyboard focus.
- **Accent:** Deep violet is used for Apply changes and active modes, not for every primary action.
- **Danger:** A dark wine surface, muted red border, and pale rose text isolate deletion from ordinary actions.

### Cards / Containers

- **Corner Style:** The builder shell uses a 6px radius; internal regions mostly meet edge-to-edge.
- **Background:** Tonal charcoal surfaces separate tabs, inspector, status bar, and canvas.
- **Shadow Strategy:** Only the outer builder receives the large ambient shell shadow.
- **Border:** Violet-tinted shell and inspector borders connect the frame to class identity.
- **Internal Padding:** Dense 9–18px padding keeps controls close to their context.

### Inputs / Fields

- **Style:** Near-black fill, 1px iron border, 5px radius, and 10px padding.
- **Focus:** The same focus-gold outline used throughout the interface.
- **Disabled:** Disabled inspector controls follow selection availability and inherit reduced opacity from their control state.

### Navigation

The top bar is a sticky 66px charcoal strip. Brand and nav links use compact bold system type; links brighten on hover, and the primary nav hides at 800px to protect the Edit mode control.

### Talent Tree Canvas

The canvas preserves the imported node positions and connection geometry over class field imagery. In view mode, tap or click allocates points and right-click or Refund removes them. Available talents and incoming paths are green; talents with at least one level and connections between leveled talents are bright allocation yellow. Passives are free and auto-learn when their configured point requirement is reached. Edit mode shows the whole tree in neutral, fully colored form without allocation counters or pathway-state colors; selection turns white and connection source turns cyan. On compact touch screens the stage keeps horizontal panning, while node dragging takes touch ownership only during Edit mode.

**The Canvas Gesture Rule.** Preserve the touch pan/drag split: the compact stage pans in view mode, and talent nodes capture touch only when editing.

## Do's and Don'ts

### Do:

- **Do** preserve the exact Witch Doctor/Brewing tree data, positions, and connection geometry when extending the interface.
- **Do** keep violet stateful and restrained, with green for available talents, bright yellow for leveled talents, and cyan for connection source.
- **Do** use Beaufort for display hierarchy and system UI for dense operational text.
- **Do** retain keyboard focus treatment, reduced-motion behavior, and the compact touch pan/drag split.
- **Do** keep every shipping raster local and pair it with source, purpose, date, and rights provenance.

### Don't:

- **Don't** turn the editor into a generic diagram canvas with fantasy color pasted on top.
- **Don't** show the inspector in view mode or let editing controls compete with point allocation.
- **Don't** replace the original field imagery or icon sprite with invented fantasy illustration.
- **Don't** flood passive surfaces with violet, gold, glows, or ornamental framing.
- **Don't** round every node into the same silhouette or soften compact controls into oversized pills.
