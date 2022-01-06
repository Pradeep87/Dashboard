import React from 'react'
import "./UserCss.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import MyImg from '../../images/myimg.jpg';
import {Link }from 'react-router-dom';


const AllUsersPage = () => {

    const visitInstagram = () => {
        window.location = "https://www.instagram.com/pradeep87055/";
      };
    return (
        <div className="aboutSection">
          <div className='link'> <Link to='/'>  Go To Dashboard</Link> </div>
          <div className="aboutSectionGradient"></div>
          <div className="aboutSectionContainer">
            <Typography component="h1">About User</Typography>
    
            <div>
              <div>
                <Avatar
                  style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                  src={MyImg}
                  alt="Founder"
                />
                <Typography>Pradeep Rajput </Typography>
                <Button onClick={visitInstagram} color="primary">
                  Visit Instagram
                </Button>
                <span>
                  This is sample Frontend of a Dashboard made by Pradeep Rajput.
            
                </span>
              </div>
              <div className="aboutSectionContainer2">
                <Typography component="h2">Our Brands</Typography>
                <a
                  href="https://business-grippers.herokuapp.com/?fbclid=IwAR10FimPXGPhv7rmIKUrUB4U8atK3WCagyfjLAa1lFCOzbJh2qL8eDo-74Q"
                  target="blank"
                >
                Business Grippers
                  
                </a>
    
                <a href="https://www.instagram.com/pradeep87055/" target="blank">
                 Instagram Profile 
                </a>
    
                <a href="https://github.com/Pradeep87" target="blank">
                 GitHub Profile 
                </a>
    
    
    
    
              </div>
            </div>
          </div>
        </div>
      );
}

export default AllUsersPage
