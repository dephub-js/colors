import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to bright white.
 *
 * @example Usage
 * ```ts
 * import { bgBrightWhite } from "@dephub/colors";
 *
 * console.log(bgBrightWhite("Hello, world!"));
 * ```
 *
 * @param str The text to make its background bright white
 * @returns The text with bright white background
 */
export function bgBrightWhite(str: string): string {
  return run(str, code([107], 49));
}
