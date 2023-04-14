import { createSlice } from "@reduxjs/toolkit";
import { cartProduct,getCartProducts,deleteCartProduct } from "../Api";


const INITIAL_STATE = {
    carts: [],
    cartDetail:{},
   
    loading: false,
}

const CartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: {
         
        //add product to cart
        [cartProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [cartProduct.fulfilled]: (state, action) => {
            state.loading = false;
            console.log(action);
        },
        [cartProduct.rejected]: (state, action) => {
            state.loading = false;
        },

         //get all cart Products

         [getCartProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [getCartProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.carts = action.payload?.cartItems;
        },
        [getCartProducts.rejected]: (state, action) => {
            state.loading = false;
        },

         //delete cart Product

         [deleteCartProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteCartProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.carts.filter((cart)=>{
                return cart._id !== action.payload.productData._id
            })
            
        },
        [deleteCartProduct.rejected]: (state, action) => {
            state.loading = false;
        },

    }
});

export const { } = CartSlice.actions;

export default CartSlice.reducer;