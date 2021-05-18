export const clientDataReducer = (state = {}, action) => {
    switch (action.type) {
        case "CLIENT_DATA":
            return action.payload;
        default:
            return state;
    }
};