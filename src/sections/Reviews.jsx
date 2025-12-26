import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { reviewdata } from '../export';

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  useEffect(() => {
    AOS.init({ offset: 150, duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div id='testimonials' className='w-full lg:px-20 px-5 py-[80px] bg-gray-50 flex flex-col items-center gap-6 relative'>
      <h2 data-aos="fade-down" className='text-purple-600 text-lg font-semibold uppercase tracking-wider'>
        1500+ Customer Reviews
      </h2>
      <h1 data-aos="fade-up" className='text-red-600 font-bold text-4xl md:text-5xl lg:text-6xl text-center'>
        Our Customers Love Us
      </h1>

      <div data-aos="fade-up" className='w-full mt-12 relative'>
        <Slider {...settings}>
          {reviewdata.map((item, index) => (
            <div key={index} className='px-3'>
              <div className='bg-white rounded-3xl p-8 flex flex-col items-center text-center gap-4 shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2'>
                <img src={item.img} alt={item.name} className='w-24 h-24 rounded-full object-cover border-4 border-purple-500' />

                {/* Stars */}
                <div className='flex justify-center gap-1 text-yellow-400'>
                  {Array(5).fill().map((_, i) => <FaStar key={i} />)}
                </div>

                <p className='text-gray-600 text-md md:text-lg'>{item.para}</p>

                <div className='flex items-start gap-4 mt-4 w-full'>
                  <FaQuoteLeft className='text-purple-500 text-2xl mt-1' />
                  <div className='flex flex-col text-left'>
                    <h3 className='text-gray-800 font-semibold text-xl'>{item.name}</h3>
                    <p className='text-gray-500 text-sm'>{item.post}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Optional background shapes */}
      <div className='absolute -top-10 -left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse'></div>
      <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-200 rounded-full opacity-15 animate-pulse'></div>
    </div>
  );
};

export default Reviews;
