import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';


const Main = () => {
    const location =useLocation();
   // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {
                noHeaderFooter || <NavBar></NavBar>
            }
           
            <Outlet></Outlet>
            {
                noHeaderFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Main;