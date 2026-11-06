import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set text color to yellow.
 *
 * @example Usage
 * ```ts
 * import { yellow } from "@dephub/colors";
 *
 * console.log(yellow("Hello, world!"));
 * ```
 *
 * @param str The text to make yellow
 * @returns The yellow text
 */
export function yellow(str: string): string {
  return run(str, code([33], 39));
}
