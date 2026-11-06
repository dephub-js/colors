import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to magenta.
 *
 * @example Usage
 * ```ts
 * import { bgMagenta } from "@dephub/colors";
 *
 * console.log(bgMagenta("Hello, world!"));
 * ```
 *
 * @param str The text to make its background magenta
 * @returns The text with magenta background
 */
export function bgMagenta(str: string): string {
  return run(str, code([45], 49));
}
