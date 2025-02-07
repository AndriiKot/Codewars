const domainName = (url) => {
  return url.match(/^(?:https?:\/\/)?(?:www\.)?([^\.]+)/)[1];
};
