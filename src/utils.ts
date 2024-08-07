export const getFavicon = (urlInput: string) => {
  const url = new URL(urlInput);
  const domain = url.origin; // Gets the domain

  return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
};
