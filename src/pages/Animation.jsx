import React from 'react'
import { motion } from 'motion/react'
import { div, img } from 'motion/react-client'

const Animation = () => {
  return (
	<div className='bg-black house w-full h-screen' >
	 {/* <motion.div animate={{x:[0,'400px','400px',0,0],y:[0,0,'400px','400px',0],scale:[1,0,1,0,1] , transition:{duration:5},rotate:['360deg',0,'360deg',0,'360deg',0]}} className='box h-[100px] w-[100px] bg-[crimson]' > </motion.div> */}
	{
		Array(30).fill('').map((ele,i)=>{
			// return <motion.div animate={{x:[0,Math.random()*300,Math.random()*300,0],y:[0,Math.random()*300,Math.random()*300,0]}} transition={{duration:Math.random()*3+5,repeat:Infinity}} initial={{left:Math.random()*window.innerWidth ,top:Math.random()*window.innerHeight}} className='w-5 absolute h-5 rounded-full bg-amber-50'></motion.div>
			

			return <motion.img  animate={{x:[0,Math.random()*300,Math.random()*300,0],y:[0,Math.random()*300,Math.random()*300,0]}} transition={{duration:Math.random()*3+5,repeat:Infinity}} initial={{left:Math.random()*window.innerWidth ,top:Math.random()*window.innerHeight}} className='w-17 absolute h-10  ' src="https://pngimg.com/d/pigeon_PNG3418.png" alt="" />
		
		
		})
	}
	</div>
  )
}

export default Animation
