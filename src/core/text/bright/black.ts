import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set text color to bright black.
 *
 * @example Usage
 * ```ts
 * import { brightBlack } from "@dephub/colors";
 *
 * console.log(brightBlack("Hello, world!"));
 * ```
 *
 * @param str The text to make bright black
 * @returns The bright black text
 */
export function brightBlack(str: string): string {
  return run(str, code([90], 39));
}
