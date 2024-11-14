import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RightNavbar from '../components/layout-components/RightNavbar';
import { Outlet } from 'react-router-dom';

const Homelayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
                <section className='my-7'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='pt-[50px] grid md:grid-cols-12 gap-5'>
                <aside className='left col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-6'><Outlet></Outlet></section>
                <aside className='right col-span-3'> <RightNavbar></RightNavbar></aside>
            </main>
        </div>
    );
};

export default Homelayout;