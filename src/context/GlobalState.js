import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const initialState = {
  cars: [],
  error: null,
  loading: true,
};

let api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/cars/",
  headers: {
    "Content-type": "application/json",
  },
});

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const {} = useAuth0();

  async function getCars() {
    try {
      const token = await getAccessTokenSilently();
      const config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-type": "application/json",
        },
      };
      let res = await api.get("", config);
      // @ts-ignore
      dispatch({
        type: "GET_CARS",
        payload: res.data,
      });
    } catch (error) {
      // @ts-ignore
      dispatch({
        type: "CAR_ERROR",
        payload: error,
      });
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        cars: state.cars,
        error: state.error,
        loading: state.loading,
        getCars,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
