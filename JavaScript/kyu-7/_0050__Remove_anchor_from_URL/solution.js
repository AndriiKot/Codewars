function removeUrlAnchor(url) {
  const index = url.indexOf('#');
  return index === -1 ? url : url.slice(0, index);
}
