import React, { useEffect } from 'react'
import insta1 from '../assets/insta-1.jpg'
import insta2 from '../assets/insta-2.jpg'
import insta3 from '../assets/insta-3.jpg'
import insta4 from '../assets/insta-4.jpg'
import insta5 from '../assets/insta-5.jpg'
import insta6 from '../assets/insta-6.jpg'
import { FaInstagram } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Insta = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  const images = [insta1, insta2, insta3, insta4, insta5, insta6]

  return (
    <div className="w-full lg:px-20 px-5 py-[90px] bg-gray-50 flex flex-col items-center gap-6 relative overflow-hidden">
      
      {/* Headings */}
      <h2
        data-aos="fade-down"
        className="text-themepurple text-lg font-semibold uppercase tracking-wider"
      >
        Our Instagram Shop
      </h2>

      <h1
        data-aos="fade-up"
        className="text-red-600 font-bold text-4xl md:text-5xl text-center"
      >
        Follow on Instagram
      </h1>

      {/* Instagram Grid */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="w-full mt-10 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
          >
            {/* Image */}
            <img
              src={img}
              alt="Instagram"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center gap-3">
              <FaInstagram className="text-white text-3xl" />
              <span className="text-white font-semibold tracking-wide">
                View Post
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        data-aos="zoom-in"
        data-aos-delay="300"
        className="mt-14 flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition-transform duration-300 text-white font-semibold px-10 py-4 rounded-full shadow-lg uppercase"
      >
        <FaInstagram className="text-xl" />
        #ElectraShop
      </button>

      {/* Decorative blur shapes */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-300/30 rounded-full blur-3xl"></div>
    </div>
  )
}

export default Insta
