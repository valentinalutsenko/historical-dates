const capitalizeString = (string: string): string => {
  if (string.length === 0) {
    return string;
  }

  const firstChar = string.charAt(0);
  const capitalizeString = firstChar.toLowerCase();

  return capitalizeString + string.slice(1);
};

export default capitalizeString;
