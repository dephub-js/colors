/* eslint-disable security/detect-non-literal-regexp */
export interface Code {
  close: string;
  open: string;
  regexp: RegExp;
}

/**
 * Builds color code
 * @param open
 * @param close
 */
export function code(open: number[], close: number): Code {
  return {
    close: `\x1b[${close}m`,
    open: `\x1b[${open.join(';')}m`,
    regexp: new RegExp(`\\x1b\\[${close}m`, 'g'),
  };
}
