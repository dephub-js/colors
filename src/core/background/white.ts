import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to white.
 *
 * @example Usage
 * ```ts
 * import { bgWhite } from "@dephub/colors";
 *
 * console.log(bgWhite("Hello, world!"));
 * ```
 *
 * @param str The text to make its background white
 * @returns The text with white background
 */
export function bgWhite(str: string): string {
  return run(str, code([47], 49));
}
