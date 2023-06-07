import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const NavBar = () => {
  const {user, logOut, updateUserProfile}=useContext(AuthContext)
  const handleLogout=()=>{
    logOut()
   
  }
    const navOptions=<>
     <li> <Link to="/">Home</Link> </li>
     <li> <Link to="/instructors">Instructors</Link> </li>
     <li> <Link to="/dashboard">Dashboard</Link> </li>
     <li> <Link to="/classes">Classes</Link> </li>
     <li>{user?  <><img title={user.displayName} src={user.photoURL} className='w-11 h-10 rounded'></img>
     <Link><button onClick={handleLogout}>LogOut</button></Link>
     </> : <><Link to="/login">LogIn</Link> </>} </li>
     
     <li> <Link to="/login">LogIn</Link> </li>
     <li> <Link to=""><img className='w-10 h-10 rounded' src="" alt="" /></Link> </li>
      
       
    
    </>
    return (
        <>
            <div className="navbar max-w-screen-xl mx-auto  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {
        navOptions
       }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Language School</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navOptions}
    </ul>
  </div>
  
</div>
        </>
    );
};

export default NavBar;