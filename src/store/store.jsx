import { configureStore } from "@reduxjs/toolkit";
import taskreducer from "../slices/taskSlice"
export const store = configureStore({
    reducer: {
       tasks:taskreducer,
    }
})