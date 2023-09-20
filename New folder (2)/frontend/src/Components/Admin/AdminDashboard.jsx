
import { Routes,Route,Link } from 'react-router-dom';
import Rooms from "./Rooms";
import Users from './Users';


// import Events from "./Events";
const AdminDashboard = () =>{
      return (
       <>
        <div className="app-container">
          
          <div className="sidebar">
            <nav>
              <ul>
                <li>
                  <Link to="rooms">Rooms</Link>
                </li>
                <li>
                  <Link to="users">Users</Link>
                </li>
  
                
              </ul>
            </nav>
          </div>
  
          <div className="main-content">
            
            <Routes>
                <Route path="rooms" element={<Rooms />}></Route>
                <Route path="users" element={<Users />}></Route>

                
                
            </Routes>
          </div>
        </div>
      
        </>
      );
      

}


export default AdminDashboard