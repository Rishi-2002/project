import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginuser } from './Userslice'
import axios, { Axios } from 'axios'

const Login = () => {

	
	let emailref=useRef()
	let passref=useRef()
	let navigate=useNavigate()
	let dispatch= useDispatch()


let arr=JSON.parse(localStorage.getItem('hero')) || [];

const handlesubmit=async(e)=>{
		e.preventDefault();
		let obj={
		
			email:emailref.current.value,
			password:passref.current.value
		}

		console.log(obj)
		try {
			let response= await axios.post('http://localhost:8090/login',obj);
			console.log(response);
			let data=response.data
			alert(data.msg)
		} catch (error) {
			alert(error.response.data.msg)
		}

		//below is updated due to mongo DB server--------------->>>>>>>>>>>

		// let find=arr.find((ele)=>ele.email===obj.email)
		// console.log(find)
		// if(find){
		// 	if(find.password===obj.password){
		// 		// navigate('/')
		// 		dispatch(loginuser(obj.email))
		// 	}
		// 	else{
		// 		return alert('password incorrect')
		// 	}
		// }
		// else{
		// return	alert('user not found')
		// }
	}



  return (
<div className='flex flex-col gap-3 min-h-[80vh] items-center justify-center ' >
	<h1 className='text-2xl font-semibold'>Login up page</h1>
	  <form className='w-[30%] flex flex-col gap-3 rounded-lg min-w-[300px] bg-black text-white min-h-max p-8' action="">
		<label htmlFor="">Email</label>
		<input ref={emailref} className='border px-4 py-2 rounded-md' type="Email" placeholder='enter your Email' />
		<label htmlFor="">Password</label>
		<input ref={passref} className='border px-4 py-2 rounded-md' type="password" placeholder='enter your Password' />
		<button onClick={handlesubmit} className='bg-amber-700 hover:bg-amber-400 px-4 py-2 rounded-md'>Login</button>
	  	<p>don't have an account? <Link className='text-blue-500' to={'/signup'}>Signup</Link> </p>
	  </form>
	</div>
  )
}

export default Login
