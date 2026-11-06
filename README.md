# @dephub/colors 🎨

> A tiny, zero-dependency, ESM-only library for styling terminal text with ANSI colors and text styles.

[![NPM version](https://img.shields.io/npm/v/@dephub/colors.svg?style=flat)](https://npmjs.org/package/@dephub/colors)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

## Features ✨

- 🎨 **Full color palette** – standard and bright colors for both text and background
- ✨ **Text styles** – `bold`, `dim`, `italic`, `underline`, `strikethrough`, `hidden`, `inverse`, `reset`
- 🌈 **True color support** – 24-bit RGB (`rgb24`) and paletted 8-bit (`rgb8`, `bgRgb8`) colors
- 🧩 **Composable** – nest styles and colors freely; ANSI closing codes are handled safely
- 🪶 **Zero dependencies** – ESM-only, tree-shakeable, and works in Node.js, Bun, and Deno

---

## Installation 📦

- npm: `npm install @dephub/colors`
- pnpm: `pnpm add @dephub/colors`
- yarn: `yarn add @dephub/colors`
- bun: `bun add @dephub/colors`

---

## Usage 🎯

### API 🧩

```ts
import {
  bgBlack,
  bgBlue,
  bgRed,
  bgRgb8,
  bgBrightGreen,
  black,
  blue,
  bold,
  dim,
  green,
  italic,
  red,
  rgb8,
  rgb24,
  reset,
  strikethrough,
  underline,
  yellow,
} from '@dephub/colors';

// Basic text colors
console.log(red('Error!'));
console.log(green('Success!'));
console.log(yellow('Warning!'));

// Background colors
console.log(bgRed(' Important '));
console.log(bgBlue(' Info '));
console.log(bgBrightGreen(' OK '));

// Text styles
console.log(bold('Bold text'));
console.log(dim('Dim text'));
console.log(italic('Italic text'));
console.log(underline('Underlined text'));
console.log(strikethrough('Struck through'));

// Composing styles
console.log(bold(red('Bold and red')));
console.log(bgBlue(black(' Black on blue ')));

// Reset
console.log(reset('Back to normal'));

// 24-bit RGB (number in range 0x000000–0xffffff, or { r, g, b })
console.log(rgb24('Hello, world!', 0xff00ff));
console.log(rgb24('Hello, world!', { r: 255, g: 0, b: 255 }));

// Paletted 8-bit color (0–255)
console.log(rgb8('Hello, world!', 42));
console.log(bgRgb8('Hello, world!', 42));
```

#### Available exports

| Category                     | Functions                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Text colors**              | `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`                                                         |
| **Bright text colors**       | `brightBlack`, `brightRed`, `brightGreen`, `brightYellow`, `brightBlue`, `brightMagenta`, `brightCyan`, `brightWhite`                 |
| **Background colors**        | `bgBlack`, `bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`                                                 |
| **Bright background colors** | `bgBrightBlack`, `bgBrightRed`, `bgBrightGreen`, `bgBrightYellow`, `bgBrightBlue`, `bgBrightMagenta`, `bgBrightCyan`, `bgBrightWhite` |
| **Styles**                   | `bold`, `dim`, `italic`, `underline`, `strikethrough`, `hidden`, `inverse`, `reset`                                                   |
| **RGB / 8-bit**              | `rgb24`, `rgb8`, `bgRgb8`                                                                                                             |

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
