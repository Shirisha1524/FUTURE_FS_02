import React, { useEffect } from 'react'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.png'
import client6 from '../assets/client6.png'
import google from '../assets/google.jpg'
import apple from '../assets/apple.jpg'
import pay1 from '../assets/pay-1.jpg'
import pay2 from '../assets/pay-2.jpg'
import pay3 from '../assets/pay-3.jpg'
import pay4 from '../assets/pay-4.jpg'
import { Link } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    AOS.init({ offset: 120, duration: 700, once: true })
  }, [])

  return (
    <footer id="contact" className="w-full bg-[#0f0f1a] text-gray-300 relative">

      {/* CLIENT LOGOS */}
      <div
        data-aos="fade-up"
        className="w-full border-b border-white/10 py-10 px-5 lg:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 place-items-center"
      >
        {[client1, client2, client3, client4, client5, client6].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="client"
            className="w-[120px] opacity-60 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>

      {/* MAIN FOOTER */}
      <div className="px-5 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

        {/* BRAND */}
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-white tracking-wide">
            Electric<span className="text-purple-500">Shop</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Electric Shop is a feature-rich e-commerce platform for electronic
            products with modern UI, secure payments, and smooth performance.
          </p>

          <div>
            <h2 className="text-sm font-semibold text-white mb-3">
              Download our app
            </h2>
            <div className="flex gap-3">
              <img src={google} alt="" className="h-10 rounded-md cursor-pointer" />
              <img src={apple} alt="" className="h-10 rounded-md cursor-pointer" />
            </div>
          </div>
        </div>

        {/* LINKS */}
        {[
          { title: "Useful Links", items: ["Home", "Shop", "Categories", "Cart", "Contact"] },
          { title: "Customer Service", items: ["Help Center", "Returns", "Shipping", "FAQs"] },
          { title: "Company", items: ["About Us", "Careers", "Blog", "Press"] },
          { title: "Legal", items: ["Privacy Policy", "Terms of Service", "Refund Policy"] },
        ].map((col, idx) => (
          <div key={idx}>
            <h2 className="text-lg font-semibold text-white mb-6">
              {col.title}
            </h2>
            <ul className="space-y-3">
              {col.items.map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-purple-400 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* NEWSLETTER + PAYMENTS */}
      <div className="border-t border-white/10 px-5 lg:px-20 py-10 flex flex-col lg:flex-row gap-10 justify-between items-center">

        {/* PAYMENTS */}
        <div className="flex gap-3">
          {[pay1, pay2, pay3, pay4].map((pay, i) => (
            <img key={i} src={pay} alt="" className="w-[50px] rounded-md" />
          ))}
        </div>

        {/* NEWSLETTER */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          <h2 className="text-white font-semibold text-lg">
            Subscribe Newsletter
          </h2>
          <div className="flex w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-l-lg bg-white/10 text-white outline-none placeholder:text-gray-400 w-full"
            />
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-r-lg text-white font-semibold">
              SUBMIT
            </button>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-400 text-sm text-center lg:text-right">
          © 2024 Powered by <span className="text-purple-400">Debug Entity</span>
        </p>
      </div>

      {/* SCROLL TO TOP */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link to="hero" smooth offset={-100}>
          <div className="bg-purple-600 hover:bg-purple-700 transition p-3 rounded-full cursor-pointer shadow-lg">
            <FaArrowUp className="text-white w-6 h-6" />
          </div>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
