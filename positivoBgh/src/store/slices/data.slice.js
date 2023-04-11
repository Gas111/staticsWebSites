import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// require('dotenv').config()


export const dataSlice = createSlice({
  name: 'data',
  initialState: null,

  reducers: {
    setDataGlobal: (state, actions) => actions.payload,
    findId: (state) => state.sort((a, b) => +a.price - +b.price),
    findGroupByColumn: (state) => state.sort((a, b) => +b.price - +a.price),
  },
})
export const { setDataGlobal, finId } = dataSlice.actions
export const { findGroupByColumn } = dataSlice.actions

export default dataSlice.reducer

export const getData = () => (dispatch) => {
  const URLBASE = 'https://script.google.com/macros/s/AKfycbyM7HgadbGylSU4e6yH8DqOThfXFpFFL1jlbdd3y0rvIQwZvz5UkyelO6aX5G1WHCil/exec'

  return axios
    .get(URLBASE)
    .then((res) => dispatch(setDataGlobal(Object.values(result.data.data))))
    .catch((err) => console.log(err))
}



export const getDataById = (id) => (dispatch) => {
  const URLBASE = `https://script.google.com/macros/s/AKfycbyM7HgadbGylSU4e6yH8DqOThfXFpFFL1jlbdd3y0rvIQwZvz5UkyelO6aX5G1WHCil/exec?id=${id}`

  return axios
    .get(URLBASE)
    .then((res) =>  dispatch(setDataGlobal(Object.values(result.data.data))))
    .catch((err) => console.log(err))
}
