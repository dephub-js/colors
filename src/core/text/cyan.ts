import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set text color to cyan.
 *
 * @example Usage
 * ```ts
 * import { cyan } from "@dephub/colors";
 *
 * console.log(cyan("Hello, world!"));
 * ```
 *
 * @param str The text to make cyan
 * @returns The cyan text
 */
export function cyan(str: string): string {
  return run(str, code([36], 39));
}
