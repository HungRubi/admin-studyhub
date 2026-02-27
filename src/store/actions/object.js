import { apiGetObject, apiAddObject, apiDeleteObject, apiDeleteManyObjects, apiEditObject, apiDetailObject } from '../../apis/object';

export const resetAddMessage = () => ({ type: 'RESET_ADD_MESSAGE' });
export const resetEditMessage = () => ({ type: 'RESET_EDIT_MESSAGE' });
export const resetObjects = () => ({ type: 'RESET_OBJECTS' });

export const getObjects = (search = '', sort = 'createdAt_desc') => {
	return async (dispatch) => {
		dispatch({ type: 'GET_OBJECTS_REQUEST' });
		try {
			const res = await apiGetObject(search, sort);
			const respData = res?.data?.data || {};
			const items = respData.objectFormat || respData.searchObject || [];
			dispatch({ type: 'GET_OBJECTS_SUCCESS', payload: items });
		} catch (error) {
			dispatch({ type: 'GET_OBJECTS_FAILURE', payload: error.message || 'Error' });
		}
	};
};

export const addObject = (payload) => {
	return async (dispatch) => {
		dispatch({ type: 'ADD_OBJECT_REQUEST' });
		try {
			const res = await apiAddObject(payload);
			console.log(res)
			const message = res?.data?.message || 'Added';
			dispatch({ type: 'ADD_OBJECT_SUCCESS', payload: message });
			// refresh list after add
			dispatch(getObjects('', 'createdAt_desc'));
			return { ok: true, message };
		} catch (error) {
			const msg = error?.response?.data?.message || error.message || 'Error';
			dispatch({ type: 'ADD_OBJECT_FAILURE', payload: msg });
			return { ok: false, message: msg };
		}
	};
};

export const detailObject = (id, payload) => {
	return async (dispatch) => {
		dispatch({ type: 'DETAIL_OBJECT_REQUEST' });
		try {
			const res = await apiDetailObject(id, payload);
			const item = res?.data.object || {};
			dispatch({ type: 'DETAIL_OBJECT_SUCCESS', payload: item });
		} catch (error) {
			const msg = error?.response?.data?.message || error.message || 'Error';
			dispatch({ type: 'DETAIL_OBJECT_FAILURE', payload: msg });
			return { ok: false, message: msg };
		}
	};
};

export const editObject = (id, payload) => {
	return async (dispatch) => {
		dispatch({ type: 'EDIT_OBJECT_REQUEST' });
		try {
			const res = await apiEditObject(id, payload);
			const message = res?.data?.message || 'Edited';
			dispatch({ type: 'EDIT_OBJECT_SUCCESS', payload: message });
			
			dispatch(getObjects('', 'createdAt_desc'));
			return { ok: true, message };
		} catch (error) {
			const msg = error?.response?.data?.message || error.message || 'Error';
			dispatch({ type: 'EDIT_OBJECT_FAILURE', payload: msg });
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
			dispatch(getObjects('', 'createdAt_desc'));
			return { ok:true, message }
		}catch (error) {
			const msg = error?.response?.data?.message || error.message || 'Error';
			dispatch({ type: 'DELETE_OBJECT_FAILURE', payload: msg });
			return { ok: false, message: msg };
		}
	}
}

export const deleteManyObjects = (payload) => {
	return async (dispatch) => {
		dispatch({ type: 'DELETE_MANY_OBJECTS' });
		try{
			const res = await apiDeleteManyObjects(payload);
			console.log(res);
			const message = res?.data?.message || "Deleted many";
			dispatch({ type: 'DELETE_MANY_OBJECTS_SUCCESS', payload: message});
			dispatch(getObjects('', 'createdAt_desc'));
			return { ok:true, message }
		}catch (error) {
			const msg = error?.response?.data?.message || error.message || 'Error';
			dispatch({ type: 'DELETE_MANY_OBJECTS_FAILURE', payload: msg });
			return { ok: false, message: msg };
		}
	}
}

