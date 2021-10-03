import { cleanEscapedString } from '../clean-escaped-string';
import formatters from './formatters';
import defaultLocale from './locale/id-ID/index';

const fragmentRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

export const format = (
  dt: Date = new Date(),
  format?: string,
  options?: { locale?: typeof defaultLocale }
) => {
  if (
    typeof format === 'undefined' ||
    Object.prototype.toString.call(dt) !== '[object Date]'
  )
    return dt;

  options = options || {};
  const locale = options.locale || defaultLocale;

  const result = String(format || '')
    .match(fragmentRegExp)!
    .map((str) => {
      if (str === "''") {
        return "'";
      }
      const firstChar = <keyof typeof formatters>str[0];

      if (<string>firstChar === "'") {
        return cleanEscapedString(str);
      }

      const formatter = formatters[firstChar];

      if (formatter) {
        return formatter(dt, str, locale.localize);
      }

      return str;
    })
    .join('');

  return result;
};
