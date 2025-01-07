import React, {createContext, useState, useEffect} from 'react'


export const ProductContext = createContext();

const ProductProvider = ({children}) => {

  const [product, setproduct] = useState([]);

  useEffect(()=>{
    const fetchProducts = async()=>{
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setproduct(data);
    };
    fetchProducts();
    
},[])

  return (
    <ProductContext.Provider value={{product}}>
      {children}

    </ProductContext.Provider>
  )
};

export default ProductProvider;