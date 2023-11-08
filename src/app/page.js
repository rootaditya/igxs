import AnimatedBar from '@/components/AnimatedBar';
import Home from '@/components/Home';
import Services from '@/components/Services';

export default function App() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Home />
      <Services />
      <AnimatedBar />
    </main>
  );
}
