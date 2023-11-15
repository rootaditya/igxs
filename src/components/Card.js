import { UIUXCardImg } from '@/assets/ServicesAssets';
import Image from 'next/image';

export default function Card() {
  return (
    <div className="w-full rounded-[10%] relative bg-[#68686879] border-white border-2 text-white">
      <h1 className="text-3xl pl-6 py-2 my-2 relative z-10">UI/UX Design</h1>
      <hr className="border border-white" />
      <div className="relative pb-16">
        <div className="w-[80%] absolute top-4 left-1/2 -translate-x-1/2 bg-[#757575] h-12 rounded-t-3xl"></div>
        <div className="w-[90%] absolute top-10 left-1/2 -translate-x-1/2 bg-[#9E9D9D] h-20 rounded-t-3xl"></div>
        <div className="relative top-16">
          <Image src={UIUXCardImg} alt="uiux" className="w-full" />
        </div>
      </div>
    </div>
  );
}
