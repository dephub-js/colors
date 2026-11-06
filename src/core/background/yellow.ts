import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to yellow.
 *
 * @example Usage
 * ```ts
 * import { bgYellow } from "@dephub/colors";
 *
 * console.log(bgYellow("Hello, world!"));
 * ```
 *
 * @param str The text to make its background yellow
 * @returns The text with yellow background
 */
export function bgYellow(str: string): string {
  return run(str, code([43], 49));
}
