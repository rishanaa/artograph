import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from '../helper/ApiHelper';

// login api
export const loginAdmin = createAsyncThunk(
    "auth/loginAdmin", async (data) => {
        console.log(data);
        const response = await axiosApi.post("/user/login", data.loginData);
       data.navigate("/")
        return response.data;
    })

    // seller login api
export const sellerLoginAdmin = createAsyncThunk(
    "sellerLogin/sellerLoginAdmin", async (data) => {
        console.log(data);
        const response = await axiosApi.post("/user/login", data.sellerLoginData);
       data.navigate("/add-items")
        return response.data;
    })

    // register api
export const registerAdmin = createAsyncThunk(
        "auth/registerAdmin", async (data) => {
            const response = await axiosApi.post("/user/new", data.registerData);
            data.navigate("/")
            return response.data;
        })

    // seller register api
export const sellerRegisterAdmin = createAsyncThunk(
    "sellerLogin/sellerRegisterAdmin", async (data) => {
        const response = await axiosApi.post("/user/new", data.sellerRegisterData);
        data.navigate("/add-items")
        return response.data;
    })


// create product api
export const createProduct = createAsyncThunk(
    "product/createProduct", async (data) => {
        const response = await axiosApi.post('/product/new',data.createData);
        data.navigate("/all-products")
        return response.data;
    })

// all product api
export const allProducts = createAsyncThunk(
    "product/allProducts", async () => {
        const response = await axiosApi.get("/products");
        return response.data;
    })

    //single view api
export const getProductDetail = createAsyncThunk(
    "product/getProductDetail", async (productId) => {
        const response = await axiosApi.get(`/product/${productId}`);
        return response.data;
    })


    // update product api
export const updateProduct = createAsyncThunk(
    "product/updateProduct", async ({productId,productData}) => {
        const response = await axiosApi.put(`/product/${productId}`,productData);
        return response.data;
    })

    // delete product api
export const deleteProduct = createAsyncThunk(
    "product/deleteProduct", async (productId) => {
        const response = await axiosApi.delete(`/product/${productId}`);
        return response.data;
    })

    // add product to cart api
export const cartProduct = createAsyncThunk(
    "cart/cartProduct", async (data) => {
        const response = await axiosApi.post('/cartProduct/new',data.createData);
        data.navigate("/user-cart")
        return response.data;
    })

    //get all cart items api
export const getCartProducts = createAsyncThunk(
    "cart/getCartProducts", async () => {
        const response = await axiosApi.get("/cartProducts");
        return response.data;
    })

    // delete cart api
export const deleteCartProduct = createAsyncThunk(
    "cartt/deleteCartProduct", async (productId) => {
        const response = await axiosApi.delete(`/emptyCart/${productId}`);
        return response.data;
    })