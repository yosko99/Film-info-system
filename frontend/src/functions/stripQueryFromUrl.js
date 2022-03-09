// Strip query parameters from url depending on passed attribute and return array of items
const stripQueryFromUrl = (attr) => {
  const regEx = new RegExp(attr);
  const attributes = [];

  const search = window.location.search.split(regEx);

  search.forEach((a) => {
    if (a[0] === '=') {
      const temp = a.split('&')[0];
      attributes.push(temp.substring(1));
    }
  });
  return attributes;
};

module.exports = stripQueryFromUrl;
