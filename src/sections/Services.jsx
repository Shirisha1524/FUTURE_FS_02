import React, { useEffect } from 'react';
import payment from '../assets/payment.png';
import shipping from '../assets/shipping.png';
import refund from '../assets/return.png';
import gift from '../assets/gift.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const servicesData = [
  {
    img: shipping,
    title: 'Worldwide Shipping',
    desc: 'Fast and reliable delivery across the globe.',
    delay: 100,
  },
  {
    img: payment,
    title: '100% Secure Payment',
    desc: 'Safe, encrypted, and trusted payment methods.',
    delay: 200,
  },
  {
    img: refund,
    title: 'Easy Returns',
    desc: 'Hassle-free returns within 7 days of delivery.',
    delay: 300,
  },
  {
    img: gift,
    title: 'Gift Cards',
    desc: 'Perfect gift options for your loved ones.',
    delay: 400,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="w-full bg-gray-100 lg:px-20 px-5 py-[100px] relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
          Our Services
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Premium services designed to delight our customers.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={service.delay}
            className="group bg-white rounded-3xl p-10 flex flex-col items-center text-center gap-5
                       shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]
                       hover:-translate-y-3 transition-all duration-500 relative overflow-hidden border border-transparent hover:border-purple-400"
          >
            {/* Floating background shape */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-tr from-purple-300 to-blue-300 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>

            {/* Icon */}
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg group-hover:scale-125 transition-transform duration-500">
              <img src={service.img} alt="" className="w-12 invert" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-[16px] leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
