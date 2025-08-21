import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

	let nameref=useRef()
	let emailref=useRef()
	let passref=useRef()
	let navigate=useNavigate()

// let arr=JSON.parse(localStorage.getItem('hero')) || [];

	const handlesubmit=async (e)=>{
		e.preventDefault();
		let obj={
			name:nameref.current.value,
			email:emailref.current.value,
			password:passref.current.value
		}

		console.log(obj)

	 try {
		let res= await fetch('http://localhost:8090/register',{
			method:"POST",
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify(obj)
		})

		let data=await res.json();
		console.log(data)
		navigate('/login')

	 } catch (error) {
		console.log(error)
	 }
	
	}



  return (
<div className='flex flex-col gap-3 min-h-[80vh] items-center justify-center ' >
	<h1 className='text-2xl font-semibold'>sign up page</h1>
	  <form className='w-[30%] flex flex-col gap-3 rounded-lg min-w-[300px] bg-black text-white min-h-[400px] p-8' action="">
		<label htmlFor="">Name</label>
		<input ref={nameref} className='border px-4 py-2 rounded-md' type="text" placeholder='enter your name' />
		<label htmlFor="">Email</label>
		<input ref={emailref} className='border px-4 py-2 rounded-md' type="Email" placeholder='enter your Email' />
		<label htmlFor="">Password</label>
		<input ref={passref} className='border px-4 py-2 rounded-md' type="password" placeholder='enter your Password' />
		<button onClick={handlesubmit} className='bg-amber-700 hover:bg-amber-400 px-4 py-2 rounded-md'>Register</button>
	  	<p>Already have an account? <Link className='text-blue-500' to={'/login'}>login</Link> </p>
	  </form>
	</div>
  )
}

export default Signup
