import { fetchObjects, addObject as apiAddObject, apiDeleteObject } from '../../apis/object';

export const getObjects = (search = '') => {
	return async (dispatch) => {
		dispatch({ type: 'GET_OBJECTS_REQUEST' });
		try {
			const res = await fetchObjects(search);
			const respData = res?.data?.data || {};
			const items = respData.objectFormat || respData.searchObject || [];
			dispatch({ type: 'GET_OBJECTS_SUCCESS', payload: items });
		} catch (error) {
			dispatch({ type: 'GET_OBJECTS_FAILURE', payload: error.message || 'Error' });
		}
	};
};

export const resetObjects = () => ({ type: 'RESET_OBJECTS' });

export const addObject = (payload) => {
	return async (dispatch) => {
		dispatch({ type: 'ADD_OBJECT_REQUEST' });
		try {
			const res = await apiAddObject(payload);
			console.log(res)
			const message = res?.data?.message || 'Added';
			dispatch({ type: 'ADD_OBJECT_SUCCESS', payload: message });
			// refresh list after add
			dispatch(getObjects());
			return { ok: true, message };
		} catch (error) {
			const msg = error?.response?.data?.message || error.message || 'Error';
			dispatch({ type: 'ADD_OBJECT_FAILURE', payload: msg });
			return { ok: false, message: msg };
		}
	};
};

export const deleteObject = (payload) => {
	return async (dispatch) => {
		dispatch({ type: 'DELETE_OBJECT' });
		try{
			const res = await apiDeleteObject(payload);
			console.log(res);
			const message = res?.data?.message || "Deleted";
			dispatch({ type: 'DELETE_OBJECT_SUCCESS', payload: message});
			dispatch(getObjects());
			return { ok:true, message }
		}catch (error) {
			const msg = error?.response?.data?.message || error.message || 'Error';
			dispatch({ type: 'DELETE_OBJECT_FAILURE', payload: msg });
			return { ok: false, message: msg };
		}
	}
}

