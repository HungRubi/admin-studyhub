const initialState = {
    items: [],
    loading: false,
    error: null,
    addMessage: null,
    adding: false,
};

export default function objectReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_OBJECTS_REQUEST':
            return { ...state, loading: true, error: null };
        case 'GET_OBJECTS_SUCCESS':
            return { ...state, loading: false, items: action.payload || [] };
        case 'GET_OBJECTS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'ADD_OBJECT_REQUEST':
            return { ...state, adding: true, addMessage: null };
        case 'ADD_OBJECT_SUCCESS':
            return { ...state, adding: false, addMessage: action.payload };
        case 'ADD_OBJECT_FAILURE':
            return { ...state, adding: false, addMessage: action.payload };
        case 'DELETE_OBJECT':
            return { ...state, deleting: true, deleteMessage: null};  
        case 'DELETE_OBJECT_SUCCESS':
            return { ...state, deleting: false, deleteMessage: action.payload};
        case 'DELETE_OBJECT_FAILURE':
            return { ...state, deleting: false, deleteMessage: action.payload};
        case 'RESET_OBJECTS':
            return initialState;
        default:
            return state;
    }
}
