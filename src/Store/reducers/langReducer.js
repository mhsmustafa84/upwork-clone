const intialVal = JSON.parse(localStorage.getItem("lang")) || "en"
console.log(intialVal);
export const langReducer = (state = intialVal, action) => {
    switch (action.type) {
        case "LANG":
            return action.payload;
        default:
            return state;
    }
};