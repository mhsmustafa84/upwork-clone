export const clientJobReducer = (state = {}, action) => {
    switch (action.type) {
        case "CLIENT_JOBS_DATA":
            return action.payload;
        default:
            return state;
    }
};