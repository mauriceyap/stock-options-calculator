/**
 * This defines the employee share schemes supported by this app. See
 * https://www.gov.uk/tax-employee-share-schemes for the full list of such
 * schemes.
 */

export const SHARE_SCHEMES = [
  "emi", // Enterprise Management Incentive
  "none", // Non-tax advantaged share scheme
] as const;
export type ShareScheme = (typeof SHARE_SCHEMES)[number];
