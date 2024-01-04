export function formatDate(orgDate) {
  if (!orgDate) {
    return "";
  }

  const publisedDate = new Date(orgDate);
  const publisedDateArr = publisedDate.toString().split(" ");
  const month = publisedDateArr[1];
  const date = publisedDateArr[2];
  const year = publisedDateArr[3];

  return `${month} ${date}, ${year}`;
}
