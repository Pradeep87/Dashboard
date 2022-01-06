
import './App.css';
import React from 'react'
import Dashboard from './Component/Dashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllUsersPage from './Component/Admin/AllUsersPage';
import AllOrsers from './Component/Admin/AllOrders';
import CreateProduct from  './Component/Admin/CreateProduct';
import AdminProduct from './Component/Admin/ProductPage';

const App = () => {
  return (
    <>
    <BrowserRouter>
   
    <Routes>
<Route path='/' element={ <Dashboard/>}/>
<Route path='/admin/allproducts' element={ <AdminProduct/>}/>
<Route path='/admin/product' element={ <CreateProduct/>}/>
<Route path='/admin/orders' element={ <AllOrsers/>}/>
<Route path='/admin/users' element={ <AllUsersPage/>}/>


    </Routes>
  
    </BrowserRouter>
   
 
    </>
  )
}

export default App
