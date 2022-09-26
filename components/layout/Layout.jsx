import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";

const Layout = (props) => {
  const [navToggleOn, setNavToggleOn] = useState(false);

  return (
    <>
      <div className="relative flex flex-col min-h-screen px-8 overflow-x-hidden overflow-y-scroll md:px-0">
        <Sidebar toggleOn={navToggleOn} setToggleOn={setNavToggleOn} />
        {!navToggleOn && (
          <>
            <main className="container relative pt-8 mx-auto sm:pt-16 md:max-w-2xl">
              {props.children}
            </main>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Layout;
