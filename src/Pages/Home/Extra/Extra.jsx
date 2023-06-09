import img1 from '../../../assets/slider1.jpg'

const Extra = () => {
    return (
      
            <div className="hero min-h-screen bg-blue-400 py-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Our Best Language class!</h1>
                        <p className="py-6">If you Learn language,You will Get better result for Future.So Hurry Up!!!!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
       
    );
};

export default Extra;