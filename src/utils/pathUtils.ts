// src/utils/pathUtils.ts
export const basePath = "/showcase";

export const prefixPath = (href: string): string => {
  if (href.startsWith("/") && !href.startsWith("//")) {
    // If href is exactly "/", ensure it becomes basePath + "/"
    // otherwise, it's basePath + href
    if (href === "/") {
      return `${basePath}/`;
    }
    return `${basePath}${href}`;
  }
  return href; // For external links, mailto, tel, or "#"
};