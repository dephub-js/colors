import { code } from '#/utils/code.ts';
import { run } from '#/utils/run.ts';

/**
 * Reset the text modified.
 *
 * @example Usage
 * ```ts
 * import { reset } from "@dephub/colors";
 *
 * console.log(reset("Hello, world!"));
 * ```
 *
 * @param str The text to reset
 * @returns The text with reset color
 */
export function reset(str: string): string {
  return run(str, code([0], 0));
}
