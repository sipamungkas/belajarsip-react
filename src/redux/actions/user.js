import axios from "axios";
import { BASE_URL } from "../../constant";

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const login = (username, password) => {
  return {
    type: "LOGIN",
    payload: axios.post(`${BASE_URL}auth/login`, {
      username,
      password,
    }),
  };
};
