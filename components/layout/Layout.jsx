import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";

const Layout = (props) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="container relative pt-12 mx-auto">
          {props.children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
