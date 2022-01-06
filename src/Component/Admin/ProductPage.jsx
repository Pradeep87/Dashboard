import React, { Fragment} from "react";
import { Table } from "react-bootstrap";
import './productList.css';
import products from '../../data/Products';

import MetaData from "../../Shared/MetaData";

import SideBar from "../../Shared/Sidebar";



const AdminProduct = () => {
 
   
    
    const deleteProductHandler=()=>{

    }
     
 
   

    return (
        <Fragment>
      <MetaData title={`ALL PRODUCTS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>
      
      
   <Table striped bordered hover >
  <thead>
    <tr>
      <th>S. No.</th>
      <th>Name</th>
      <th>Price</th>
      <th>Description</th>
      <th>Stock</th>
    </tr>
  </thead>
  <tbody >

  {products.map((item,index)=>(
    <tr key={index}>
    <th>{index+1}</th>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.description}</td>
      <td>{item.Stock}</td>
    </tr>
  ))}
   
  
  
  </tbody>
</Table>
         
        </div>
      </div>
    </Fragment>
    )
}

export default AdminProduct
