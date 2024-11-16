import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const navigate = useNavigate()

    const { createNewUser, setUser , updateUserProfile } = useContext(AuthContext)
    const [error , setError] = useState({})








    const handleSubmit =(e)=>{
        e.preventDefault()

        const form = new FormData(e.target)

        const name = form.get("name")
        if(name.length < 5){
            setError({...error, name:'Must be 5 character or more'})
            return;
        }


        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")   

        createNewUser(email,password)
        .then(result =>{
            const user = result.user;
            setUser(user)
            updateUserProfile({displayName:name, photoURL:photo})
            .then(()=>{
                navigate('/')
            })
            .catch(err=>{
                console.log(err)
            })

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message
            console.log(errorCode,errorMessage)
        })
          
       
    }

    return (
        <div>
             <div>
                <h2 className="text-4xl my-10 text-center font-semibold">Register your account</h2>
                <form onSubmit={handleSubmit}  className=" md:w-3/4 lg:w-1/3 mx-auto">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    {
                        error && ( <label className="label text-sm text-red-600">
                           {error.name}
                        </label>)
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4 textarea-sm">Already have an account <Link className="text-[#FF8C47] font-bold" to="/auth/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;