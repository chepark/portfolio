import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import SideNavigation from '../components/sections/SideNavigation'
import Footer from '../components/sections/Footer'
import { ibm_plex_sans, righteous } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://chaeah.com'),
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: 'smooth' }}
      className={`${ibm_plex_sans.variable} ${righteous.variable}`}
    >
      <body>
        <div className="relative flex flex-col min-h-screen px-8 overflow-x-hidden overflow-y-scroll md:px-0 ">
          <SideNavigation />
          <>
            <main className="container relative pt-8 mx-auto sm:pt-16 md:max-w-2xl animate-main-load">
              {children}
              <Analytics />
            </main>
            <Footer />
          </>
        </div>
      </body>
    </html>
  )
}
