import React from 'react'
import Cards from './Cards'
// import list from '../../public/list.json'

import coursepic from '../../public/Coursebook.json';
import { Link } from 'react-router-dom'


const Course = () => {
  return (
    <>
      
<div className='max-w-screen-2xl container mx-auto md-px-20 px-10'>

  <div className='mt-28 items-center justify-center text-center'>
    <h1 className='text-2xl md:text-4xl'>we are deliged to have you<span className='text-pink-500'> here !:)</span></h1>

    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, fuga? Repudiandae, doloremque minima. Incidunt praesentium accusantium recusandae cupiditate, modi dicta adipisci quia deleniti aperiam dolore illum et delectus architecto corporis.</p>

<Link to='/'>
<button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 mt-6 '>Back</button>
</Link>

   
  </div>
  

  <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
 {
  coursepic.map((item)=>(
    <Cards key={item.id} item={item}/>
  ))
 }
  
  </div>



</div>


    </>
  )
}

export default Course
