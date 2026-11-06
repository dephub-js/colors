import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set text color to bright cyan.
 *
 * @example Usage
 * ```ts
 * import { brightCyan } from "@dephub/colors";
 *
 * console.log(brightCyan("Hello, world!"));
 * ```
 *
 * @param str The text to make bright cyan
 * @returns The bright cyan text
 */
export function brightCyan(str: string): string {
  return run(str, code([96], 39));
}
