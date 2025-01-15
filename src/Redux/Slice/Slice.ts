import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from '../../../Api/AxiosInstance'
import { baseUrl, endpoints } from '../../../Api/Api'

export const signup = createAsyncThunk("SignupSlice/signup", async (data: any) => {
  let res = await AxiosInstance.post(endpoints.signup, data);
  console.log("Axios response after signup", res);
  return res?.data;
})

export const signin = createAsyncThunk("SignupSlice/signin", async (userdata: any) => {
  const res = await AxiosInstance.post(endpoints.login, userdata)
  return res?.data;
})

// Blogs:
export const fetchblogs = createAsyncThunk("SignupSlice/fetchblogs", async () => {
  const res = await AxiosInstance.get(endpoints.blog);
  return res?.data;
})

// All Blogs:
export const fetchallblogs = createAsyncThunk("SignupSlice/fetchallblogs", async (id: string) => {
  const res = await AxiosInstance.get(endpoints.blogdetails + '/' + id);
  return res?.data;
})

// All category:
export const fetchallcategory=createAsyncThunk("SignupSlice/fetchallcategory",async()=>{
  const res=await AxiosInstance.get(endpoints.allcategory);
  return res?.data;
})

const sign_url = endpoints.signup;

interface users {
  users: any[],
  data: any[],
  status: string
  isLoading: Boolean
  error: string | null
  message: string | undefined;
}

const initialState: users = {
  users: [],
  data: [],
  isLoading: false,
  status: "",
  error: null,
  message: ""
}

const SignupSlicer = createSlice({
  name: "SignupSlice",  
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state, action) => {
      // console.log("Pending",action);        
      //   state.statusForReg = "on Pending ";
      state.isLoading = true;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      //  console.log("Fulfiled",action);
      state.isLoading = false;
      state.status = action.payload.data.status;
      state.data = action.payload.data;
    });

    builder.addCase(signup.rejected, (state, action) => {
      // console.log("Rejected",action);
      // state.status = "Rejected";
      state.isLoading = false;
    });

    // Fetch blogs:
    builder.addCase(fetchblogs.pending, (state, action) => {
      state.status = "pending"
    })
    builder.addCase(fetchblogs.fulfilled, (state, action) => {
      state.status = "fulfilled"
    })
    builder.addCase(fetchblogs.rejected, (state, action) => {
      state.status = "rejected"
    })

    //  blog details:
    builder.addCase(fetchallblogs.pending, (state, action) => {
      state.status = "pending"
    })
    builder.addCase(fetchallblogs.fulfilled, (state, action) => {
      state.status = "fulfilled"
    })
    builder.addCase(fetchallblogs.rejected, (state, action) => {
      state.status = "rejected"
    })

    // all category:
  },
});

export default SignupSlicer;

