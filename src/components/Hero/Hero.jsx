import React, {useEffect, useState } from 'react'
import carPng from '../../assets/car.png'
import yellowCarPng from '../../assets/banner-car.png'
import AOS from "aos"

const Hero = ({theme}) => {
  useEffect(() => {
    AOS.refresh();
  });
    return (
    <div className='dark:bg-black dark:text-white duration-300 pb-4'>
        <div className="container min-h-[620px] flex">
            <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
                <div data-aos="zoom-in" data-aos-duration="1500" className='order-1 sm:order-2'>
                    <img src={theme === "dark" ? carPng : yellowCarPng} 
                    className='relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]'
                    />
                </div>
                <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
                    <p data-aos="fade-up" className='text-primary text-2xl font-serif'>Effortless</p>
                    <h1 data-aos="fade-up" data-aos-delay="600" className='text-5xl lg:text-7xl font-semibold font-serif'>Car Rental</h1>
                    <p
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo officiis suscipit aperiam, error corrupti esse qui mollitia exercitationem iusto fugit eius quam temporibus natus. Dolores magnam ab aperiam vero id.
                    </p>
                    <button
                    data-aos="fade-up"
                    data-aos-duration="1500" 
                    className='btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero