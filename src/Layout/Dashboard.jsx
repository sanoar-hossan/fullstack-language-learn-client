import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
   const isAdmin=true;
   
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
            
            {
                isAdmin ? <><li><Link to='/dashboard/addclass'>Manage Class</Link></li>
                <li><Link to='/dashboard/alluser'>Manage User</Link></li> </> : <>isInstructor ? <><li><Link to='/dashboard/addclass'>Add  Class</Link></li>
            <li><Link to='/dashboard/instructorclass'>Instructor Class</Link></li> </> : <><li><Link to='/dashboard/selectedclass'>Student Selected Class</Link></li>
            <li><Link to='/dashboard/enrolledclass'>Student Enrolled  Class</Link></li>
            <li><Link to='/dashboard/payment'>Payment History</Link></li> </> </>
            }
            
            

            


            
            






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