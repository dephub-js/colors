import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to bright green.
 *
 * @example Usage
 * ```ts
 * import { bgBrightGreen } from "@dephub/colors";
 *
 * console.log(bgBrightGreen("Hello, world!"));
 * ```
 *
 * @param str The text to make its background bright green
 * @returns The text with bright green background
 */
export function bgBrightGreen(str: string): string {
  return run(str, code([102], 49));
}
