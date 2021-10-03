const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;

export const cleanEscapedString = (input: string) => {
  return String(input || '')
    .match(escapedStringRegExp)![1]
    .replace(doubleQuoteRegExp, "'");
};
