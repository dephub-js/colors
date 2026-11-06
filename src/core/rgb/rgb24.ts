import { clampAndTruncate } from '@/utils/clamp-truncate.js';
import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/** RGB 8-bits per channel. Each in range `0->255` or `0x00->0xff` */
export interface Rgb {
  /** Blue component value */
  b: number;
  /** Green component value */
  g: number;
  /** Red component value */
  r: number;
}

/**
 * Set text color using 24bit rgb.
 * `color` can be a number in range `0x000000` to `0xffffff` or
 * an `Rgb`.
 *
 * @example Usage
 * ```ts
 * import { rgb24 } from "@dephub/colors";
 *
 * rgb24("foo", 0xff00ff);
 * rgb24("foo", {r: 255, g: 0, b: 255});
 * ```
 * @param str The text to color
 * @param color The color code
 * @returns The text with 24bit rgb color
 */
export function rgb24(str: string, color: number | Rgb): string {
  if (typeof color === 'number') {
    return run(
      str,
      code(
        [38, 2, (color >> 16) & 0xff, (color >> 8) & 0xff, color & 0xff],
        39,
      ),
    );
  }
  return run(
    str,
    code(
      [
        38,
        2,
        clampAndTruncate(color.r),
        clampAndTruncate(color.g),
        clampAndTruncate(color.b),
      ],
      39,
    ),
  );
}
