import { configureStore } from '@reduxjs/toolkit'
import characterSlice from '../feature/word/characterSlice'

export const store = configureStore({
  reducer: {
    character: characterSlice
  },
})