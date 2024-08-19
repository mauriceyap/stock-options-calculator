export const remToPx = (rem: number) =>
  parseFloat(getComputedStyle(document.documentElement).fontSize) * rem;
