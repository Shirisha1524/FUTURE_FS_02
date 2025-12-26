import React, { useEffect } from 'react'
import { FaStar, FaRegHeart } from 'react-icons/fa'
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { products } from '../export'

const Productsgrid = () => {

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  return (
    <div
      id="products"
      className="w-full lg:px-24 px-6 py-[90px] bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center gap-4"
    >
      {/* Section Heading */}
      <span
        data-aos="fade-up"
        className="text-themepurple text-sm font-semibold tracking-widest uppercase"
      >
        Browse Collections
      </span>

      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-black font-extrabold lg:text-[46px] text-[36px] text-center"
      >
        Trending Products
      </h1>

      {/* Products Grid */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-14"
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
          >
            {/* Sale Badge */}
            <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
              SALE 14%
            </span>

            {/* Icons */}
            <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 z-10">
              <div className="icon-btn">
                <MdOutlineRemoveRedEye />
              </div>
              <div className="icon-btn">
                <FaRegHeart />
              </div>
              <div className="icon-btn">
                <MdAddShoppingCart />
              </div>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[220px] object-contain group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Info */}
            <div className="mt-4 space-y-1 text-center">
              <p className="text-sm text-gray-400 font-medium">
                {item.category}
              </p>
              <h2 className="text-lg font-semibold text-black">
                {item.name}
              </h2>
              <p className="text-lg font-bold text-themepurple">
                {item.price}
              </p>
            </div>

            {/* Rating */}
            <div className="flex justify-between items-center mt-4 pt-3 border-t">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              <button className="text-sm font-semibold text-white bg-black px-4 py-2 rounded-full hover:bg-themepurple transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <button
        data-aos="zoom-in"
        data-aos-delay="400"
        className="mt-14 bg-themepurple hover:bg-themeyellow text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105"
      >
        View All Products
      </button>

      {/* Icon Button Style */}
      <style>
        {`
          .icon-btn {
            background: black;
            color: white;
            padding: 10px;
            border-radius: 9999px;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .icon-btn:hover {
            background: #facc15;
            color: black;
          }
        `}
      </style>
    </div>
  )
}

export default Productsgrid
