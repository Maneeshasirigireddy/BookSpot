import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



//make API call for login
export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (userCredObj, { rejectWithValue }) => {
    try {
      //api call
      let response = await axios.post(
        "http://localhost:5000/user/login",
        userCredObj
      );

      //check for token
     
  
      if (response.data.token) {
        //store token in session storage
        sessionStorage.setItem("token", response.data.token);

        //store user details in session storage
        sessionStorage.setItem("userObj", JSON.stringify(response.data.user));
        sessionStorage.setItem("status", "success");
      }
      
      //if no token
       else {
        throw new Error(response.data.message)
        // if(response.payload.response){
        //   console.log(response.payload.response.payload.data)
        //   throw new Error(response.payload.response.payload.data)
        // }
        // else{
        //   console.log(response.data.message)
        //   throw new Error(response.data.message)
        // }
      //   if(response.payload.response?.length){
      
      //   console.log(response.payload?.response?.data.errorMessage)
      //   throw new Error(response.payload.response.data.errorMessage);
      // }
      // else if(response.data){
      //   throw new Error(response.data.message)
      // }
    }
    } catch (err) {
     
     
    return rejectWithValue(err)
    }
  }
);

//set the variables

//user details
let user = sessionStorage.getItem("userObj");
if (!user) {
  user = {};
} else {
  user = JSON.parse(user);
}

//user login status
let status = sessionStorage.getItem("status");
if (!status) {
  status = "idle";
}

//slice object
export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userObj: user,
    loginStatus: status,
    errorMessage: "",
  },
  reducers: {
    clearState: (state) => {
      sessionStorage.clear();

      //clearing state
      state.userObj = {};
      state.loginStatus = "idle";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.loginStatus = "pending";
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      
      state.loginStatus = "success";
      state.userObj = JSON.parse(sessionStorage.getItem("userObj"));
      state.errorMessage = "";
    });
    builder.addCase(userLogin.rejected, (state, action) => {
     
      state.loginStatus = "failed";
      state.errorMessage = action.payload.message;
     
    });
  },
});

//export action xreator function
export let { clearState } = loginSlice.actions;

//export reducers
export default loginSlice.reducer;
