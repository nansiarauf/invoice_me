const clientReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_CLIENTS":
      return {
        ...state,
        clients: action.payload,
        loading: false,
      };
    case "ADD_CLIENT":
      return {
        ...state,
        client: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default clientReducer;
