export const html = (strings, ...expressions) => strings.reduce(
  (acc, string, index) => `${acc}${string}${expressions.length > index ? expressions[index] : ''}`,
  '',
);
