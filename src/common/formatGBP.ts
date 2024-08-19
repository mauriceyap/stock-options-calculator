const gbpFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

const gbpCompactFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  notation: "compact",
});

export const formatGBP = (amount: number, compact = false) =>
  (compact ? gbpCompactFormatter : gbpFormatter).format(amount);
