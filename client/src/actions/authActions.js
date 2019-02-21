import axios from "axios";

import { LOGIN_USER, LOGOUT_USER } from "./types";

// Login - Get user Token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      dispatch({
        type: LOGIN_USER,
        payload: userData
      });
    })
    .catch(err => {
      // set errors
    });
};

// Log user out
export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER
  });
};
