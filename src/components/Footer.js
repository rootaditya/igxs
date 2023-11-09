import { EmailIcon } from '@/assets';
import { SNSLinks } from '@/constant/constant';
import Image from 'next/image';
import { GiJusticeStar } from 'react-icons/gi';
import { GrCertificate } from 'react-icons/gr';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';

export default function Footer() {
  return (
    <footer className="" id="contact">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 mt-10">
        <div className="text-center">
          <h3 className="text-6xl">
            Have an Awesome Project <br />
            Idea? <span className="text-[#ff0000]">Let&apos;s Discuss</span>
          </h3>
        </div>

        <a
          href="mailto:contactincrediblegraphixstudio@gmail.com"
          className="mx-auto mt-6 max-w-md text-center text-lg tracking-wide flex items-center gap-2"
        >
          <Image src={EmailIcon} alt="email icon" />{' '}
          contactincrediblegraphixstudio@gmail.com
        </a>

        <div>
          <p className="text-lg text-center font-bold my-5">Follow</p>
          <div className="flex gap-2 justify-center">
            {SNSLinks.map((item, id) => (
              <a href={item.url} className="text-3xl" key={id}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-around mt-10">
          <div className="flex items-center gap-2 text-xl">
            <GiJusticeStar />
            4.9/5 Average Ratings
          </div>
          <div className="flex items-center gap-2 text-xl">
            <GrCertificate />
            Quality Design
          </div>
          <div className="flex items-center gap-2 text-xl">
            <IoShieldCheckmarkSharp />
            Certified UI/UX Designer
          </div>
        </div>
      </div>
    </footer>
  );
}
