import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Invert background color and text color.
 *
 * @example Usage
 * ```ts
 * import { inverse } from "@dephub/colors";
 *
 * console.log(inverse("Hello, world!"));
 * ```
 *
 * @param str The text to invert its color
 * @returns The inverted text
 */
export function inverse(str: string): string {
  return run(str, code([7], 27));
}
