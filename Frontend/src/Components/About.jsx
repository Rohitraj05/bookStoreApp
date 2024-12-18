import React from 'react';
import Rohit from '../../public/rohit.jpg'
import Rohit2 from '../../public/Rohit2.jpeg'
import Rohit3 from '../../public/Rohit3.jpg'
import Rohit4 from '../../public/Rohit4.jpg'
import Rohit5 from '../../public/Rohit5.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  return (

    <div className='dark:bg-slate-900 dark:text-white'>

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 my-24">

      <div className="bg-white shadow-lg rounded-lg max-w-4xl p-8 dark:bg-slate-900 dark:text-white ">

        <h1 className="text-3xl font-bold text-gray-800 mb-4 dark:bg-slate-900 dark:text-white">About Us</h1>
        <p className="text-gray-600 mb-6 dark:bg-slate-900 dark:text-white">
        "I am Rohit raj, a freelance web developer with a passion for turning ideas into reality. From sleek designs to robust back-end solutions, I aim to create digital experiences that are both functional and visually captivating."
        </p>

         
    



 {/* mission */}
 <div className=''>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2 dark:bg-slate-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-600 dark:bg-slate-900 dark:text-white">

           *  "Our mission is to help businesses thrive in the digital world by creating websites and applications that are fast, responsive, and tailored to their unique needs."
            </p>
            <br></br>

            <p>
          *   "We aim to bridge the gap between cutting-edge technology and exceptional design, empowering businesses to achieve their goals online."
            </p>
          </div>

           

              <h1 className='text-2xl text-center mt-12 underline'>Me ❤️❤️ 👇👇 </h1>
               

        {/* Image */}
        <div className="mt-8 flex justify-center  ">

          


        <div className="carousel rounded-box">
             
  <div className="carousel-item w-52">
    <img
      src={Rohit}
      alt="MyIMg" />
  </div>

  <div className="carousel-item w-52">
    <img
      src={Rohit2}
      alt="MyIMg" />
  </div>

  <div className="carousel-item w-52">
    <img
      src={Rohit3}
      alt="MyIMg" />
  </div>

  <div className="carousel-item w-52">
    <img
      src={Rohit4}
      alt="MyIMg" />
  </div>

  <div className="carousel-item w-52">
    <img
      src={Rohit5}
      alt="MyIMg" />
  </div>
  <div className="carousel-item w-52">
    <img
      src={Rohit}
      alt="MyIMg" />
  </div>

  <div className="carousel-item w-52">
    <img
      src={Rohit3}
      alt="MyIMg" />
  </div>

</div>
         
        
        </div>




        {/* Call to Action */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-medium text-gray-700 dark:bg-slate-900 dark:text-white">Want to learn more?</h3>
          <p className="text-gray-600 mb-4 dark:bg-slate-900 dark:text-white">Feel free to reach out to us anytime!</p>

          <Link to={'/Contact'} className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-200">
            Contact Us
          </Link>
        </div>
      </div>
    </div>

    </div>
  );
};

export default About;
