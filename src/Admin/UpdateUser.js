import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
            const [price, setPrice] = useState("");
            const navigate = useNavigate();
           const [image, setImage] = useState(null);
           const [description, setDescription] = useState("");
           const[id,setId] = useState(0);

          

    useEffect(() => {
     setId(localStorage.getItem("id"));
     setImage(localStorage.getItem("image"));
     setPrice(localStorage.getItem('price'));
     setDescription(localStorage.getItem("description"));
    }, [])
    
    const handelUpdate= (e) =>{
        e.preventDefault();
        axios.put(`https://677c19cc20824100c07be3ea.mockapi.io/crud-admin/${id}`
        ,{
            price:price,
            description:description,
            image:image,
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

    const handelBack=(e)=>{
        e.preventDefault();
        navigate('/admindashboard') ;
    }
  return (
    <div className='w-full'>
        <div className='border border-black p-4 flex  w-full' >
                        <form className='flex flex-col   gap-2 w-full'>
                            <label>Choose Image:</label>
                            <input files={image}
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
                             <button className='bg-blue-700 px-4 py-2 w-1/3 text-white'onClick={(e)=>handelUpdate(e)} >Update</button>
                               

                            <button className='bg-blue-700 px-4 py-2 w-1/3 text-white'onClick={(e)=>handelBack(e)} >Back</button>
                            </div>

        
                        </form>
                    </div>

    </div>
  )
}

export default UpdateUser