const gbpFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

// For very small currency amounts, we want to show significant digits, no
// matter how many zeroes after the decimal point
const gbpSmallFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumSignificantDigits: 3,
});

const gbpCompactFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  notation: "compact",
});

export const formatGBP = (amount: number, compact = false) => {
  if (compact) {
    return gbpCompactFormatter.format(amount);
  }

  if (amount < 0.1) {
    return gbpSmallFormatter.format(amount);
  }

  return gbpFormatter.format(amount);
};
