import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";



const Main = () => {
    
    return (
        <div>
 
      <div >
        <NavBar  />
        <Outlet />
        <Footer />
      </div>
  
      
        </div>
    );
};

export default Main;