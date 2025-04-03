import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  arr: []
}

export const heroslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   addhero:(state,action)=>{
	console.log(action.payload)
	state.arr.push(action.payload)
   }
  },
})

// Action creators are generated for each case reducer function
export const { addhero } = heroslice.actions

export default heroslice.reducer