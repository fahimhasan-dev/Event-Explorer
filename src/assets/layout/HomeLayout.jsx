import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";


const HomeLayout = () => {
  return (
    <div>
        
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
        
      </main>
      
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
