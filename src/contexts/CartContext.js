import React,{createContext, useEffect, useState} from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const [itemAmount, setItemAmount] = useState(0);

  const [total, settotal] = useState(0);

  useEffect(() => {
   const total = cart.reduce((accumulator, currentItem)=>{
    return accumulator + currentItem.price * currentItem.amount;
   },0);
      settotal(total);
  },)
  
  useEffect(() => {
   if(cart){
    const amount = cart.reduce((accumulator, currentItem)=>{
      return accumulator + currentItem.amount;
    },0);
    setItemAmount(amount);
   }
  }, [cart])
  

  const addToCart =(data,id)=>{
    const newItem ={...data, amount: 1};

    const cartItem = cart.find((item)=>{
      return item.id === id;
    });
    if(cartItem){
      const newCart =[...cart].map((item)=>{
        if(item.id === id){
          return {...item, amount:cartItem.amount +1};
        }
        else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem]);
    }
  }

  const removeFromCart =(id) =>{
    const newCart = cart.filter((item)=>{
      return item.id !== id;
    });
    setCart(newCart)

  }

  const incrementAmount =(id)=>{
    const increitem = cart.find((item) =>item.id === id);
    addToCart(increitem,id);
  }

  const decreaseAmount = (id)=>{
    const decreasitem = cart.find((item) =>{
      return item.id === id;
    })
    if(decreasitem){
      const newCart = cart.map((item)=>{
        if(item.id ===id){
          return{...item ,amount:decreasitem.amount-1}
        }else{
          return item;
        }
      });
      setCart(newCart);
    }
      if(decreasitem.amount<2){
        removeFromCart(id);
      }
    
  }
  const clearCart = ()=>{
    setCart([]);
  }
  return (
    <CartContext.Provider 
    value={{
      cart,
      incrementAmount,
       removeFromCart,
       clearCart, 
       decreaseAmount ,
       addToCart,
       itemAmount,
       total,
       }} >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;