import { LOGIN_USER, LOGOUT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  data: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        data: null
      };
    default:
      return state;
  }
}
