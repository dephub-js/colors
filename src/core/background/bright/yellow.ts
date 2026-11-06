import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to bright yellow.
 *
 * @example Usage
 * ```ts
 * import { bgBrightYellow } from "@dephub/colors";
 *
 * console.log(bgBrightYellow("Hello, world!"));
 * ```
 *
 * @param str The text to make its background bright yellow
 * @returns The text with bright yellow background
 */
export function bgBrightYellow(str: string): string {
  return run(str, code([103], 49));
}
