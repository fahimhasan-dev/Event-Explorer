import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
        <div>
                 
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;