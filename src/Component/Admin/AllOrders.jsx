import React, { Fragment} from "react";
import { Table } from "react-bootstrap";
import './productList.css';
import products from '../../data/Products';

import MetaData from "../../Shared/MetaData";

import SideBar from "../../Shared/Sidebar";

const Orders=[
    {
        id:2,
        OrderItems:["apple"," banana"],
        User:"pradeep",
        OrderStatus:"pending",
        TotalPrice:1200
},
{
    id:2,
    OrderItems:["rings"," statue"],
    User:"Raman",
    OrderStatus:"pending",
    TotalPrice:10000
},

]


const AllOrsers = () => {
    return (
        <Fragment>
      <MetaData title={`ALL PRODUCTS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL Orders</h1>
      
      
   <Table striped bordered hover >
  <thead>
    <tr>
      <th>Order Id</th>
      <th>Order Items</th>
      <th>User</th>
      <th>Order Status</th>
      <th>Total Price</th>
    </tr>
  </thead>
  <tbody >

  {Orders.map((item,index)=>(
    <tr key={item.id}>
    <th>{item.id}</th>
      <td>{item.OrderItems}</td>
      <td>{item.User}</td>
      <td>{item.OrderStatus}</td>
      <td>{item.TotalPrice}</td>
    </tr>
  ))}
   
  
  
  </tbody>
</Table>
         
        </div>
      </div>
    </Fragment>
    )
}

export default AllOrsers
