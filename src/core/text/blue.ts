import { code } from '#/utils/code.ts';
import { run } from '#/utils/run.ts';

/**
 * Set text color to blue.
 *
 * @example Usage
 * ```ts
 * import { blue } from "@dephub/colors";
 *
 * console.log(blue("Hello, world!"));
 * ```
 *
 * @param str The text to make blue
 * @returns The blue text
 */
export function blue(str: string): string {
  return run(str, code([34], 39));
}
