import React from 'react'
import { useSelector } from 'react-redux'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Favheroes = () => {
	let slice=useSelector((state=>state.hero))
		console.log(slice)
		console.log(slice.arr)
	
  return (
	<div className='w-[60%] m-auto'>
	  <h1 className='text-center text-2xl my-3'>fav</h1>
	  <div className=''>
		
		{
			slice.arr.map((ele,i)=>{
				return <div className='flex gap-4 p-2 bg-black text-white mb-2'>
					<img src={ele.images.sm} alt="" />
					<Accordion className='bg-black text-white'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
		  sx={{backgroundColor:'red',color:'black'}}
        >
          <Typography   component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'red',color:'black'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
				
				</div>
				
			})
		}
	  </div>
	</div>
  )
}

export default Favheroes
