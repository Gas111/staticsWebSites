import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({
  name: 'item',
  initialState: null,

  reducers: {
    setItem: (state, actions) => actions.payload,
  },
})
export const { setItem } = itemSlice.actions

export default itemSlice.reducer
