import { clampAndTruncate } from '@/utils/clamp-truncate.js';
import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color using paletted 8bit colors.
 *
 * @example Usage
 * ```ts
 * import { bgRgb8 } from "@dephub/colors";
 *
 * console.log(bgRgb8("Hello, world!", 42));
 * ```
 *
 * @param str The text to set the background color of
 * @param color The color code
 * @returns The text with paletted 8bit background color
 */
export function bgRgb8(str: string, color: number): string {
  return run(str, code([48, 5, clampAndTruncate(color)], 49));
}
