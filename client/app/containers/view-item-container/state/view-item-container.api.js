export const fetchItem = (id) => {
  const options = {
    method: 'GET',
  };

  return fetch(`/api/items/${id}`, options);
};
