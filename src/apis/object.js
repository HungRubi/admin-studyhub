import api from '../axios';

export const apiGetObject = (search = '', sort = 'createdAt_desc') => {
    const params = {};
    if (search) params.timkiem = search;
    if (sort) params.sort = sort;
    console.log('apiGetObject - params:', params);
    return api.get('/objects', { params });
};

export const apiAddObject = (data) => {
    return api.post('/objects/add', data);
};

export const apiDeleteObject = (id) => {
    return api.delete(`/objects/${id}`, id);
};

export const apiDeleteManyObjects = (ids) => {
    return api.delete('/objects/delete-many', { data: { ids } });
};

export default { apiGetObject, apiAddObject, apiDeleteObject, apiDeleteManyObjects };
