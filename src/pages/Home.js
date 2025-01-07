import React, {useContext , useState} from 'react';

import { ProductContext } from '../contexts/ProductContext';
import Hero from '../components/Hero';
import Product from '../components/Product'
const Home = () => {
const {product} = useContext(ProductContext);
const[item , setItem]=useState(product)


const filteredProduct =(catItem)=>{
 const updateItems =  product.filter((curItem)=>{
    return curItem.category === catItem     
    });
    setItem(updateItems)
} 

    return(
      <div>
        <Hero/>
        <div className='flex items-center justify-center gap-10 mt-3' >
        <button  className='px-5 border rounded-xl  text-lg font-medium focus:bg-[#f5f5f5]' onClick={()=> setItem(product)} >All </button>
        <button className='px-5 border rounded-xl text-lg font-medium focus:bg-[#f5f5f5]' onClick={()=>filteredProduct("men's clothing")} >men's </button>
        <button className='px-5 border rounded-xl text-lg font-medium focus:bg-[#f5f5f5]' onClick={()=>filteredProduct("jewelery")} >Jewelery </button>
        <button className='px-5 border rounded-xl text-lg font-medium focus:bg-[#f5f5f5]' onClick={()=>filteredProduct("electronics")} >Electronics </button>
        <button className='px-5 border rounded-xl text-lg font-medium focus:bg-[#f5f5f5]' onClick={()=>filteredProduct("women's clothing")} >Women's </button>

        
       
        </div>


        <section className='py-16' >
          <div className='container mx-auto' > 
            <div className='grid grid-cols-1 
            md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7 
            max-w-sm mx-auto md:max-w-none md:mx-0' >
              {item.map((fproducts)=>{
                return (
                  <Product data={fproducts} key={fproducts.id}/>
                );
              })}
            </div>
          </div>
        </section>
        
      </div>

    )
};

export default Home