import { createSlice } from "@reduxjs/toolkit";
import { sellerLoginAdmin } from "../Api";
import { sellerRegisterAdmin } from "../Api";


const INITIAL_STATE = {
    userDetail: {},
    loading: false,
    isAuthenticated: false,
    error:{

    }
}



const sellerLoginSlice = createSlice({
    name: "sellerLogin",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder)=>{
      console.log(builder);
      builder
      .addCase(sellerLoginAdmin.pending,(state,action)=>{
            state.loading = true
      })
      .addCase(sellerLoginAdmin.fulfilled,(state,action)=>{
            console.log(action);
            state.loading = false
            state.userDetail = action.payload.userDetail
      })
      .addCase(sellerLoginAdmin.rejected,(state,action)=>{
            console.log(action);
            state.loading = false
            state.error = action.payload
      })
  


      .addCase(sellerRegisterAdmin.pending,(state,action)=>{
            state.loading = true
      })
      .addCase(sellerRegisterAdmin.fulfilled,(state,action)=>{
            console.log(action);
            state.loading = false
            state.userDetail = action.payload?.userDetail
      })
      .addCase(sellerRegisterAdmin.rejected,(state,action)=>{
            console.log(action);
            state.loading = false
            state.error = action.payload
      })
    }
});

export const {} = sellerLoginSlice.actions;

export default sellerLoginSlice.reducer;