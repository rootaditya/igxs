'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Card from './Card';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
  BrandCardImg,
  CarCardImg,
  LogoCardImg,
  PosterDesignCardImg,
  Print2CardImg,
  Print3CardImg,
  PrintCardImg,
  SocialCardImg,
  StanddeeCardImg,
  UIUXCardImg,
  PosterCardImg,
} from '@/assets/ServicesAssets';

export default function Services() {
  const carouselData = [
    {
      id: 0,
      title: 'UI/UX Design',
      image: UIUXCardImg,
    },
    {
      id: 1,
      title: 'Logo Design',
      image: LogoCardImg,
    },
    {
      id: 2,
      title: 'Social Media Design',
      image: SocialCardImg,
    },
    {
      id: 3,
      title: 'Poster Design',
      image: PosterDesignCardImg,
    },
    {
      id: 4,
      title: 'Brand Design',
      image: BrandCardImg,
    },
    {
      id: 5,
      title: 'Print Design',
      image: PrintCardImg,
    },
    {
      id: 6,
      title: 'Print 2 Design',
      image: Print2CardImg,
    },
    {
      id: 7,
      title: 'Print 3 Design',
      image: Print3CardImg,
    },
    {
      id: 8,
      title: 'Standee Design',
      image: StanddeeCardImg,
    },
    {
      id: 9,
      title: 'Car Livery Design',
      image: CarCardImg,
    },
    {
      id: 10,
      title: 'Poster Design',
      image: PosterCardImg,
    },
  ];
  return (
    <section id="services" className="w-full relative rounded-t-xl mt-5">
      <div className="bg-services absolute left-0 top-0 h-full w-full rounded-t-xl z-0"></div>
      <div className="">
        <h2 className="text-6xl text-white text-center my-10 relative">
          Our <span className="text-[#ff0000]">Services</span>
        </h2>
      </div>

      {/* Card  */}

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="w-[80%] mt-5 mb-10 !pb-14"
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {carouselData.map((item, id) => (
          <SwiperSlide key={id}>
            <Card title={item.title} image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
