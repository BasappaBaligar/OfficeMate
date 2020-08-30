const INITIAL_STATE = {
    isSignedIn: false
};
export default LoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_FLAG':
            return { isSignedIn: !state.isSignedIn };
        default:
            return state
    }
};