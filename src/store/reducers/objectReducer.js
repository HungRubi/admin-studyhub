const initialState = {
    items: [],
    loading: false,
    error: null,
    addMessage: null,
    adding: false,
    item: {},
    editMessage: null,
    editing: false,
    detailMessage: null,
    detailLoading: false,
    deleteMessage: null,
    deleting: false,
};

export default function objectReducer(state = initialState, action) {
    switch (action.type) {

        case 'GET_OBJECTS_REQUEST':
            return { 
                ...state, 
                loading: true, 
                error: null 
            };
        
        case 'GET_OBJECTS_SUCCESS':
            return { 
                ...state, 
                loading: false, 
                items: action.payload || [] 
            };

        case 'GET_OBJECTS_FAILURE':
            return { 
                ...state, 
                loading: false, 
                error: action.payload 
            };

        case 'ADD_OBJECT_REQUEST':
            return { 
                ...state, 
                adding: true, 
                addMessage: null 
            };

        case 'ADD_OBJECT_SUCCESS':
            return { 
                ...state, 
                adding: false, 
                addMessage: action.payload 
            };

        case 'ADD_OBJECT_FAILURE':
            return { 
                ...state, 
                adding: false, 
                addMessage: action.payload 
            };

        case 'DETAIL_OBJECT_REQUEST':
            return { 
                ...state, 
                detailLoading: true, 
                detailMessage: null, 
            };

        case 'DETAIL_OBJECT_SUCCESS':
            return { 
                ...state, 
                detailLoading: false, 
                detailMessage: action.payload,
                item: action.payload || {} 

            };

        case 'DETAIL_OBJECT_FAILURE':
            return { 
                ...state, 
                detailLoading: false, 
                detailMessage: action.payload
            };
            
        case 'EDIT_OBJECT_REQUEST':
            return { 
                ...state, 
                editing: true, 
                editMessage: null, 
            };
        case 'EDIT_OBJECT_SUCCESS':
            return { 
                ...state, 
                editing: false, 
                editMessage: action.payload
            };
        case 'EDIT_OBJECT_FAILURE':
            return { 
                ...state, 
                editing: false, 
                editMessage: action.payload
            };
        case 'DELETE_OBJECT':
            return { 
                ...state, 
                deleting: true, 
                deleteMessage: null
            };  
        case 'DELETE_OBJECT_SUCCESS':
            return { 
                ...state, 
                deleting: false, 
                deleteMessage: action.payload
            };
        case 'DELETE_OBJECT_FAILURE':
            return { 
                ...state, 
                deleting: false, 
                deleteMessage: action.payload
            };
        case 'DELETE_MANY_OBJECTS':
            return { 
                ...state, 
                deleting: true, 
                deleteMessage: null};
        
        case 'DELETE_MANY_OBJECTS_SUCCESS':
            return { 
                ...state, 
                deleting: false, 
                deleteMessage: action.payload
            };
        case 'DELETE_MANY_OBJECTS_FAILURE':
            return { 
                ...state, 
                deleting: false, 
                deleteMessage: action.payload
            };
        case 'RESET_OBJECTS':
            return initialState;

        case 'RESET_ADD_MESSAGE':
            return { 
                ...state, 
                addMessage: null 
            }
        
        case 'RESET_EDIT_MESSAGE':
            return { 
                ...state, 
                editMessage: null 
            }

        default:
            return state;
    }
}
