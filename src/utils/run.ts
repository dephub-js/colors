import type { Code } from './code.js';

/**
 * Applies color and background based on color code and its associated text
 * @param str The text to apply color settings to
 * @param code The color code to apply
 */
export function run(str: string, code: Code): string {
  return `${code.open}${str.replace(code.regexp, code.open)}${code.close}`;
}
