
const initState = {
    currentUser: null,
    token: null,
    refreshToken: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    initialized: false,
};

const userReducer = (state = initState, action) => {
    switch (action.type) {

        case "LOGIN":
            return {
                ...state,
            }
            
        default:
            return state;
    }
};

export default userReducer;