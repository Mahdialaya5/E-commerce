import {
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  EDIT,
  EDIT_FAIL,
  GET_ALLUSERS_SUCCESS,
  GET_CURRENT_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  naviagte,
} from "../Const/constUser";

const initialState = {
  errors: null,
  User: {},
  users: [],
  loading: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER_SUCCESS:
      return { ...state, users: { ...state.users, payload }, errors: null };
    case ADD_USER_FAIL:
      return { ...state, errors: payload };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, User: payload.user, errors: {} };
    case LOGIN_FAIL:
      return { ...state, errors: payload };
    case GET_CURRENT_SUCCESS:
      return { ...state, User: payload.user };
    case LOGOUT:
      localStorage.removeItem("token");
      return { errors: null, currentUser: {} };
    case EDIT:
      return { ...state, errors: {} };
    case EDIT_FAIL:
      return { ...state, errors: payload };
    case GET_ALLUSERS_SUCCESS:
      return { ...state, users: payload };
    case naviagte:
      return { ...state, errors: null };
    default:
      return state;
  }
};
