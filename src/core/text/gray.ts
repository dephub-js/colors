import { brightBlack } from './bright/black.js';

/**
 * Set text color to gray.
 *
 * @example Usage
 * ```ts
 * import { gray } from "@dephub/colors";
 *
 * console.log(gray("Hello, world!"));
 * ```
 *
 * @param str The text to make gray
 * @returns The gray text
 */
export function gray(str: string): string {
  return brightBlack(str);
}
