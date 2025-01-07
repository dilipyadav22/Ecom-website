import React, { useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { MdDeleteOutline } from "react-icons/md";
import {  Link } from 'react-router-dom';

import axios from 'axios'

const Content = () => {
 
    const [ecomData, setEcomData] = useState([]);
     

        function getData(){
            axios.get("https://677c19cc20824100c07be3ea.mockapi.io/crud-admin")
            .then((res)=>{
                setEcomData(res?.data);
            })
        }

        function handelDelete(id){
            if(id > 0) {
               if(window.confirm("Are you sure to delete this item?"))
            axios.delete(`https://677c19cc20824100c07be3ea.mockapi.io/crud-admin/${id}`)
            .then(()=>{
                getData();
            })
          }
        }

        const setToLocalStorage =(id,image,price,description)=>{
            // localStorage.clear();
            localStorage.setItem("id",id);
            localStorage.setItem("image",image);
            localStorage.setItem("price",price);
            localStorage.setItem("description",description);
        }


    useEffect(() => {
        getData();
     
    },[])

   
  
    


  return (
    <div className='mx-20 p-4   w-full flex gap-24 flex-wrap '>       
        {
            ecomData.map((item,id)=>{
                return(
                <div className=' w-1/4' key={id} >
        
                <div className='  flex flex-col items-center h-[300px] border border-black'   >
                    <img  className='text flex items-center h-[200px] w-[80%] object-contain mt-3' src={item.image} alt='pic' />
                    <h1 className='font-medium text-lg'>$ {item.price}</h1>
                    <p className='text-lg font-normal'>{item.description}</p>
                    <div className='flex items-center justify-center w-full gap-4 px-8 mb-0 mt-1.5'>
                    <MdDeleteOutline className='text-xl font-semibold hover:text-white hover:bg-blue-800 ' onClick={()=>handelDelete(item.id)}/>
                    <Link to='/update-user' >
                    <BiEdit className='text-xl font-medium hover:text-white hover:bg-blue-800' onClick={()=> 
                        setToLocalStorage(
                            item.id,
                            item.image,
                            item.price,
                            item.description,
                        )}/>
                    </Link>
                    </div>
                    
                </div>             
                </div>)

            })
        }
       
      
        
    </div>
   
  )
}

export default Content