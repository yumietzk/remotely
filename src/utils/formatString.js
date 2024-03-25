export function formatString(string) {
  return string
    .trim()
    .replaceAll(" ", "")
    .replaceAll("_", "")
    .replaceAll("-", "")
    .toLowerCase();
}
