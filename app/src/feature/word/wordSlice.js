import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  word: ''
}

export const wordSlice = createSlice({
  name:'word',
  initialState,
  reducers: {
    setCharacter: (state, actions) => {
      state.word = actions.payload
    }
  }

})

export const { setCharacter } = wordSlice.actions
export default wordSlice.reducer