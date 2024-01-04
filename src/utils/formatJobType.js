export function formatJobType(type) {
  if (!type) {
    return "";
  }

  if (type.includes("_")) {
    return type
      .split("_")
      .map((item, i) =>
        i === 0 ? `${item[0].toUpperCase()}${item.slice(1)}` : item
      )
      .join(" ");
  } else {
    return `${type[0].toUpperCase()}${type.slice(1)}`;
  }
}
