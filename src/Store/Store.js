import { configureStore } from '@reduxjs/toolkit'
import authReducer from './ApiCalls/LoginSlice'
import productReducer from './ApiCalls/ProductSlice'
import sellerLoginReducer from './ApiCalls/SellerLoginSlice'
import cartReducer from './ApiCalls/CartSlice'


export const store = configureStore({
  reducer: {
    auth : authReducer,
    sellerLogin : sellerLoginReducer,
    product : productReducer,
    cart : cartReducer
  },
})