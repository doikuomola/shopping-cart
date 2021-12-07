// @ts-nocheck
import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { cartReducer } from "./reducers/cartReducers"
import { getProductDetailsReducer, getproductsReducer } from "./reducers/productReducers"


const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getproductsReducer,
  getProductDetails: getProductDetailsReducer
})

const middleware = [thunk]

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const INITIATE_STATE = {
  cart: {
    cartItems: cartFromLocalStorage
  }
}

const store = createStore(
  reducer, INITIATE_STATE,composeWithDevTools(applyMiddleware(...middleware))
)

export default store;