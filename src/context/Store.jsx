import { configureStore } from '@reduxjs/toolkit'
import slice1 from './Slice1'

export const store = configureStore({
    reducer: slice1,
})