import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
const Extra = () => {
    return (
      
        <div className='py-10'>
            <motion.div
          
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
            <div className="hero min-h-screen bg-blue-400 py-10">
                <div className="hero-content text-white flex-col lg:flex-row-reverse">
                    <img src="https://iili.io/H6KGscu.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Our Best Language class!</h1>
                        <p className="py-6">If you Learn language,You will Get better result for Future.So Hurry Up!!!!</p>
                        <Link to="/class"><button className="btn btn-blue-800">Get Started</button></Link>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
       
    );
};

export default Extra;