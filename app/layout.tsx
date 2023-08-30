import { Metadata } from 'next';
import Head from 'next/head';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
import { ibm_plex_sans, righteous } from './fonts';

export const metadata: Metadata = {
  title: 'Chaeah Park',
  description: 'Software developer and engineering student',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const meta = {
    title: 'Chaeah Park - Front-end developer and engineering student',
    description: `Front-end developer, engineering student`,
    type: 'website',
  };

  return (
    <html
      lang='en'
      style={{ scrollBehavior: 'smooth' }}
      className={`${ibm_plex_sans.variable} ${righteous.variable}`}
    >
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta name='robots' content='follow, index' />
      </Head>
      <body>
        <div className='relative flex flex-col min-h-screen px-8 overflow-x-hidden overflow-y-scroll md:px-0 '>
          <Sidebar />
          <>
            <main className='container relative pt-8 mx-auto sm:pt-16 md:max-w-2xl animate-main-load'>
              {children}
            </main>
            <Footer />
          </>
        </div>
      </body>
    </html>
  );
}
