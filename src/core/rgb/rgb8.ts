import { clampAndTruncate } from '#/utils/clamp-truncate.ts';
import { code } from '#/utils/code.ts';
import { run } from '#/utils/run.ts';

/**
 * Set text color using paletted 8bit colors.
 *
 * @example Usage
 * ```ts
 * import { rgb8 } from "@dephub/colors";
 *
 * console.log(rgb8("Hello, world!", 42));
 * ```
 *
 * @param str The text to color
 * @param color The color code
 * @returns The text with paletted 8bit color
 */
export function rgb8(str: string, color: number): string {
  return run(str, code([38, 5, clampAndTruncate(color)], 39));
}
