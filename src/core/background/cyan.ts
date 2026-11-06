import { code } from '@/utils/code.js';
import { run } from '@/utils/run.js';

/**
 * Set background color to cyan.
 *
 * @example Usage
 * ```ts
 * import { bgCyan } from "@dephub/colors";
 *
 * console.log(bgCyan("Hello, world!"));
 * ```
 *
 * @param str The text to make its background cyan
 * @returns The text with cyan background
 */
export function bgCyan(str: string): string {
  return run(str, code([46], 49));
}
