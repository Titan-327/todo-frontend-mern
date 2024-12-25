import {configureStore,createSlice} from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{user:"",isLoggedIn:false},
    reducers:{
login:function(state,action){
    state.isLoggedIn=true;
},
logout:function(state,action){
    state.isLoggedIn=false;
}
    }
})


export const authActions=authSlice.actions;
export const store=configureStore({
    reducer:authSlice.reducer
})