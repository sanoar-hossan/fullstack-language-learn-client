import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaDelicious } from 'react-icons/fa';

const NavBar = () => {
  const {user, logOut, updateUserProfile}=useContext(AuthContext)
  const handleLogout=()=>{
    logOut()
   
  }

// use theme from local storage if available or set light theme
const [theme, setTheme] = useState(
  localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
);

// update state on toggle
const handleToggle = (e) => {
  if (e.target.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};

// set theme state in localstorage on mount & also update localstorage on state change
useEffect(() => {
  localStorage.setItem("theme", theme);
  const localTheme = localStorage.getItem("theme");
  // add custom data-theme attribute to html tag required to update theme using DaisyUI
  document.querySelector("html").setAttribute("data-theme", localTheme);
}, [theme]);


    const navOptions=<>
     <li> <Link to="/">Home</Link> </li>
     <li> <Link to="/instructor">Instructors</Link> </li>
     <li> <Link to="/dashboard"><FaDelicious></FaDelicious> Dashboard</Link> </li>
     <li> <Link to="/class">Classes</Link> </li>
     <li>{user?  <div><img title={user.displayName} src={user.photoURL} className='w-15 h-10 rounded'></img>
 
     </div> : <><Link to="/login">LogIn</Link> </>} </li>
     
    <li>{user&& <Link><button onClick={handleLogout}>LogOut</button></Link> }</li>
    <li><Link to="/register">Register</Link></li>
    
     
      
       
    
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