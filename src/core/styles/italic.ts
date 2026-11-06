import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Make the text italic.
 *
 * @example Usage
 * ```ts
 * import { italic } from "@dephub/colors";
 *
 * console.log(italic("Hello, world!"));
 * ```
 *
 * @param str The text to make italic
 * @returns The italic text
 */
export function italic(str: string): string {
  return run(str, code([3], 23));
}
