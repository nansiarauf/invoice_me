import { createContext, useReducer } from "react";
import axios from "axios";
import userReducer from "../reducers/userReducer";

const initialData = {
  userInfo: {},
  loading: true,
  error: null,
};

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialData);

  //LOGIN USER
  async function LoginUser(user) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "https://lit-sea-14855.herokuapp.com/api/v1/user/login",
        user,
        config
      );
      console.log(res.data);

      dispatch({
        type: "LOG_USER_IN",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  //GET LOCALSTORAGE ACTION
  async function getUser() {
    dispatch({
      type: "USER_SUCCESS",
      payload: JSON.parse(localStorage.getItem("userInfo")),
    });
  }
  //REGISTER NEW USER AND LOG THEM IN
  async function RegisterUser(newuser) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "https://lit-sea-14855.herokuapp.com/api/v1/user/register",
        newuser,
        config
      );
      dispatch({
        type: "REGISTER_USER",
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  }
  //LOGOUT USER
  const LogOut = () => {
    localStorage.removeItem("userInfo");
    dispatch({
      type: "LOG_OUT",
    });
  };
  return (
    <userContext.Provider
      value={{
        LoginUser,
        getUser,
        userInfo: state.userInfo,
        loading: state.loading,
        RegisterUser,
        LogOut,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export default UserContextProvider;
