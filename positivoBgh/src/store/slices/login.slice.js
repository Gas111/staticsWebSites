import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const loginsSlice = createSlice({
  name: 'login',
  initialState: false,

  reducers: {
    setLogin: (state, actions) => actions.payload,
  },
})
export const { setLogin } = loginsSlice.actions

export default loginsSlice.reducer

export const getDataLogin = (access_token) => (dispatch) => {
  const URLBASE = 'https://www.googleapis.com/oauth2/v3/userinfo'

  return axios
    .get(URLBASE, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: 'application/json',
      },
    })
    .then((res) => dispatch(setLogin(res.data)))
    .catch((err) => console.log(err))
}
