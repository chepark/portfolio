import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";

const Layout = (props) => {
  return (
    <>
      <div className="relative flex px-8 overflow-x-hidden md:px-0">
        <Sidebar />
        <main className="container relative pt-12 mx-auto md:max-w-2xl">
          {props.children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
