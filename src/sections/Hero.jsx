import React, { useEffect } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaShoppingBag, FaBolt } from "react-icons/fa"
import headset from "../assets/headset.jpg"
import earbuds from "../assets/earbuds.jpg"
import dslr from "../assets/dslr.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
  }

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  const Slide = ({ bg, title, subtitle, accent }) => (
    <div>
      <div
        className="relative w-full lg:h-[720px] h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Dark + Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 w-full h-full lg:px-20 px-6 flex items-center">
          <div
            data-aos="fade-right"
            className="max-w-[650px] backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 lg:p-12 space-y-6"
          >
            {/* Badge */}
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${accent}`}
            >
              <FaBolt /> Limited Offer • 80% OFF
            </span>

            <h1 className="text-white uppercase font-extrabold lg:text-[90px] text-[48px] leading-tight">
              {title}
            </h1>

            <p className="text-gray-200 text-lg">
              100% Trusted <span className="text-themeyellow font-semibold">Electronics Gadgets</span>
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className="flex items-center gap-2 bg-themeyellow hover:bg-yellow-400 transition px-6 py-3 rounded-lg text-black font-semibold">
                <FaShoppingBag /> Shop Now
              </button>

              <button className="border border-white/40 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div id="hero" className="w-full">
      <Slider {...settings}>
        <Slide
          bg={dslr}
          title="DSLR 360 Camera"
          accent="bg-red-500/20 text-red-400 border border-red-400/40"
        />
        <Slide
          bg={earbuds}
          title="Wireless Earbuds"
          accent="bg-blue-500/20 text-blue-400 border border-blue-400/40"
        />
        <Slide
          bg={headset}
          title="Wireless Headset"
          accent="bg-green-500/20 text-green-400 border border-green-400/40"
        />
      </Slider>
    </div>
  )
}

export default Hero
