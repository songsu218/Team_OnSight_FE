import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-SignInPage-dom';
import '../css/Layout.css';

const MainLayout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
