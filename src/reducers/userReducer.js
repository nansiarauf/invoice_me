const userReducer = (state, action) => {
  switch (action.type) {
    //LOG USER IN
    case "LOG_USER_IN":
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      return {
        ...state,
        userInfo: JSON.parse(localStorage.getItem("userInfo")),
        loading: false,
      };
    case "USER_SUCCESS":
      return {
        ...state,
        userInfo: JSON.parse(localStorage.getItem("userInfo")),
        loading: false,
      };
    //REGISTER USER
    case "REGISTER_USER":
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    //DESTROY USER DATA AND LOGOUT
    case "LOG_OUT":
      return {
        ...state,
        loading: false,
        userInfo: "",
      };
    default:
      return state;
  }
};
export default userReducer;
