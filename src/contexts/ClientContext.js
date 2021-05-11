import { createContext, useReducer } from "react";
import clientReducer from "../reducers/clientReducer";
// import { userContext } from "../contexts/userContext";
import axios from "axios";

//CREATE INITIAL STATE
const initialData = {
  clients: {},
  loading: true,
  error: null,
};

//CREATING AN INSTANCE OF CREATE CONTEXT
export const ClientContext = createContext();

const ClientContextProvider = ({ children }) => {
  // const { userInfo } = useContext(userContext);
  // JSON.parse(localStorage.setItem("userInfo"));

  //THE REDUCER
  const [state, dispatch] = useReducer(clientReducer, initialData);
  //FETCH DATA
  async function getAllClients(clients) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const allClients = await axios.get(
        "https://lit-sea-14855.herokuapp.com/api/v1/user/clients",
        clients,
        config
      );
      dispatch({
        type: "GET_ALL_CLIENTS",
        payload: allClients.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  //REGISTER A CLIENT
  async function registerClient(newclient) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: JSON.parse(localStorage.getItem("userInfo")).token,
        },
      };
      const res = await axios.post(
        "https://lit-sea-14855.herokuapp.com/api/v1/user/clients/addclient",
        newclient,
        config
      );
      dispatch({
        type: "ADD_CLIENT",
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <ClientContext.Provider
      value={{
        getAllClients,
        registerClient,
        clients: state.clients,
        loading: state.loading,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientContextProvider;
