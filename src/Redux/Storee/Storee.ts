import { configureStore } from '@reduxjs/toolkit'
import SignupSlicer from '../../Redux/Slice/Slice'
import LoginReducer from '../Slice/Slice'
import BlogReducer from '../Slice/Slice'
import AllBlogReducer from '../Slice/Slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: SignupSlicer.reducer,
      Login:LoginReducer.reducer,
      Blog:BlogReducer.reducer,
      allBlog:AllBlogReducer.reducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']