import { code } from '#/utils/code.ts';
import { run } from '#/utils/run.ts';

/**
 * Set text color to bright white.
 *
 * @example Usage
 * ```ts
 * import { brightWhite } from "@dephub/colors";
 *
 * console.log(brightWhite("Hello, world!"));
 * ```
 *
 * @param str The text to make bright white
 * @returns The bright white text
 */
export function brightWhite(str: string): string {
  return run(str, code([97], 39));
}
