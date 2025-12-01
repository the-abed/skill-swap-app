import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50">
        <Navbar />
      </nav>

      {/* Main content */}
      <main className="flex-1
        bg-neutral-50 dark:bg-neutral-900
        transition-colors duration-500">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
