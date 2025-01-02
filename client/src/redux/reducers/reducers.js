import {
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  GET_PRODUCT_FAIL,
  GET_ONEPRODUCT_SUCCESS,
  GET_ONEPRODUCT_FAIL,
  EDIT_PRODUCT_SUCCESS,
  SEARCHPRDT,
  SEARCHPC,
  SEARCHPHONE,
  SEARCHTABETTE,
  DELETE_ONEPRODUCT_SUCCESS,
} from "../Const/constProduct ";

const initialState = {
  products: [],
  oneProduct: {},
  errors: null,
  loading: false,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_LOADING:
      return { ...state, loading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, products: payload, loading: false };
    case GET_PRODUCT_FAIL:
      return { ...state, errors: payload, loading: false };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, products: [...state.products, payload.product] };
    case ADD_PRODUCT_FAIL:
      return { ...state, errors: payload };
    case GET_ONEPRODUCT_SUCCESS:
      return { ...state, oneProduct: payload };
    case GET_ONEPRODUCT_FAIL:
      return { ...state, errors: payload };
    case EDIT_PRODUCT_SUCCESS:
      return { ...state };
    case SEARCHPRDT:
      return {
        ...state,
        products: state.products.filter((el) =>
          el.name.toLowerCase().includes(payload.trim().toLowerCase())
        ),
      };
    case SEARCHPC:
      return {
        ...state,
        products: state.products.filter((el) => el.category === "pc"),
      };
    case SEARCHPHONE:
      return {
        ...state,
        products: state.products.filter((el) => el.category === "smartphone"),
      };
    case SEARCHTABETTE:
      return {
        ...state,
        products: state.products.filter((el) => el.category === "tablette"),
      };
    case DELETE_ONEPRODUCT_SUCCESS:
      return { ...state };
    default:
      return state;
  }
};
