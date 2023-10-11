import { GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS,ADD_PRODUCT_SUCCESS,ADD_PRODUCT_FAIL, GET_PRODUCT_FAIL, GET_ONEPRODUCT_SUCCESS, GET_ONEPRODUCT_FAIL, EDIT_PRODUCT_SUCCESS} from "../const "


  const initialState = {
    products: [],
    oneProduct:{},
    errors: null,
    loading: false,
   }
  
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case  GET_PRODUCT_LOADING:
                  return { ...state, loading: true }
        case  GET_PRODUCT_SUCCESS:
                  return { ...state, products: payload, loading: false }
        case GET_PRODUCT_FAIL:
                  return { ...state, errors: payload, loading: false }
        case ADD_PRODUCT_SUCCESS:
                 return { ...state, product: [...state.products, payload.product] }
        case ADD_PRODUCT_FAIL:
                   return { ...state, errors: payload }
        case GET_ONEPRODUCT_SUCCESS:
                    return { ...state, oneProduct: payload }
        case GET_ONEPRODUCT_FAIL:
                    return { ...state, errors: payload }
        case EDIT_PRODUCT_SUCCESS:
                    return { ...state, products: state.products.map(el => el._id == payload._id ? payload : el) }
                   
                    default:
            return state
    }
}

 