import { configureStore } from '@reduxjs/toolkit'
import data from './slices/data.slice'
import item from './slices/item.slice'
import columns from './slices/columns.slice'
import login from './slices/login.slice'
export default configureStore({
  reducer: {
    data,
    item,
    columns,
    login,
  },
})
