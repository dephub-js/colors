import { code } from '#/utils/code.ts';
import { run } from '#/utils/run.ts';

/**
 * The text emits only a small amount of light.
 *
 * @example Usage
 * ```ts
 * import { dim } from "@dephub/colors";
 *
 * console.log(dim("Hello, world!"));
 * ```
 *
 * @param str The text to dim
 * @returns The dimmed text
 */
export function dim(str: string): string {
  return run(str, code([2], 22));
}
