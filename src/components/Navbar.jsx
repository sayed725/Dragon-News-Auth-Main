import { NavLink, Link } from "react-router-dom";
import user from '../assets/user.png'

const Navbar = () => {


    // const links = <>
    //  <li><NavLink to='/'>Home</NavLink></li>
    //  <li><NavLink to='/about'>About</NavLink></li>
    //  <li><NavLink to='/career'>Career</NavLink></li>
    // </>




    return (
        <div className="flex justify-between items-center">
        <div className=""></div>
        <div className="nav space-x-5">
          <Link to="/">Home</Link>
          <Link to="/career">Career</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="login flex gap-2 items-center">
          <div className=" ">
            <img className="w-[40px] h-[40px]"src={user} alt="" />
          </div>
          <Link to='/auth/login'  className="btn btn-neutral rounded-none">Login</Link>
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