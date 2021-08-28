export const fetchCategories = () => {
  const options = {
    method: 'GET',
  };

  return fetch(`/api/categories`, options);
};
