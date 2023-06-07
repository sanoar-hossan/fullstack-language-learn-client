
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import '../Banner/Banner.css'


import 'react-responsive-carousel/lib/styles/carousel.min.css';

//import slider1 from '../../../assets/slider1.jpg'
import slider2 from '../../../assets/slider2.jpg'
import slider3 from '../../../assets/slider3.jpg'
//import slider4 from '../../../assets/slider4.jpg'
import slider5 from '../../../assets/slider5.jpg'
const Banner = () => {
    return (
        <div >
             <Carousel dynamicHeight>
                <div>
                    <img src={slider5} />
                    
                </div>
                <div>
                    <img src={slider2} />
                    
                </div>
                <div>
                    <img src={slider3} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;