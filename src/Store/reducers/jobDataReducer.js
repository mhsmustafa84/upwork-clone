export const jobDataReducer = (state = {}, action) => {
    switch (action.type) {
        case "JOB_DATA":
            return action.payload;
        default:
            return state;
    }
};