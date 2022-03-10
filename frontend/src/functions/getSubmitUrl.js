const getSubmitUrl = (id) => {
  const form = document.getElementById(id);
  const formData = new FormData(form);
  const search = new URLSearchParams(formData);
  const queryString = search.toString();

  return queryString;
};

module.exports = getSubmitUrl;
