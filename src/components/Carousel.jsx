import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Style.css'

import image1 from '../assets/carousel-1.png'
import image2 from '../assets/carousel-2.png'
import image3 from '../assets/carousel-3.png'

const Carousel = ({ items, slidesPerView, navigation}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiper-container cursor-grab active:cursor-grabbing" // Apply custom class for styling
      // style={{ height: '80vh', width: '100%' }}
      loop // Add loop functionality
      autoplay={{ delay: 5000 }} 
    >
      {/* {items.map((item, index) => (
        <SwiperSlide className='relative' key={index}>
          {item.content}
          <p>Invest Wisely, Invest Sustainably!</p>
          <span>Your trusted destination for all things eco-friendly and sustainable.</span>
        </SwiperSlide>
      ))} */}
      <SwiperSlide className='relative'>
        <img src={image1} className='swiper-image' alt="j" />
        <div className='absolute top-[1rem] sm:top-[2rem] md:top-[7rem] left-[3rem] md:left-[4rem] lg:left-[5rem]'>
          <p className='hidden sm:block text-xl md:text-3xl font-semibold'>Invest Wisely, Invest Sustainably!</p>
          <p className='sm:hidden text-xl md:text-3xl font-semibold'>Invest Wisely,</p>
          <p className='sm:hidden text-xl md:text-3xl font-semibold'>Invest Sustainably!</p>
          <span className='hidden sm:block text-[10px] md:text-[14px] text-gray-600'>Your trusted all things eco-friendly.</span>
          <br className='hidden sm:block' />
          <button className='sm:ml-[0.5rem] mr-[-1rem] mt-[0.5rem] md:mt-[1.5rem] py-2 px-4 rounded-lg bg-[#465c10] text-[10px] md:text-[16px] text-white'>About us</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} className='swiper-image' alt="j" />
        <div className='absolute top-[1rem] sm:top-[2.5rem] md:top-[7rem] left-[3rem] md:left-[5rem]'>
          <p className='text-xl sm:text-2xl md:text-3xl font-semibold'>Stay connected with us!</p>
          <span className='hidden sm:block text-[10px] md:text-[14px] text-gray-800'>Follow for latest news and updates.</span>
          <br className='hidden sm:block' />
          <button className='text-[10px] md:text-[16px] sm:ml-[0.5rem] md:ml-[1rem] mt-[0.8rem] sm:mt-[0.5rem] md:mt-[1.5rem] py-2 md:py-2 px-3 md:px-4 rounded-lg bg-[#10632f] text-white'>Follow Us</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} className='swiper-image' alt="j" />
        <div className='absolute top-[0.8rem] md:top-[3rem] left-[3rem] md:left-[5rem]'>
          <p className='text-md sm:text-xl md:text-3xl font-semibold'>Are you a business that truly cares about sustainability?</p>
          <span className='hidden sm:block text-[12px] sm:text-[14px] text-gray-600'>We would love to work with you.</span>
          <br className='hidden sm:block' />
          <button className='text-[9px] md:text-[16px] ml-[0rem] mt-[0.5rem] md:mt-[1.5rem] py-2 md:py-2 px-3 md:px-4 rounded-lg bg-[#387a01] text-white'>Get in Touch!</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
