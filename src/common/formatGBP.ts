const gbpFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

export const formatGBP = (amount: number) => gbpFormatter.format(amount);
