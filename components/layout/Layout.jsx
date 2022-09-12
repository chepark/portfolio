import React from "react";
import Sidebar from "../sidebar/Sidebar";

const Layout = (props) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="container relative mx-auto">{props.children}</main>
    </div>
  );
};

export default Layout;
