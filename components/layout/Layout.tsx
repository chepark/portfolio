import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import Head from "next/head";

const Layout = (props) => {
  const meta = {
    title: "Chaeah Park - Front-end developer and engineering student",
    description: `Front-end developer, engineering student`,
    type: "website",
  };

  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta name="robots" content="follow, index" />
        
      </Head>
      <body>
      <div className="relative flex flex-col min-h-screen px-8 overflow-x-hidden overflow-y-scroll md:px-0 ">
        <Sidebar />

        <>
          <main className="container relative pt-8 mx-auto sm:pt-16 md:max-w-2xl animate-main-load">
            {props.children}
          </main>
          <Footer />
        </>
      </div>
      </body>
    </html>
  );
};

export default Layout;
