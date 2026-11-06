import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Make the text bold.
 *
 * @example Usage
 * ```ts
 * import { bold } from "@dephub/colors";
 *
 * console.log(bold("Hello, world!"));
 * ```
 *
 * @param str The text to make bold
 * @returns The bold text
 */
export function bold(str: string): string {
  return run(str, code([1], 22));
}
