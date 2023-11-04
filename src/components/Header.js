import { HomeGradient, MainLogo } from '@/assets';
import { NavList, SiteName } from '@/constant/constant';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b border-black py-4 relative z-30">
      <Image
        src={HomeGradient}
        alt="Home Gradient"
        className="absolute right-0 top-0 z-20"
      />
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <Image src={MainLogo} alt={SiteName} />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12 z-50">
            <nav aria-label="Global" className="hidden md:block lg:pr-8">
              <ul className="flex items-center gap-6 text-sm">
                {NavList.map((item, id) => {
                  return (
                    <li key={id}>
                      <a
                        className="transition text-xl font-semibold hover:text-gray-500/75"
                        href={item.url}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
