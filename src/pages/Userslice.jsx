import { createSlice } from '@reduxjs/toolkit'



let userdetails=JSON.parse(localStorage.getItem('herologin'))
console.log(userdetails)
const initialState = {
  login:userdetails?userdetails.login: false,
  email:userdetails?userdetails.email:''
}

export const Userslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loginuser:(state,action)=>{
      localStorage.setItem('herologin',JSON.stringify({login:true,email:action.payload}))
      state.login=true
      state.email=action.payload
    },

    userlogout:(state)=>{
      localStorage.removeItem('herologin')
      state.login=false;
      state.email='';
    }

    }, 
})

// Action creators are generated for each case reducer function
export const { loginuser,userlogout} = Userslice.actions

export default Userslice.reducer