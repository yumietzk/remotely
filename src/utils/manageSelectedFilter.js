function addItem(array, item) {
  return [...array, item];
}

export function deleteItem(array, item) {
  return array.filter((cur) => cur !== item);
}

export function manageSelectedFilter(selected, label) {
  return selected.includes(label)
    ? deleteItem(selected, label)
    : addItem(selected, label);
}
