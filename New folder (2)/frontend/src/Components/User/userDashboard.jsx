import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Router,Routes,Route,Navigate,Link } from 'react-router-dom';
import UserRooms from "./userRooms";


// import Events from "./Events";
const UserDashboard = () =>{
  
    
      return (
       <>
        <div className="app-container">
          {/* Sidebar/Navigation */}
          <div className="sidebar">
            <nav>
              <ul>
                <li>
                  <Link to="rooms">Seats</Link>
                </li>
               
                
              </ul>
            </nav>
          </div>
  
          {/* Main Content */}
          <div className="main-content">
          <Routes>
                <Route path="rooms" element={<UserRooms />}></Route>  
            </Routes>
            
          </div>
        </div>
      
        </>
      );
      

}


export default UserDashboard