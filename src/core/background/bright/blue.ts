import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to bright blue.
 *
 * @example Usage
 * ```ts
 * import { bgBrightBlue } from "@dephub/colors";
 *
 * console.log(bgBrightBlue("Hello, world!"));
 * ```
 *
 * @param str The text to make its background bright blue
 * @returns The text with bright blue background
 */
export function bgBrightBlue(str: string): string {
  return run(str, code([104], 49));
}
