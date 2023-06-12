import Banner from "../Banner/Banner";
import Extra from "../Extra/Extra";
import Instructor from "../Instructors/Instructor";



const HomeContainer = () => {
    return (
        <div>
            <Banner></Banner>
            <Instructor></Instructor>
            <Extra
            ></Extra>
            
        </div>
    );
};

export default HomeContainer;