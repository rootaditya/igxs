import { Star2Icon } from '@/assets';
import Image from 'next/image';

export default function AnimatedBar() {
  return (
    <div className="bg-[#FB1414] w-full shadow-inner overflow-hidden">
      <div className="mt-10 bg-white w-screen -rotate-2 whitespace-nowrap flex-nowrap flex">
        <div className="flex w-fit text-3xl gap-5 py-4 rotate animate-text-flow">
          <Image src={Star2Icon} alt="star icon" />
          <p>UX Design</p>
          <Image src={Star2Icon} alt="star icon" />
          <p>Web Design</p>
          <Image src={Star2Icon} alt="star icon" />
          <p>Livery Design</p>
          <Image src={Star2Icon} alt="star icon" />
          <p>Wireframe Design</p>
          <Image src={Star2Icon} alt="star icon" />
          <p>Book Design</p>
          <Image src={Star2Icon} alt="star icon" />
        </div>
      </div>
    </div>
  );
}
