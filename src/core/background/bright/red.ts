import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to bright red.
 *
 * @example Usage
 * ```ts
 * import { bgBrightRed } from "@dephub/colors";
 *
 * console.log(bgBrightRed("Hello, world!"));
 * ```
 *
 * @param str The text to make its background bright red
 * @returns The text with bright red background
 */
export function bgBrightRed(str: string): string {
  return run(str, code([101], 49));
}
