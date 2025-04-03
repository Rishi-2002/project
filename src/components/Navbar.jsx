import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userlogout } from '../pages/Userslice'


const Navbar = () => {
	let store= useSelector((state)=>state.hero)

	let userslice=useSelector((state)=>state.user)
	let login=userslice.login
	
	
	
	let dispatch =useDispatch()
  return (
	<div className='bg-black w-full fixedtop-0 left-0 right-0 text-white flex justify-center h-[65px] items-center'>
	  <ul className='flex gap-[16px]'>
		<li><Link to={'/'}>Home</Link></li>
		<li><Link to={'/fav'} >favourite heroes</Link> <sup>{store.arr.length}</sup></li>
	  </ul>
	  {login===true && <button onClick={()=>dispatch(userlogout())} className='bg-blue-700 text-white rounded-md px-4 py-2 ms-10'>Logout</button>}
	  {login===false &&<Link to={'/login'} className='bg-cyan-700 text-white rounded-md px-4 py-2 ms-10'>Login</Link>}
	  {login===false &&<Link to={'/signup'} className='bg-fuchsia-950 text-white rounded-md px-4 py-2 ms-10'>Signup</Link>}
	</div>
  )
}

export default Navbar
