import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to bright cyan.
 *
 * @example Usage
 * ```ts
 * import { bgBrightCyan } from "@dephub/colors";
 *
 * console.log(bgBrightCyan("Hello, world!"));
 * ```
 *
 * @param str The text to make its background bright cyan
 * @returns The text with bright cyan background
 */
export function bgBrightCyan(str: string): string {
  return run(str, code([106], 49));
}
