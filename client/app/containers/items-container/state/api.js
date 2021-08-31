import { queryBuilder } from '../../../utilities/queryBuilder';

export const fetchItems= (queries) => {
  const options = {
    method: 'GET',
  };

  return fetch(`/api/items${queryBuilder(queries)}`, options);
};
