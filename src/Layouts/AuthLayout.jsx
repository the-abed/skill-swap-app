import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <div >
            <header>
                <Navbar></Navbar>
            </header>
            <main className='min-h-screen mx-auto bg-neutral-50 dark:bg-neutral-900 '>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;