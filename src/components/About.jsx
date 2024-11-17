import React, { useContext } from 'react';
import Navbar from './Navbar';
import { AuthContext } from '../Provider/AuthProvider';

const About = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
           <header className='py-5'>
           <Navbar></Navbar>
           </header>
          <div className='flex flex-col gap-2 mt-10 justify-center items-center'>
          <img className='w-[100px] h-[100px]' src={user.photoURL} alt="" />
            <h2 className='text-xl text-center'>Name: {user.displayName}</h2>
            <h2 className='text-xl text-center'>Email: {user.email}</h2>
          </div>
        </div>
    );
};

export default About;