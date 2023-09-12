export function formatString(string) {
  return string
    .trim()
    .replace(" ", "")
    .replace("_", "")
    .replace("-", "")
    .toLowerCase();
}
