import React from 'react'
import ShortCarousel from './ShortCarousel'
import './Style.css'

import image1 from "../assets/carousel-1.png"
import image2 from "../assets/carousel-2.png"
import image3 from "../assets/carousel-3.png"
const images = [
    { content: <img src={image1} className='swiper-image1' alt="Slide 1" /> },
    { content: <img src={image2} className='swiper-image1' alt="Slide 2" /> },
    { content: <img src={image3} className='swiper-image1' alt="Slide 3" /> },
    { content: <img src={image1} className='swiper-image1' alt="Slide 1" /> },
    { content: <img src={image2} className='swiper-image1' alt="Slide 2" /> },
    { content: <img src={image3} className='swiper-image1' alt="Slide 3" /> },
  ];

const Product = () => {
  return (
    <div className='product'>
        {/* <section > */}
            <h2 className='text-xl font-medium text-center text-green-700'>Product</h2>
            <h1 className='text-2xl font-medium pt-2 text-center'>Meet Our Popular Product</h1>
            <div className="product-slider relative md:px-[5rem] pt-[2rem]"> 
                <p className='text-right pr-4 pb-2 text-[13px] text-gray-500 flex items-center justify-end'>Slide<span className="material-symbols-outlined">
                    chevron_right
                </span></p>
               <div className='carousel-big mb-10'><ShortCarousel items={images} slidesPerView={3} navigation={true}/></div> 
               <div className='carousel-big'><ShortCarousel items={images} slidesPerView={3} navigation={true}/></div> 
               <div className='mb-10 carousel-mini'><ShortCarousel items={images} slidesPerView={2} navigation={true}/></div> 
               <div className='carousel-mini'><ShortCarousel items={images} slidesPerView={2} navigation={true}/></div> 
               
            </div>
            <section className='product-eco-section px-5 md:px-[5rem] flex flex-col gap-[3rem] md:gap-[6rem] w-full bg-[#ebdcd3] rounded-2xl mb-[3rem] ' >
                <div>
                    <h1 className='text-center text-5xl py-6 pb-[3rem] md:pb-[5rem]'>What We Make</h1>
                    <div className='flex flex-col-reverse md:flex-row gap-[1rem] md:gap-[3rem]'>
                        <div className='w-full md:w-[50%]'>
                            {/* <div className='p-6 rounded-md bg-green-500'> */}
                                <img src={image1} className='w-full rounded-md' />
                            {/* </div> */}
                        </div>
                        <div className='w-full md:w-[50%]'>
                            <h1 className='text-4xl py-2 md:py-7'>Eco Friendly Products</h1>
                            <p className='text-justify'>
                            We believe that every purchase you make can have a positive impact on the planet and the future.
                            Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col md:flex-row gap-[1rem] md:gap-[3rem]'>
                        <div className='w-full md:w-[50%]'>
                            <h1 className='text-4xl py-7 text-left'>Sustainable Community</h1>
                            <p className='text-justify'>
                            Discover a world where every choice makes a difference. Dive into engaging content, stay updated on eco-initiatives to nurture our planet.
                            <br /> <br />
                            Together, let's sow the seeds of change and cultivate a more sustainable tomorrow. Join Ecoyaan today and let's grow a greener future, hand in hand!
                            </p>
                        </div>
                        <div className='w-full md:w-[50%]'>
                            <img src={image1} className='w-full rounded-md' />
                        </div>
                    </div>
                </div>
                <div className='pb-[3rem] '>
                    <div className='flex flex-col-reverse md:flex-row gap-[1rem] md:gap-[3rem]'>
                        <div className='w-full md:w-[50%]'>
                            <img src={image1} className='w-full rounded-md' />
                        </div>
                        <div className='w-full md:w-[50%]'>
                            <h1 className='text-4xl py-7'>Sustainable Solutions</h1>
                            <p className='text-justify'>
                            Do you want to reach a dedicated audience of eco-conscious consumers who truly value transparency and ethical practices?
                            <br /> <br />
                            Look no further! Our platform is the perfect place for businesses like yours to showcase your products and connect with our supportive community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        {/* // </section> */}
    </div>
  )
}

export default Product;