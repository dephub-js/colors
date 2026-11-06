import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to bright magenta.
 *
 * @example Usage
 * ```ts
 * import { bgBrightMagenta } from "@dephub/colors";
 *
 * console.log(bgBrightMagenta("Hello, world!"));
 * ```
 *
 * @param str The text to make its background bright magenta
 * @returns The text with bright magenta background
 */
export function bgBrightMagenta(str: string): string {
  return run(str, code([105], 49));
}
