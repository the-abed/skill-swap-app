import React from 'react';
import Navbar from '../Components/Navbar';
import SkillDetails from '../Pages/SkillDetails';
import { Outdent } from 'lucide-react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const PrivateLayout = () => {
    return (
        <div>
            <nav><Navbar></Navbar></nav>
            <main><Outlet></Outlet></main>
            <footer>

            <Footer></Footer>
            </footer>
        </div>
    );
};

export default PrivateLayout;