import { configureStore } from '@reduxjs/toolkit'
import wordSlice from '../feature/word/wordSlice'

export const store = configureStore({
  reducer: {
    word: wordSlice
  },
})