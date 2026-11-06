import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set text color to bright blue.
 *
 * @example Usage
 * ```ts
 * import { brightBlue } from "@dephub/colors";
 *
 * console.log(brightBlue("Hello, world!"));
 * ```
 *
 * @param str The text to make bright blue
 * @returns The bright blue text
 */
export function brightBlue(str: string): string {
  return run(str, code([94], 39));
}
