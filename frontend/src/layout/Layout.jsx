// import React from 'react'

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Router from "../routes/Router";

const Layout = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
