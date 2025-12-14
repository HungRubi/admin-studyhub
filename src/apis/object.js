import api from '../axios';

export const fetchObjects = (search = '') => {
  const params = {};
  if (search) params.timkiem = search;
  return api.get('/objects', { params });
};

export const addObject = (data) => {
  return api.post('/objects/add', data);
};

export default { fetchObjects, addObject };
