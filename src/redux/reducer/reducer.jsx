const intialState = {
  user: null,
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "UserRegistration":
      return { ...state, user: action.payload };
      case "LOGOUT": return { ...state, user: null };
    default:
      return state;
  }
};

export default reducer;
