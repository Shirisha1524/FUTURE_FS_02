import React, { useEffect } from 'react'
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import cat3 from '../assets/cat3.jpg'
import cat4 from '../assets/cat4.jpg'
import cat5 from '../assets/cat5.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Category = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in-out',
    })
  }, [])

  const categories = [
    { img: cat1, title: 'Speakers' },
    { img: cat2, title: 'Headphones' },
    { img: cat3, title: 'Cameras' },
    { img: cat4, title: 'Smart Watches' },
    { img: cat5, title: 'Accessories' },
  ]

  return (
    <section
      id="category"
      className="w-full bg-gradient-to-b from-gray-100 to-white lg:px-20 px-6 py-24"
    >

      {/* SECTION HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
        <div data-aos="fade-right">
          <p className="text-themepurple font-semibold uppercase tracking-wider">
            Favourite Items
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2">
            Popular Categories
          </h2>
        </div>

        <button
          data-aos="fade-left"
          className="mt-6 lg:mt-0 bg-themepurple hover:bg-themeyellow text-white hover:text-black px-8 py-3 rounded-full font-semibold transition"
        >
          View All Categories
        </button>
      </div>

      {/* CATEGORY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {categories.map((cat, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
          >

            {/* IMAGE */}
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

            {/* TEXT */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold tracking-wide">
                {cat.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Category
