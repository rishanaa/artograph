import { createSlice } from "@reduxjs/toolkit";
import { loginAdmin } from "../Api";
import { registerAdmin } from "../Api";


const INITIAL_STATE = {
    userDetail: {},
    loading: false,
    isAuthenticated: false,
    error:{

    }
}



const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder)=>{
      console.log(builder);
      builder
      .addCase(loginAdmin.pending,(state,action)=>{
            state.loading = true
      })
      .addCase(loginAdmin.fulfilled,(state,action)=>{
            console.log(action);
            state.loading = false
            state.userDetail = action.payload.userDetail
      })
      .addCase(loginAdmin.rejected,(state,action)=>{
            console.log(action);
            state.loading = false
            state.error = action.payload
      })
  


      .addCase(registerAdmin.pending,(state,action)=>{
            state.loading = true
      })
      .addCase(registerAdmin.fulfilled,(state,action)=>{
            console.log(action);
            state.loading = false
            state.userDetail = action.payload?.userDetail
      })
      .addCase(registerAdmin.rejected,(state,action)=>{
            console.log(action);
            state.loading = false
            state.error = action.payload
      })
    }
});

export const {} = authSlice.actions;

export default authSlice.reducer;