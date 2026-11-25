import { code } from '#/utils/code.ts';
import { run } from '#/utils/run.ts';

/**
 * Put horizontal line through the center of the text.
 *
 * @example Usage
 * ```ts
 * import { strikethrough } from "@dephub/colors";
 *
 * console.log(strikethrough("Hello, world!"));
 * ```
 *
 * @param str The text to strike through
 * @returns The text with horizontal line through the center
 */
export function strikethrough(str: string): string {
  return run(str, code([9], 29));
}
