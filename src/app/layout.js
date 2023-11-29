import { Urbanist } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const unrbanist = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'IGXS - Your X-desires destiny',
  description:
    'fullfill your x-desires here watch all porn video for free without any interuption or ads',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={unrbanist.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
