import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";

const Layout = (props) => {
  return (
    <>
      <div className="relative flex flex-col min-h-screen px-8 overflow-x-hidden overflow-y-scroll md:px-0 ">
        <Sidebar />

        <>
          <main className="container relative pt-8 mx-auto sm:pt-16 md:max-w-2xl animate-main-load">
            {props.children}
          </main>
          <Footer />
        </>
      </div>
    </>
  );
};

export default Layout;
