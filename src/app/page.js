import Contact from '@/components/Contact';
import Home from '@/components/Home';
import Services from '@/components/Services';
import Image from 'next/image';

export default function App() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Home />
      <Services />
      <Contact />
    </main>
  );
}
