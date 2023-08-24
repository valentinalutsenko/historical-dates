const useUpperCaseString = (string: string): string => {
  if (string.length === 0) {
    return string;
  }

  const firstChar = string.charAt(0);
  const useUpperCaseString = firstChar.toLowerCase();

  return useUpperCaseString + string.slice(1);
};

export default useUpperCaseString;
