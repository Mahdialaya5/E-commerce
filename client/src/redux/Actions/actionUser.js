import axios from "axios";
import {
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  EDIT,
  EDIT_FAIL,
  GET_ALLUSERS_FAIL,
  GET_ALLUSERS_SUCCESS,
  GET_CURRENT_FAIL,
  GET_CURRENT_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  naviagte,
} from "../Const/constUser";

export const addUser = (userBody, navigate) => async (dispatch) => {
  try {
    const resUser = await axios.post(
      "https://e-commerce-api-mahdi.vercel.app/api/user/register",
      userBody
    );
    dispatch({
      type: ADD_USER_SUCCESS,
      payload: resUser.data,
    });
    console.log("hi");
    navigate("/login");
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_USER_FAIL,
      payload: err.response.data,
    });
  }
};

export const loginUser = (loginUser, navigate) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://e-commerce-api-mahdi.vercel.app/api/user/login",
      loginUser
    );
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    navigate("/products");
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data,
    });
  }
};

//private
export const getCurrent = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.get("https://e-commerce-api-mahdi.vercel.app/api/user/current", {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: GET_CURRENT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_CURRENT_FAIL, payload: error });
  }
};

export const logout = () => {
  return { type: LOGOUT };
};

export const editUser = (id, userBody, navigate) => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const resUser = await axios.put(
      `https://e-commerce-api-mahdi.vercel.app/api/user/${id}`,
      userBody,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  
    dispatch({
      type: EDIT,
      payload: resUser.data,
    });
    navigate("/profile");
  } catch (err) {
   
    dispatch({
      type: EDIT_FAIL,
      payload: err.response.data,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.get("https://e-commerce-api-mahdi.vercel.app/api/user/admin", {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({
      type: GET_ALLUSERS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {

    dispatch({
      type: GET_ALLUSERS_FAIL,
      payload: err.message,
    });
  }
};

export const Navigate = () => {
  return { type: naviagte };
};
