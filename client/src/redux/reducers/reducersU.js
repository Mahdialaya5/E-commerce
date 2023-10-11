import { ADD_USER_FAIL, ADD_USER_SUCCESS, EDIT, GET_CURRENT_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../const_user"


const initialState= {
    errors: null,
    User:{},
    users:[],     
    loading:false,  
      
   }

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_USER_SUCCESS:
            return { ...state,users:{...state.users,payload} }
         case ADD_USER_FAIL:
            return { ...state, errors: payload }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token)
                return { ...state,User: payload.user }
        case LOGIN_FAIL:
            return { ...state, errors: payload }
        case GET_CURRENT_SUCCESS:
                return { ...state,User: payload.user}
        case LOGOUT:
                 localStorage.removeItem("token")
                 return {errors: null,currentUser: {}}
        case EDIT:
                return { ...state}
          default:
             return state
    }}
   