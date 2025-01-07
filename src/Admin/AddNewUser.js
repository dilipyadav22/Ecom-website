import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AddNewUser = () => {
       const [price, setPrice] = useState("");
       const navigate = useNavigate();
              const [image, setImage] = useState();
              const [description, setDescription] = useState("");

              const header = { "Access-Control-Allow-Origin": "*" };

            const handelSave=(e)=>{
                e.preventDefault();
                axios.post('https://677c19cc20824100c07be3ea.mockapi.io/crud-admin',{
                    price:price,
                    description:description,
                    image:image,
                    header,
                })

                .then(()=>{
                    navigate('/admindashboard');
                })
    
            }
       
        const handleImageChange = (e) => {
            const file = e.target.files[0];
            if (file) {
              setImage(URL.createObjectURL(file));
            }
          };

      
    
        const handelClear=(e)=>{
            e.preventDefault();
            setImage(null);
            setPrice('');
            setDescription('');
        }
  return (
    <div className='w-full'>
        <div className='border border-black p-4 flex  w-full' >
                        <form className='flex flex-col   gap-2 w-full'>
                            <label>Choose Image:</label>
                            <input 
                            accept="image/*"
                            type='file' name='Image'onChange={handleImageChange} />
                            <label>Price:</label>
                            <input value={price}
                             type='text' className='border h-8'  placeholder='price of product '
                             onChange={(e)=>setPrice(e.target.value)} 
                             
                             />
                            <label>Description:</label>
                            <input value={description}
                            type='text' className='border h-8'  placeholder='description'
                            onChange={(e)=>setDescription(e.target.value)} 
                            />
                            <div className='flex gap-5 w-full items-center justify-center h-11'>
                             <button className='bg-blue-700 px-4 py-2 w-1/3 text-white'onClick={(e)=>handelSave(e)} >Save</button>
                               

                            <button className='bg-blue-700 px-4 py-2 w-1/3 text-white'onClick={(e)=>handelClear(e)} >Clear</button>
                            </div>
        
                        </form>
                    </div>

    </div>
  )
}

export default AddNewUser