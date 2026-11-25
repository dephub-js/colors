import { code } from '#/utils/code.ts';
import { run } from '#/utils/run.ts';

/**
 * Set text color to green.
 *
 * @example Usage
 * ```ts
 * import { green } from "@dephub/colors";
 *
 * console.log(green("Hello, world!"));
 * ```
 *
 * @param str The text to make green
 * @returns The green text
 */
export function green(str: string): string {
  return run(str, code([32], 39));
}
