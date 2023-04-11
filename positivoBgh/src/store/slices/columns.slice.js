import { createSlice } from '@reduxjs/toolkit'

export const columnsSlice = createSlice({
  name: 'columns',
  initialState: null,

  reducers: {
    setColumns: (state, actions) => actions.payload,
  },
})
export const { setColumns } = columnsSlice.actions

export default columnsSlice.reducer
