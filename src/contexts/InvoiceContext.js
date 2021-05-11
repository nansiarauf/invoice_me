import { createContext, useReducer } from "react";
import axios from "axios";

const initialData = {
  loading: true,
  invoice: [],
  error: null,
};
export const InvoiceContext = createContext();

const InvoiceContextProvider = () => {};

export default InvoiceContextProvider;
