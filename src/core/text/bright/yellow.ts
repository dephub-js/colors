import { code } from '#/utils/code.ts';
import { run } from '#/utils/run.ts';

/**
 * Set text color to bright yellow.
 *
 * @example Usage
 * ```ts
 * import { brightYellow } from "@dephub/colors";
 *
 * console.log(brightYellow("Hello, world!"));
 * ```
 *
 * @param str The text to make bright yellow
 * @returns The bright yellow text
 */
export function brightYellow(str: string): string {
  return run(str, code([93], 39));
}
