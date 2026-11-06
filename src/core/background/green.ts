import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to green.
 *
 * @example Usage
 * ```ts
 * import { bgGreen } from "@dephub/colors";
 *
 * console.log(bgGreen("Hello, world!"));
 * ```
 *
 * @param str The text to make its background green
 * @returns The text with green background
 */
export function bgGreen(str: string): string {
  return run(str, code([42], 49));
}
