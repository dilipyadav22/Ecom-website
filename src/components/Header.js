import React,{ useContext, useEffect, useState} from 'react'

import { SidebarContext } from '../contexts/SidebarContext'

import { CartContext } from '../contexts/CartContext'

import {Link, useNavigate} from 'react-router-dom';
import Logo from '../img/logo.svg'
import { BsBag } from 'react-icons/bs';
import Login from '../Admin/Login';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);


  const [adminPanel, setAdminPanel] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const { isOpen , setIsOpen} =useContext(SidebarContext);

   const {itemAmount}=  useContext(CartContext);


   useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : 
      setIsActive(false);
    })
   },[]);
  const handelSignClose=()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }
  
  const handelAdminPanel=()=>{
    setAdminPanel(true);
  }
 

  
   useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const{uid , email, displayName,photoURL} = user;
              dispatch(addUser({uid: uid, email:email, displayName:displayName,photoURL:photoURL }));
              navigate('/admindashboard')

    
            } 
            else {
             
                dispatch(removeUser());
                navigate('/');
            }
          });
          return ()=> unSubscribe();
     
    }, []);



   
   


  return (
    <header className={`${
      isActive ? 'bg-white py-4 shadow-sm'
    :'bg-none py-6'} w-fulltransition-all`}>  
    <div className=' px-3 container mx-auto flex items-center
    justify-between h-full'  >
       {!user? <Link to= {'/'}>
          <div className='flex items-center justify-between gap-8 px-3 ' >
            <img  className='w-[40px]' src={Logo} alt='' />
          </div>

       </Link>:
       <Link to='/admindashboard' className='text-lg font-bold bg-blue-500 rounded-lg px-4 flex  text-white' >Admin: </Link>
       }
     { ! user? <button 
          className='bg-red-400 py-1 px-3 text-white  rounded-lg hover:text-xl' 
          onClick={handelAdminPanel}> 
          Admin log In
          </button>
          :

     <button 
          className='bg-red-400 py-1 px-3 text-white  rounded-lg hover:text-xl' 
          onClick={handelSignClose}> 
          Sign Out
          </button>
          }

    {/* { user && (<button onClick={handelSignClose} >Sign Out</button>)} */}
       {!user ? <div onClick={()=> setIsOpen(!isOpen)}
        className='cursor-pointer  flex relative px-3 '> 
        <BsBag className='text-2xl ' />

        <div className='bg-red-500 absolute -right-0
        -bottom-2 text-[12px] w-[19px] h-[18px] text-white
        rounded-full flex justify-center items-center '  >
          {itemAmount}
        </div>
         </div>:
        //  <p className='bg-blue-700 text-white px-3 rounded-lg' >{user?.displayName}</p>
         <Link to='/add-new-user' className='bg-blue-500 px-3 py-1 text-white rounded-lg' >Add New </Link>
         }
         </div>

         {adminPanel &&( <Login  data={adminPanel} onclose={()=>  setAdminPanel(false)} />)}
    </header>

  )
}

export default Header