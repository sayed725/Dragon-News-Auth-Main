import { NavLink, Link } from "react-router-dom";
import userPic from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {


  const { user, logOut } = useContext(AuthContext)


    // const links = <>
    //  <li><NavLink to='/'>Home</NavLink></li>
    //  <li><NavLink to='/about'>About</NavLink></li>
    //  <li><NavLink to='/career'>Career</NavLink></li>
    // </>




    return (
        <div className="flex justify-between items-center">
        <div className="">{ user && user.email}</div>
        <div className="nav space-x-5">
          <Link to="/">Home</Link>
          <Link to="/career">Career</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="login flex gap-2 items-center">
          <div className=" ">
          {user && user?.email ? (
            <div className="flex gap-2">
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img className="w-10" src={userPic} alt="" />
          )}
          </div>

          {
            user && user?.email ? 
            <button onClick={logOut} className="btn btn-neutral rounded-none">Log-out</button>  
               : <Link to='/auth/login'  className="btn btn-neutral rounded-none">Login</Link>
          }
         
        </div>
      </div>

      // daisyui navbar 


    //     <div className="navbar bg-base-100 items-center">
    //     <div className="navbar-start">
    //       <div className="dropdown">
    //         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor">
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h8m-8 6h16" />
    //           </svg>
    //         </div>
    //         <ul
    //           tabIndex={0}
    //           className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
    //          {links}
    //         </ul>
    //       </div>
    //       <a className="btn btn-ghost text-xl"></a>
    //     </div>
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="menu menu-horizontal px-1">
    //        {links}
    //       </ul>
    //     </div>
    //     <div className="navbar-end">
    //         <div className="flex items-center gap-2">
    //             <img className="w-[40px] h-[40px]" src={user} alt="" />
    //         <a className="btn btn-neutral rounded-none">Button</a>
    //         </div>
         
    //     </div>
    //   </div>
    );
};

export default Navbar;