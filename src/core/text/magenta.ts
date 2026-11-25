import { code } from '#/utils/code.ts';
import { run } from '#/utils/run.ts';

/**
 * Set text color to magenta.
 *
 * @example Usage
 * ```ts
 * import { magenta } from "@dephub/colors";
 *
 * console.log(magenta("Hello, world!"));
 * ```
 *
 * @param str The text to make magenta
 * @returns The magenta text
 */
export function magenta(str: string): string {
  return run(str, code([35], 39));
}
