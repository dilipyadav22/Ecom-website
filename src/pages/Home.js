import React, {useContext} from 'react';

import { ProductContext } from '../contexts/ProductContext';
import Hero from '../components/Hero';
import Product from '../components/Product'
const Home = () => {
const {product} = useContext(ProductContext);

const filteredProduct = product.filter((item)=>{
  return (
        item.category === "men's clothing" || item.category===
        "women's clothing"

      );

  });
    return(
      <div>
        <Hero/>
        <section className='py-16' >
          <div className='container mx-auto' > 
            <div className='grid grid-cols-1 
            md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7 
            max-w-sm mx-auto md:max-w-none md:mx-0' >
              {filteredProduct.map((fproducts)=>{
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