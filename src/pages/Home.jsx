import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addhero } from '../redux/heroslice';


const Home = () => {

	const [heroes, setheroes] = useState([]);
	console.log(heroes)
	let dispatch=useDispatch();
	
	async function getheroes() {
		let res=await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
		let data= await res.json()
		console.log(data)
		setheroes(data)
	}
useEffect(()=>{
	getheroes()
},[])

const handleitems=(obj,i)=>{
	console.log(obj)
	dispatch(addhero(obj))
}

  return (
	<div className='bg-black text-white text-center'>
		<div className='grid w-[90%] m-auto lg:grid-cols-4   md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2'>
	  
	  {
		heroes.map((ele,i)=>{
			return <div key={ele.id}>
				<img className='m-auto' src={ele.images.md} alt="" />
				<h1>{ele.name}</h1>
				<div className='border flex items-center justify-between px-4 py-2'>
					<button className='bg-green-500 px-4 py-2 rounded-md'>View details</button>
					<FaHeart onClick={()=>handleitems(ele,i)} className='cursor-pointer' size={25}color='red' />
				</div>
			</div>
		})
	  }
	</div>
	</div>
  )
}

export default Home
