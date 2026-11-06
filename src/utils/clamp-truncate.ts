/* Special Color Sequences */

/**
 * Clamp and truncate color codes
 * @param n The input number
 * @param max The number to truncate to
 * @param min The number to truncate from
 */
export function clampAndTruncate(n: number, max = 255, min = 0): number {
  return Math.trunc(Math.max(Math.min(n, max), min));
}
