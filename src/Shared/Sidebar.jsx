import React from 'react';
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import './sidebar.css';


const Sidebar = () => {
  return (
    <>
       <div className="sidebar">
    <Link to='/' className='image'>
        <img src={logo} alt="Ecommerce" />
        </Link>
        <Link to="/">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
     
   

      
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
          className='linc'
        >
          <TreeItem nodeId="1" label="Products">
            <Link to="/admin/allproducts">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      



      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>

    
   
      
    
     
  
    </div>
    </>
  )
}

export default Sidebar