export const SignUpReducer = (
  state = {
    email: "",
  },
  action
) => {
  switch (action.type) {
    case "SIGN_UP":
      return action.payload;
    default:
      return state;
  }
};
