export function truncateString(str, length = 150) {
  if (!str) {
    return "";
  }

  const trimmedString = str.trim();

  if (trimmedString.length > length) {
    const newStr = trimmedString.slice(0, length);
    return `${newStr} ...`;
  } else {
    return trimmedString;
  }
}
