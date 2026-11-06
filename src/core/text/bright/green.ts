import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set text color to bright green.
 *
 * @example Usage
 * ```ts
 * import { brightGreen } from "@dephub/colors";
 *
 * console.log(brightGreen("Hello, world!"));
 * ```
 *
 * @param str The text to make bright green
 * @returns The bright green text
 */
export function brightGreen(str: string): string {
  return run(str, code([92], 39));
}
