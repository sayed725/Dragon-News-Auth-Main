import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const { userLogIn , setUser } = useContext(AuthContext)
    const [error , setError] = useState({})

    const location = useLocation()

    const navigate = useNavigate()

    const handleLogIn =(e)=>{
        e.preventDefault()

        const form = new FormData(e.target)

        const email = form.get("email")
        const password = form.get("password")
      

        userLogIn(email,password)
        .then(result=>{
            const user = result.user
            setUser(user)
            navigate(location?.state ? location.state : "/");

        })
        .catch((err) => {
            setError({ ...error, Login:err.code})
          
          });
    }

    return (
        <div>
             <div>
                <h2 className="text-4xl my-10 text-center font-semibold">Login your account</h2>
                <form onSubmit={handleLogIn}  className=" md:w-3/4 lg:w-1/3 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        {
                            error.Login && ( <label className="label text-sm text-red-600">
                               {error.Login}
                            </label>)
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4 textarea-sm">Do not have an account <Link className="text-[#FF8C47] font-bold" to="/auth/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;