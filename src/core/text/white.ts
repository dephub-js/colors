import { code } from '#/utils/code.ts';
import { run } from '#/utils/run.ts';

/**
 * Set text color to white.
 *
 * @example Usage
 * ```ts
 * import { white } from "@dephub/colors";
 *
 * console.log(white("Hello, world!"));
 * ```
 *
 * @param str The text to make white
 * @returns The white text
 */
export function white(str: string): string {
  return run(str, code([37], 39));
}
