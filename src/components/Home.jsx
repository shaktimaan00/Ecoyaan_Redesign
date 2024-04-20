import React from "react"
import Carousel from './Carousel';
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";

import image1 from '../assets/carousel-1.png'
import image2 from '../assets/carousel-2.png'
import image3 from '../assets/carousel-3.png'

const images = [
  { content: <img src={image1} className='swiper-image' alt="Slide 1" /> },
  { content: <img src={image2} className='swiper-image' alt="Slide 2" /> },
  { content: <img src={image3} className='swiper-image' alt="Slide 3" /> },
];

const Home = () => {
  return (
    <div className="px-3">
      {/* <Header /> */}
      <Carousel items={images} slidesPerView={1} />
      <Product />
      {/* <Footer/> */}
    </div>
  )
}

export default Home;