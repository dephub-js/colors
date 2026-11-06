import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set text color to red.
 *
 * @example Usage
 * ```ts
 * import { red } from "@dephub/colors";
 *
 * console.log(red("Hello, world!"));
 * ```
 *
 * @param str The text to make red
 * @returns The red text
 */
export function red(str: string): string {
  return run(str, code([31], 39));
}
