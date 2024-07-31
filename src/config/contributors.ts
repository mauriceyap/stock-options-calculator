interface Contributor {
  // Real or screen name
  name: string;
  // This can be a personal website, social media profile, a
  // mailto:email@addre.ss or nothing at all
  href: string | undefined;
}

// Please feel free to add yourself to this list if you have contributed to this
// project. Your name will be displayed in the footer of the website.
export const contributors: Contributor[] = [
  // Example:
  // { name: "Basil Brush", href: "https://basilbrush.com" },
];
