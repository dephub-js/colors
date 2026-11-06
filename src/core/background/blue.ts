import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to blue.
 *
 * @example Usage
 * ```ts
 * import { bgBlue } from "@dephub/colors";
 *
 * console.log(bgBlue("Hello, world!"));
 * ```
 *
 * @param str The text to make its background blue
 * @returns The text with blue background
 */
export function bgBlue(str: string): string {
  return run(str, code([44], 49));
}
