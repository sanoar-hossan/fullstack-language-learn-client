import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import { motion } from "framer-motion";


const Main = () => {
    return (
        <div>
 <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.9 }}
      >

        <NavBar></NavBar>
     
       <Outlet></Outlet>
       <Footer></Footer>
       </motion.div>
        </div>
    );
};

export default Main;