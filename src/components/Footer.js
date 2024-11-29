import React from 'react'
import {Link} from 'react-router-dom'
import { SiGmail } from "react-icons/si";

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-primary w-full h-[200px]' >
      <div className='container mx-auto w-full'>
        <div className='flex justify-evenly items-center  py-5 gap-5 w-full '>
        <div className='text-white font-bold text-3xl ' > 
          <Link to ='#'><FaInstagram />
          </Link>
        </div>

        <div className='text-white font-bold text-3xl ' > 
          <Link to ='#'><FaFacebook />

          </Link>
        </div>

        <div className='text-white font-bold text-3xl ' > 
          <Link to ='#'><SiGmail />
          </Link>
        </div>

        <div className='text-white font-bold text-3xl ' > 
          <Link to ='#'><FaTwitter />
          </Link>
        </div>

        <div className='text-white font-bold text-3xl ' > 
          <Link to ={'https://in.indeed.com/cmp/Sembark-Travel-Software  '} target="_blank"><FaLinkedinIn />
          </Link>
        </div>
        
        </div>
        <p className='text-white text-center' >
          Copyright &copy;<br/>
          Ecommerce Shop 2024 , All Rights
        </p>
      </div>
    </footer>
  )
}

export default Footer