import { code } from '#/utils/code.ts';
import { run } from '#/utils/run.ts';

/**
 * Set text color to bright red.
 *
 * @example Usage
 * ```ts
 * import { brightRed } from "@dephub/colors";
 *
 * console.log(brightRed("Hello, world!"));
 * ```
 *
 * @param str The text to make bright red
 * @returns The bright red text
 */
export function brightRed(str: string): string {
  return run(str, code([91], 39));
}
