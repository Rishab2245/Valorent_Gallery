import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


const Admin = () => {
    return (
      <React.Fragment>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </React.Fragment>
    );
  };
export default Admin;


