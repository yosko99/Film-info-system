const getSubmitUrl = () => {
  const form = document.forms[0];
  const formData = new FormData(form);
  const search = new URLSearchParams(formData);
  const queryString = search.toString();

  return queryString;
};

module.exports = getSubmitUrl;
