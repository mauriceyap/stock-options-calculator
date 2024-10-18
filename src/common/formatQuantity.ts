const quantityFormatter = new Intl.NumberFormat("en-GB", {
  style: "decimal",
});

const quantityCompactFormatter = new Intl.NumberFormat("en-GB", {
  style: "decimal",
  currency: "GBP",
  notation: "compact",
});

export const formatQuantity = (quantity: number, compact = false) =>
  (compact ? quantityCompactFormatter : quantityFormatter).format(quantity);
