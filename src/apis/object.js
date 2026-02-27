import api from '../axios';

export const apiGetObject = (search = '', sort = 'createdAt_desc') => {
    const params = {};
    if (search) params.timkiem = search;
    if (sort) params.sort = sort;
    return api.get('/objects', { params });
};

export const apiAddObject = (data) => {
    return api.post('/objects/add', data);
};

export const apiDetailObject = (id) => {
    return api.get(`/objects/id/${id}`);
};

export const apiEditObject = (id, data) => {
    return api.put(`/objects/${id}`, data);
};

export const apiDeleteObject = (id) => {
    return api.delete(`/objects/${id}`, id);
};

export const apiDeleteManyObjects = (ids) => {
    return api.delete('/objects/delete-many', { data: { ids } });
};

export default { apiGetObject, apiAddObject, apiDeleteObject, apiDeleteManyObjects };
