import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import SideBar from './components/SideBar';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminDashBoard from './Admin/AdminDashBoard';
import { useSelector } from 'react-redux';
import AddNewUser from './Admin/AddNewUser';
import UpdateUser from './Admin/UpdateUser';
import Login from './Admin/Login';

// import Login from './Admin/Login';


 
const App = () => {
 const user =  useSelector(store =>store.user);
  return (
    <div className='overflow-hidden' >
    
      <Router>
        <Header/>
        
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProductDetails/>} />
        <Route path='/admin-panel' element={<Login/>}/>
        <Route path='/admindashboard' element={<AdminDashBoard/>} />
         <Route path='/add-new-user' element={<AddNewUser/>} />
         <Route path='/update-user' element={<UpdateUser/>} />
        </Routes>

        <SideBar/>
        {!user?<Footer/>: null}

      </Router>

      
    </div>
  )
}

export default App