import React from 'react'
import logo1 from '../assets/logo1.png'

const Footer = () => {
  return (
    <section className='flex flex-col gap-10 px-3 sm:px-[3rem]'>
        <div className='flex justify-between gap-10 px-4 md:px-10 pt-10 flex-col md:flex-row'>
            <div className="left flex justify-evenly flex-wrap sm:flex-nowrap gap-3 md:gap-[4rem] ">
                <ul className='flex flex-col gap-[0.2rem] cursor-pointer '>
                    <li className='pb-2 font-semibold'>Company</li>
                    <li className='hover:text-gray-500'>About Us</li>
                    <li className='hover:text-gray-500'>Sell on Ecoyaan</li>
                    <li className='hover:text-gray-500'>Careers</li>
                </ul>
                <ul className='flex flex-col gap-[0.2rem] cursor-pointer '>
                    <li className='pb-2 font-semibold'>Links</li>
                    <li className='hover:text-gray-500'>Privacy Policy</li>
                    <li className='hover:text-gray-500'>Terms of Use</li>
                </ul>
                <ul className='cursor-pointer'>
                    <li className='pb-4 font-semibold'>Follow Us</li>
                    <ul className='flex gap-[0.5rem] '>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d6249e" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0a66c2" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></li>
                        <li className='w-[20px]'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="svg-inline--fa fa-facebook " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#3c5999" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path></svg></li>
                    </ul>
                </ul>
            </div>
            <div className="right flex flex-wrap sm:flex-nowrap justify-between">
                <div>
                    <p>Subscribe to recieve updates!</p>
                    <div className=' flex flex-col px-1 py-5 max-w-[300px]'>
                        <input type="email" required placeholder='Enter Your Email Address' className='subscribe border border-black rounded px-2 py-1 text-[15px] ' />
                        <p className='text-[11px] ' >*By Subscribing you agree to recieve notifications</p>
                        <p className='text-[11px] text-blue-700 '>*Privacy Policy</p>
                        <button className='bg-green-600 px-2 py-1 mt-2 rounded-md text-white active:bg-green-500 outline-none'>Subscribe</button>
                    </div>
                </div>
                <div className='sm:block md:hidden'> 
                    <img src={logo1} className='w-[100px] h-[150px]' alt="full logo" />
                </div>
            </div>
        </div>
        <div className='h-[0.5px] ml-3 mr-3  bg-[#999]'></div>
        <div className='company-address flex flex-wrap sm:flex-nowrap gap-6 px-10'>
            <div>
                <h2 className='font-semibold text-[0.97rem] pb-3'>Registered Address</h2>
                <p>1-N-12T-781/1</p>
                <p>Sri Krishna Vilasa,</p>
                <p>Urvastores,</p>
                <p>Ashoknagar(MR),</p>
                <p>Mangalore,</p>
                <p>Dakshina Kannada- 575006,</p>
                <p>Karnataka, India</p>
            </div>
            <div>
                <h2 className='font-semibold text-[0.97rem] pb-3' >Legal Business Name</h2>
                <p>Kindkarma E-Retail Private Limited</p>
                <p>CIN: U47912KA2023PTC182592</p>
                <p>Telephone: +91 9980490777</p>
            </div>
        </div>
        <div className='text-center font-sans py-5 text-gray-600'>
            <p>&copy; 2023-2024 EcoYaan <sup>TM</sup></p>
        </div>
    </section>
  )
}

export default Footer;