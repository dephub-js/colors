import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to black.
 *
 * @example Usage
 * ```ts
 * import { bgBlack } from "@dephub/colors";
 *
 * console.log(bgBlack("Hello, world!"));
 * ```
 *
 * @param str The text to make its background black
 * @returns The text with black background
 */
export function bgBlack(str: string): string {
  return run(str, code([40], 49));
}
