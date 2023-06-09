import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import { motion } from "framer-motion";


const Main = () => {
    return (
        <div>
           <NavBar></NavBar>
         
         <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
       <Outlet></Outlet>
      </motion.div>
          
         <Footer></Footer>
        </div>
    );
};

export default Main;