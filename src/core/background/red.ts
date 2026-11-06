import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to red.
 *
 * @example Usage
 * ```ts
 * import { bgRed } from "@dephub/colors";
 *
 * console.log(bgRed("Hello, world!"));
 * ```
 *
 * @param str The text to make its background red
 * @returns The text with red background
 */
export function bgRed(str: string): string {
  return run(str, code([41], 49));
}
