import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

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
