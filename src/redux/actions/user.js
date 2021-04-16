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

export function loginAsync(username, password) {
  return function (dispatch) {
    return axios
      .post(`${BASE_URL}auth/login`, {
        username,
        password,
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: "SET_USER", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "SET_ERROR", payload: err });
      });
  };
}
