
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import '../Banner/Banner.css'
import { motion } from 'framer-motion';

import 'react-responsive-carousel/lib/styles/carousel.min.css';



const Banner = () => {
    return (
        <div >

<motion.div
          
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
             <Carousel dynamicHeight>
                <div>
                    <img src="https://iili.io/H6KELIp.jpg" />
                    
                </div>
                <div>
                    <img src="https://iili.io/H6KGj6X.jpg" />
                    
                </div>
                <div>
                    <img src="https://iili.io/H6KGscu.jpg" />
                    
                </div>
            </Carousel>
            </motion.div>
        </div>
    );
};

export default Banner;