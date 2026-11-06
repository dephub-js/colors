import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

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
