import React from 'react'
import Sidebar from '../Shared/Sidebar';
import './dashboard.css';
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import MetaData from '../Shared/MetaData';



const Dashboard = () => {

   return (
        <div className='dashboard' >
  <MetaData title="Dashboard - Admin Panel" />
         <Sidebar/>
           
         <div className="dashboardContainer">
         <Typography component="h1">Dashboard</Typography>
         <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> 
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
            <p>Product</p>
              <p>4</p>
            </Link>
            <Link to="/admin/orders">
            <p>Orders</p>
              <p>2</p>
             
            </Link>
            <Link to="/admin/users">
            <p>Users</p>
              <p>1</p></Link>
             </div>
                 </div>


                



         </div>


        </div>
    )
}

export default Dashboard