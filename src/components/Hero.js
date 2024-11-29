import React from 'react'
import './Hero.css'
import {Link} from 'react-router-dom'
import WomanImage from '../img/woman_hero.png';
const Hero = () => {
  return (
    <section id='hero' className='bg-pink-200  h-[800px] bg-cover bg-no-repeat
    bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
      <div className='flex flex-col justify-center' >
        <div className='font-semibold flex items-center uppercase'> 
          <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
           <div> New Trend</div>
        </div>
        <div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4' > SALE! 🎉 !SALE STYLISH<br/> 
              <span className='font-semibold' >WOMEN'S</span>
          </h1>
          <Link to={'/'} 
          className='self-start uppercase font-semibold
          border-b-2 border-primary'  > Discover More</Link>
        </div>
      </div>

        <div className='hidden lg:block' >
          <img src={WomanImage} alt='' />
        </div>

      </div>
    </section>
  )
}

export default Hero;