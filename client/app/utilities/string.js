export const trim = (str) => {
  if (!str) {
    return '';
  }

  const newStr = `${str}`.split('. ', 2).join('. ');

  return `${newStr}.`;
};
