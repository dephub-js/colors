import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set text color to black.
 *
 * @example Usage
 * ```ts
 * import { black } from "@dephub/colors";
 *
 * console.log(black("Hello, world!"));
 * ```
 *
 * @param str The text to make black
 * @returns The black text
 */
export function black(str: string): string {
  return run(str, code([30], 39));
}
