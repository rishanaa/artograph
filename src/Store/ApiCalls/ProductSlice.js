import { createSlice } from "@reduxjs/toolkit";
import { allProducts, createProduct,deleteProduct,updateProduct,getProductDetail } from "../Api";


const INITIAL_STATE = {
    products: [],
    productDetail:{},
   
    loading: false,
}

const ProductSlice = createSlice({
    name: "product",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: {
        //allProducts
        [allProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [allProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload?.allProducts;
        },
        [allProducts.rejected]: (state, action) => {
            state.loading = false;
        },

        //single view
        [getProductDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getProductDetail.fulfilled]: (state, action) => {
            state.loading = false;
            state.success= false;
            state.productDetail = action.payload?.singleProduct;
        },
        [getProductDetail.rejected]: (state, action) => {
            state.loading = false;
        },
        

        //createProduct
        [createProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [createProduct.fulfilled]: (state, action) => {
            state.loading = false;
            
        },
        [createProduct.rejected]: (state, action) => {
            state.loading = false;
        },

        //update Product
        [updateProduct.pending]: (state, action) => {
            state.loading = true;
            state.success=true;
        },
        [updateProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.success=true;
            
        },
        [updateProduct.rejected]: (state, action) => {
            state.loading = false;
            state.success=false;

        },

        //deleteProduct

        [deleteProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.products.filter((product)=>{
                return product._id !== action.payload.productData._id
            })
            
        },
        [deleteProduct.rejected]: (state, action) => {
            state.loading = false;
        },
    }
});

export const { } = ProductSlice.actions;

export default ProductSlice.reducer;