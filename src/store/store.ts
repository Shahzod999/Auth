// store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';

import testReducer from '../store/slices/TestSlice';



export const store = configureStore({
    reducer:{
        user: userReducer,
        test: testReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;