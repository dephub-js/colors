import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to bright black.
 *
 * @example Usage
 * ```ts
 * import { bgBrightBlack } from "@dephub/colors";
 *
 * console.log(bgBrightBlack("Hello, world!"));
 * ```
 *
 * @param str The text to make its background bright black
 * @returns The text with bright black background
 */
export function bgBrightBlack(str: string): string {
  return run(str, code([100], 49));
}
