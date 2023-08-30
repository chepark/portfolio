import { IBM_Plex_Sans, Righteous } from 'next/font/google';

export const ibm_plex_sans = IBM_Plex_Sans({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--ibm',
});

export const righteous = Righteous({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--righteous',
});
