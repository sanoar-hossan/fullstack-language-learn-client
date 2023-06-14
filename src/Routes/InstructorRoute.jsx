import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../Hooks/useAuth";
import useInstructor from "../Hooks/useInstructor";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
  
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <><div className="flex items-center justify-center">
        <div className="inline-block animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
      </div></>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;