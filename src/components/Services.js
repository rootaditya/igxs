'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Card from './Card';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Services() {
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
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
