import { actionTypes } from "./actionTypes";

export const intState= {
    loading: false,
    products:[],
    error: false,
    carts: [],
    wishlist: [],
};



export const productReducer= (state, action)=>{
    switch(action.type){
        case actionTypes.PRODUCTS_START:
            return {
                ...state,
                loading: true,
                error:false
            }
        case actionTypes.PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: false,
            }
        case actionTypes.PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                carts:[...state.carts, action.payload]
            }
        case actionTypes.ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist:[...state.wishlist, action.payload]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                wishlist:[!state.carts.pop(action.payload)]
            }
            default:
                return state;
    }
}