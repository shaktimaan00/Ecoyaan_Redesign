import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './Style.css'

const ShortCarousel = ({ items, slidesPerView }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={slidesPerView}
            navigation
            spaceBetween={5}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            className="swiper-container1 cursor-grab active:cursor-grabbing"
            loop // Add loop functionality
        >
            {items.map((item, index) => (
                <SwiperSlide key={index} className='flex flex-col items-center'>
                    {item.content}
                    <p className='pt-2 text-[0.9rem]'>Product Title {index+1}</p>
                    {/* <p className='text-[0.9rem]'>Add dummy Text</p>
                    <p className='hidden sm:flex text-[0.9rem]'><span className='price-cross mr-3 text-red-600'>Rs. 450/-</span> <span className='text-green-600'>Rs. 350/-</span></p> */}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ShortCarousel;
