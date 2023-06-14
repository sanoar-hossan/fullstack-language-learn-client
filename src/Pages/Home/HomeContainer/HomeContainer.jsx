import Banner from "../Banner/Banner";
import Extra from "../Extra/Extra";
import Instructor from "../Instructors/Instructor";
import PopularClass from "../PopularClass/PopularClass";



const HomeContainer = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Instructor></Instructor>
            <Extra
            ></Extra>
            
        </div>
    );
};

export default HomeContainer;