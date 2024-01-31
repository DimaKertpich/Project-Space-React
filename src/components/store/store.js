import { configureStore } from '@reduxjs/toolkit'
import userSlice from './authUserSlice'
import swapTokenSlice from './swapTokenSlice';

export default configureStore({
    reducer:{
        auth: userSlice,
        swap: swapTokenSlice
    },
});