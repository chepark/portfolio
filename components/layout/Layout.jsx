import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";

const Layout = (props) => {
  return (
    <>
      <div className="relative flex flex-col px-8 overflow-x-hidden md:px-0">
        <Sidebar />
        <main className="container relative pt-12 mx-auto md:max-w-2xl">
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
