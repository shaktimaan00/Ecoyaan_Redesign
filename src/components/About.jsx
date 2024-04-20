import React from 'react'
import image1 from "../assets/nature1.jpeg"
import trust from "../assets/trust.png"
import quality from "../assets/quality.png"
import impact from "../assets/impact.png"
import fun from "../assets/fun.png"

import abhishek from "../assets/abhishek.png"
import sarwan from "../assets/sarwan.png"
import shruti from "../assets/shruti.png"
import urmil from "../assets/urmil.png"
import divya from "../assets/divya.png"
import prashanth from "../assets/prashanth.png"
import sai from "../assets/sai-abhilash.png"
import unknown from "../assets/unknown.png"

const About = () => {
  return (
    <div className='px-4 md:px-[3.5rem]'>
        <section className='px-5 md:px-[2rem] pb-[3rem] w-full bg-[#ebdcd3] rounded-2xl'>
            <div>
                <h1 className='text-center text-5xl py-6 pb-[3rem] md:pb-[5rem]'>About Us</h1>
                <div className='flex flex-col md:flex-row items-center gap-[1rem] md:gap-[3rem]'>
                    <div className='w-full md:w-[50%]'>
                        <img src={image1} className='w-full rounded-md h-[15rem] sm:h-[18rem] md:h-[20rem]'/>
                    </div>
                    <div className='w-full md:w-[50%]'>
                        <h1 className='text-4xl py-4'>About Ecoyaan</h1>
                        <p className='text-justify'>
                            At Ecoyaan, we're more than just a platform. We're building a community of eco-conscious individuals united by a passion for sustainability. Join us on this journey and discover:
                            <br /><br />

                            - Eco-friendly lifestyle tips <br />
                            - Climate change insights <br />
                            - Sustainable events and pledges
                            <br /><br />
                            Let's create a greener world together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-[4rem] lg:px-[3.5rem]'>
            <h1 className='text-center text-6xl py-4'>Our Values</h1>
            <div className='flex flex-col items-center justify-center sm:flex-row gap-[1rem] md:gap-[3rem] py-8'>
                <div className='w-full hidden sm:block md:w-[40%]'>
                    <img src={trust} className=' object-cover rounded-md h-[20rem]'/>
                </div>
                <div className='w-full md:w-[60%]'>
                    <h1 className='text-4xl py-4 pt-[2rem]'>Trust</h1>
                    <p className='text-justify'>
                    Ensuring the trust of our community is paramount to us. At Ecoyaan, we believe in fostering transparency and integrity across every facet of our endeavors. From the information we share today to the responsible sourcing of our products in the future, our commitment remains unwavering.
                    <br /><br />
                    Join us in our journey towards sustainability, built on a foundation of trust and honesty.
                    </p>
                </div>
            </div>
            <div className='flex flex-col items-center sm:flex-row gap-[1rem] md:gap-[3rem] md:py-8'>
                <div className='w-full md:w-[40%] hidden sm:block'>
                    <img src={quality} className='w-full object-contain rounded-md md:h-[20rem]'/>
                </div>
                <div className='w-full md:w-[60%]'>
                    <h1 className='text-4xl py-4 md:pt-[2rem]'>Authenticity</h1>
                    <p className='text-justify'>
                    Our dedication to promoting sustainability and environmental awareness is sincere. At Ecoyaan, we cultivate an authentic community of eco-conscious individuals who inspire one another on the path to sustainability.
                    <br /><br />
                    Together, we can make a meaningful difference in protecting our planet for future generations.
                    </p>
                </div>
            </div>
            <div className='flex flex-col-reverse  items-center sm:flex-row gap-[1rem] md:gap-[3rem] py-8'>
                <div className='w-full md:w-[40%] hidden sm:block'>
                    <img src={impact} className='w-full object-contain rounded-md md:h-[20rem]'/>
                </div>
                <div className='w-full md:w-[60%]'>
                    <h1 className='text-4xl py-4 md:pt-[2rem]'>Impact</h1>
                    <p className='text-justify'>
                    Ensuring the trust of our community is paramount to us. At Ecoyaan, we believe in fostering transparency and integrity across every facet of our endeavors. From the information we share today to the responsible sourcing of our products in the future, our commitment remains unwavering.
                    <br /><br />
                    Join us in our journey towards sustainability, built on a foundation of trust and honesty.
                    </p>
                </div>
            </div>
            <div className='flex flex-col-reverse items-center sm:flex-row gap-[1rem] md:gap-[3rem] md:pt-8'>
                <div className='w-full md:w-[40%] hidden sm:block'>
                    <img src={fun} className='w-full object-contain rounded-md md:h-[20rem]'/>
                </div>
                <div className='w-full md:w-[60%]'>
                    <h1 className='text-4xl py-4 md:pt-[2rem]'>Fun and Engaging</h1>
                    <p className='text-justify'>
                    Ensuring the trust of our community is paramount to us. At Ecoyaan, we believe in fostering transparency and integrity across every facet of our endeavors. From the information we share today to the responsible sourcing of our products in the future, our commitment remains unwavering.
                    <br /><br />
                    Join us in our journey towards sustainability, built on a foundation of trust and honesty.
                    </p>
                </div>
            </div>
        </section>
        <section>
            <h1 className='text-5xl text-center'>Our Story</h1>
            <p className='py-[3rem] text-center px-[2rem] md:px-[4rem] '>
            Once upon a time, nestled in the comfort of our living room, we found ourselves captivated by an episode of "Our Planet II". As we watched the majestic albatross birds gliding gracefully across the screen, our hearts sank at the devastating impact of plastic pollution and climate change on these magnificent creatures.
            <br /><br />
            In that pivotal moment, a spark ignited within us—a burning desire to make a difference, to be the change we wished to see in the world. And thus, the seeds of Ecoyaan were planted.
            <br /><br />
            As we delved deeper into our research, we uncovered a troubling truth: while many Indians understood the looming threat of global warming, access to sustainable practices and products remained limited. Moreover, eco-friendly businesses lacked the support they desperately needed to thrive.
            <br /><br />
            Driven by our passion for the planet and a shared vision of a greener future, we embarked on a journey to bridge the gap. We envisioned a platform that would unite consumers, businesses, and sustainability experts alike—a place where eco-conscious individuals could come together to make a tangible impact.
            <br /><br />
            And so, Ecoyaan was born—a vibrant community dedicated to connecting people with eco-friendly products and services, fostering knowledge sharing, and championing sustainability initiatives. Our mission? <br /> To make it easy and convenient for everyone to embrace a more sustainable lifestyle and join us in preserving our precious planet for generations to come.
            </p>
        </section>
        <section className='pb-[3rem] flex flex-col gap-7'>
            <h1 className='text-5xl text-center py-[2rem] ' >Meet Our Founders</h1>
            <div>
                <div className='flex flex-col md:flex-col gap-[1rem] md:gap-[2rem] pt-8'>
                    <div className='flex items-center flex-col'>
                        <img src={abhishek} className='w-[15rem]' alt="about-us-founding-team"/>                    
                        <h1 className='text-center  text-2xl'>Mr. Abhishek Last_Name</h1>
                        <p className='italic pt-[-2rem] pb-3'>Dummy</p>
                        <ul className='flex gap-[1rem] '>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d6249e" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0a66c2" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="svg-inline--fa fa-facebook " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#3c5999" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path></svg></li>
                    </ul>
                    </div>
                    <div className='w-full px-2 md:px-[3rem]'>
                        <p className='text-center bg-[#DEAC80] rounded-lg px-5 py-[2rem]'>
                            Here comes Founder Past Experiences and Expertise. <br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus eligendi dolorum eaque illum, ut in, cum rerum aperiam molestias ipsam consectetur autem accusamus? Ducimus fugiat optio quod pariatur possimus?
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col md:flex-col gap-[2rem] md:gap-[3rem] pt-8'>
                    <div className='flex items-center flex-col'>
                        <img src={sarwan} className='w-[15rem]' alt="about-us-founding-team"/>                    
                        <h1 className='text-center  text-2xl'>Mr. Sarwan Last_Name</h1>
                        <p className='italic pt-[-2rem] pb-3'>Dummy</p>
                        <ul className='flex gap-[1rem] '>
                            <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d6249e" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></li>
                            <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0a66c2" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></li>
                            <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="svg-inline--fa fa-facebook " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#3c5999" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path></svg></li>
                        </ul>
                    </div>
                    <div className='w-full px-2 md:px-[3rem]'>
                        <p className='text-center bg-[#DEAC80] rounded-lg px-5 py-4'>
                        Here comes Founder Past Experiences and Expertise. <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus eligendi dolorum eaque illum, ut in, cum rerum aperiam molestias ipsam consectetur autem accusamus? Ducimus fugiat optio quod pariatur possimus?
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='pb-[5rem]'>
            <h1 className='text-4xl p-8 text-center'>Meet Our Team</h1>
            <div className='flex gap-[1rem] items-start justify-evenly flex-wrap cursor-pointer'>
                <div className='flex flex-col items-center p-4 w-[250px] md:w-[300px] bg-[#ebdcd3] rounded-md'>
                    <img src={shruti} className='w-[15rem]' alt="about-us-founding-team"/>                    
                    <h1 className='text-center  text-xl'>Ms. Shruti</h1>
                    <p className='italic pt-[-2rem] pb-3'>Social Media</p>
                    <ul className='flex gap-[1rem] '>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d6249e" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className=" svg-inline--fa fa-linkedin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0a66c2" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className=" svg-inline--fa fa-facebook " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#3c5999" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path></svg></li>
                    </ul>
                </div>
                <div className='flex flex-col items-center p-4 w-[250px] md:w-[300px] bg-[#ebdcd3] rounded-md'>
                    <img src={urmil} className='w-[15rem]' alt="about-us-founding-team"/>                    
                    <h1 className='text-center  text-xl'>Ms. Urmil</h1>
                    <p className='italic pt-[-2rem] pb-3'>Social Media</p>
                    <ul className='flex gap-[1rem] '>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d6249e" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0a66c2" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="svg-inline--fa fa-facebook " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#3c5999" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path></svg></li>
                    </ul>
                </div>
                <div className='flex flex-col items-center p-4 w-[250px] md:w-[300px] bg-[#ebdcd3] rounded-md'>
                    <img src={divya} className='w-[12.5rem]' alt="about-us-founding-team"/>                    
                    <h1 className='text-center  text-xl'>Ms. Divya</h1>
                    <p className='italic pt-[-2rem] pb-3'>UX Designer</p>
                    <ul className='flex gap-[1rem] '>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d6249e" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0a66c2" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="svg-inline--fa fa-facebook " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#3c5999" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path></svg></li>
                        </ul>
                </div>
                <div className='flex flex-col items-center p-4 w-[250px] md:w-[300px] bg-[#ebdcd3] rounded-md'>
                    <img src={prashanth} className='w-[12rem]' alt="about-us-founding-team"/>                    
                    <h1 className='text-center  text-xl'>Mr. Prashanith</h1>
                    <p className='italic pt-[-2rem] pb-3'>Engineering</p>
                    <ul className='flex gap-[1rem] '>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d6249e" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0a66c2" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="svg-inline--fa fa-facebook " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#3c5999" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path></svg></li>
                    </ul>
                </div>
                <div className='flex flex-col items-center p-4 w-[250px] md:w-[300px] bg-[#ebdcd3] rounded-md'>
                    <img src={sai} className='w-[12rem]' alt="about-us-founding-team"/>                    
                    <h1 className='text-center  text-xl'>Mr. Sai Abhilash</h1>
                    <p className='italic pt-[-2rem] pb-3'>Engineering</p>
                    <ul className='flex gap-[1rem] '>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d6249e" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0a66c2" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="svg-inline--fa fa-facebook " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#3c5999" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path></svg></li>
                    </ul>
                </div>
                <div className='flex flex-col items-center p-4 w-[250px] md:w-[300px] bg-[#ebdcd3] rounded-md'>
                    {/* <img src={sarwan} className='w-[15rem]' alt="about-us-founding-team"/>                     */}
                    <img src={unknown} className='w-[12rem]' alt="about-us-founding-team"/>                    
                    <h1 className='text-center pt-2  text-xl'>Mr. Unknown</h1>
                    <p className='italic pb-3'>it could be you </p>
                    <ul className='flex gap-[1rem] '>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d6249e" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0a66c2" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="svg-inline--fa fa-facebook " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#3c5999" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path></svg></li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About