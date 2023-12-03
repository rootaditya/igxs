import { Urbanist } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const unrbanist = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'IGXS - Graphic and UI/UX Design Services',
  description: 'Get the Certified and Premium looking design',
  tag: [
    'IGXS',
    'Incredible Graphix Studio',
    'Incrediblegraphixstudio',
    'Aditya Kumar',
    'UI Design',
    'UX Design',
    'UI/UX',
    'Graphic Design',
    'Figma',
    'Photoshop',
    'Adobe',
    'UI/UX Designer',
  ],
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
