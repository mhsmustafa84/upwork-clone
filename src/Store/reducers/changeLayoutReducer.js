export const changeLayoutReducer = (state = "talent", action) => {
    switch (action.type) {
        case 'CHANGE_LAYOUT':
            return action.payload
        default:
            return state;
    }
};