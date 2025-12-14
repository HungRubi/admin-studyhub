
const initState = {
    message: null,
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case "RESET_MESS":
            return {
                ...state,
                message: null,
            };
        
        default:
            return state;
    }
};

export default appReducer;