const decodedSearch = () => {
  return decodeURIComponent((window.location.search).split('=')[1]);
};

module.exports = decodedSearch;
