import React from 'react'
import list from '../../public/list.json';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cards from './Cards';


function freebook ()  {

  const filterData=list.filter((data)=>data.category === 'free');
   
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ]
  };  


  return (
    <>
    <div>
      <div className='max-w-screen-2xl container mx-auto md-px-20 px-10'>
        <h1 className='font-bold text-2xl'>Free book</h1>

        <div className='pb-5 '>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium odit soluta quis libero! Recusandae voluptatibus non sit, quibusdam corrupti autem illo tenetur vitae sunt quas tempora laborum omnis eos ullam.</p>
        </div>


         

        <Slider {...settings}>
         
         {filterData.map((item) =>(
         
          <Cards item={item} key={item.id}/>
         ))}
         
      </Slider>

{/* <div className='mt-12 grid lg:grid-cols-3 md:grid-cols-2'>
 {
  list.map((item)=>(
    <div className='max-w-sm'>
      <Cards key={item.id} item={item}/>
    </div> */}

  {/* ))
 }
    */}


  </div>

        </div>
        
      
    </>
  )
}

export default freebook;
