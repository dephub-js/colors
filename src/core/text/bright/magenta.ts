import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set text color to bright magenta.
 *
 * @example Usage
 * ```ts
 * import { brightMagenta } from "@dephub/colors";
 *
 * console.log(brightMagenta("Hello, world!"));
 * ```
 *
 * @param str The text to make bright magenta
 * @returns The bright magenta text
 */
export function brightMagenta(str: string): string {
  return run(str, code([95], 39));
}
