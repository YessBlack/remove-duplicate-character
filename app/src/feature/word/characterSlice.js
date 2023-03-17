import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  character: []
}

export const characterSlice = createSlice({
  name:'character',
  initialState,
  reducers: {
    setCharacter: (state, actions) => {
      state.character = actions.payload
    }
  }

})

export const { setCharacter } = characterSlice.actions
export default characterSlice.reducer