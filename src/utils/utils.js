export function isValidValue(value) {
  if (typeof value === "number") return value.toFixed(2);

  return "NAN";
}

export function increaseCurrentInventory(
  value,
  updateRecordId,
  ingredientsInventories
) {
  const getCurrentValue = ingredientsInventories.find(
    (ingredient) => updateRecordId === ingredient.id
  ).fields["Current Inventory"];

  return parseFloat(value) + parseFloat(getCurrentValue);
}

export function subtractCurrentInventory(
  value,
  updateRecordId,
  ingredientsInventories
) {
  const getCurrentValue = ingredientsInventories.find(
    (ingredient) => updateRecordId === ingredient.id
  ).fields["Current Inventory"];

  return parseFloat(getCurrentValue) - parseFloat(value);
}
