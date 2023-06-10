import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { useEffect, useState } from "react";


const Dashboard = () => {
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [isUserInstructor, setIsUserInstructor] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  const isAdmin = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();

  useEffect(() => {
    setIsLoading(true); // Set loading state to true initially

    // Fetch isAdmin value
    const [isAdminValue, isAdminLoading] = isAdmin;

    // Update the states and loading state
    setIsUserAdmin(isAdminValue);
    setIsUserInstructor(isInstructor);
    setIsLoading(isAdminLoading || isInstructorLoading);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    // Show loading state if still loading
    return <div>Loading...</div>;
  }
   
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            
            {isUserAdmin && (
            <>
              <li>
                <Link to="/dashboard/manageclass">Manage Class</Link>
              </li>
              <li>
                <Link to="/dashboard/allusers">Manage User</Link>
              </li>
            </>
          )}

          {isUserInstructor && (
            <>
              <li>
                <Link to="/dashboard/addclass">Add Class</Link>
              </li>
              <li>
                <Link to="/dashboard/instructorclass">Instructor Class</Link>
              </li>
            </>
          )}

          {!isUserAdmin && !isUserInstructor && (
            <>
              <li>
                <Link to="/dashboard/selectedclass">Student Selected Class</Link>
              </li>
              <li>
                <Link to="/dashboard/enrolledclass">Student Enrolled Class</Link>
              </li>
              <li>
                <Link to="/dashboard/payment">Payment History</Link>
              </li>
            </>
          )}

            
            

            


            
            






            <div className="divider"></div>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/class'>Class</Link></li>
            <li><Link to='/instructor'>Instructor</Link></li>

          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;