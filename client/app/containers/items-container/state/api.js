export const fetchItems= (category) => {
  const options = {
    method: 'GET',
  };

  return fetch(`/api/items?type=${category}`, options);
};
