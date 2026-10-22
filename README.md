<div align="center">

# Zed Vitesse Theme Classic

![CI](https://github.com/YanChenBai/zed-vitesse-classic-themes/actions/workflows/ci.yml/badge.svg)
![Version](https://badgen.net/github/release/YanChenBai/zed-vitesse-classic-themes)

</div>

Zed Vitesse Theme Classic is a fork of [Zed Vitesse Theme Refined](https://github.com/colinlienard/zed-vitesse-theme-refined), itself a refined port of the [Vitesse theme for VSCode](https://github.com/antfu/vscode-theme-vitesse).

This fork focuses on **translucency**: every theme is drawn on a blurred, partly transparent window so your desktop shows through, and a slightly lighter alternative to the pure black theme is included.

## Themes

| Theme                        | Appearance | Background      |
| ---------------------------- | ---------- | --------------- |
| `Vitesse Classic Dark`       | dark       | `#121212` @ 65% |
| `Vitesse Classic Dark Soft`  | dark       | `#222222` @ 65% |
| `Vitesse Classic Black`      | dark       | `#000000` @ 65% |
| `Vitesse Classic Black Soft` | dark       | `#0d0d0d` @ 65% |
| `Vitesse Classic Light`      | light      | `#ffffff` @ 65% |
| `Vitesse Classic Light Soft` | light      | `#f1f0e9` @ 65% |

`Vitesse Classic Black Soft` is the pure black theme lifted one step (`#000000` → `#0d0d0d`) so it reads softer on high-contrast displays without drifting into the dark grey of `Dark`.

## Transparency and blur

All themes set `"background.appearance": "blurred"`, so the desktop shows through a frosted-glass window rather than a flat see-through one:

- **macOS** — window vibrancy, works out of the box.
- **Windows** — DWM acrylic. The system *Settings → Personalization → Colors → Transparency effects* toggle must be on.
- **Linux** — depends on the compositor; when blur is unsupported Zed falls back to plain transparency.

The percentages in the table are the tint strength — the lower the value, the more of the blurred desktop shows through. They are set by `classicBackgroundAlpha` in [`src/styles.ts`](./src/styles.ts).

Only the window surfaces are translucent. Floating UI stays fully opaque so it remains readable over anything behind it:

- `elevated_surface.background` — context menus, popups, dialogs
- `panel.overlay.background` — panel overlays and modals

## Installation

This fork is not published to the Zed extension registry. Install it as a dev extension:

1. Clone this repository (or download and unpack it).
2. In Zed run `zed: extensions`, then choose **Install Dev Extension** and pick the repository folder.

Alternatively, copy `themes/vitesse-classic-theme.json` into Zed's `themes` directory and pick one of the `Vitesse Classic …` themes from `theme selector: toggle`.

## Screenshots

Screenshots show the colour palettes; the translucent background is not visible in a static image.

<div align="center">

### Vitesse Classic Dark

![Vitesse Classic Dark](./assets/screenshot-dark.png)

### Vitesse Classic Dark Soft

![Vitesse Classic Dark Soft](./assets/screenshot-dark-soft.png)

### Vitesse Classic Light

![Vitesse Classic Light](./assets/screenshot-light.png)

### Vitesse Classic Light Soft

![Vitesse Classic Light Soft](./assets/screenshot-light-soft.png)

### Vitesse Classic Black

![Vitesse Classic Black](./assets/screenshot-black.png)

</div>

## Development

The themes are generated from TypeScript: edit [`src/colors.ts`](./src/colors.ts) and [`src/styles.ts`](./src/styles.ts), then rebuild.

```sh
bun install

bun run build   # regenerate themes/vitesse-classic-theme.json
bun run watch   # regenerate on every change

bun run typecheck
bun test
```

`themes/vitesse-classic-theme.json` is committed, and `bun test` asserts it matches the generator output — so run `bun run build` before committing after any change under `src/`. CI runs the typecheck, the build and the tests on every push and pull request.

## Origin and credits

This repository is a fork of [colinlienard/zed-vitesse-theme-refined](https://github.com/colinlienard/zed-vitesse-theme-refined), taken at `v0.5.0`. That project is itself a refined port of [antfu/vscode-theme-vitesse](https://github.com/antfu/vscode-theme-vitesse); the colour palettes originate from Anthony Fu's VSCode theme.

What this fork changes:

- Ships only the translucent rendering and drops the opaque originals.
- Uses `background.appearance: "blurred"` for a frosted-glass window instead of plain transparency.
- Adds `Vitesse Classic Black Soft`, a slightly lifted pure-black palette.
- Renames the extension to `Vitesse Theme Classic`, with a new id and file name, so it can be installed next to the upstream extension without conflicts.

Upstream copyright and the MIT licence are preserved in [LICENSE](./LICENSE). Anything about the original palettes themselves should be reported to the upstream project.

## License

[MIT](./LICENSE) © Colin Lienard. Fork maintained by [YanChenBai](https://github.com/YanChenBai) &lt;bycrxemail@gmail.com&gt;.
