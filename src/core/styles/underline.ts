import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Make the text underline.
 *
 * @example Usage
 * ```ts
 * import { underline } from "@dephub/colors";
 *
 * console.log(underline("Hello, world!"));
 * ```
 *
 * @param str The text to underline
 * @returns The underlined text
 */
export function underline(str: string): string {
  return run(str, code([4], 24));
}
