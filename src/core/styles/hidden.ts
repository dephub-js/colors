import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Make the text hidden.
 *
 * @example Usage
 * ```ts
 * import { hidden } from "@dephub/colors";
 *
 * console.log(hidden("Hello, world!"));
 * ```
 *
 * @param str The text to hide
 * @returns The hidden text
 */
export function hidden(str: string): string {
  return run(str, code([8], 28));
}
