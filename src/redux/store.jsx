import { configureStore } from '@reduxjs/toolkit'
import heroslice from './heroslice'
import Userslice  from '../pages/Userslice'

export const store = configureStore({
  reducer: {
	hero:heroslice,  
  user:Userslice
  }
})