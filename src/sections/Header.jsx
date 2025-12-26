import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaBars, FaXmark, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out" });
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Products", path: "products" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <>
      {/* 🔶 TOP BAR */}
      <div className="hidden lg:flex justify-between items-center px-16 py-2 bg-gradient-to-r from-themeyellow to-black text-white text-sm">
        <span className="flex items-center gap-2">
          <FaPhoneVolume size={12} /> +91 9876543210
        </span>
        <span className="flex items-center gap-2">
          <FaMapMarkerAlt size={12} /> Hyderabad, India
        </span>
        <span className="flex items-center gap-2">
          <MdEmail size={12} /> electronicshop@company.com
        </span>
      </div>

      {/* 🔶 MAIN NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 shadow-lg">
        <div className="flex justify-between items-center lg:px-16 px-6 py-4">

          {/* LOGO */}
          <h1
            data-aos="fade-right"
            className="text-3xl font-extrabold tracking-wide cursor-pointer"
          >
            <span className="text-themepurple animate-pulse">Electra</span>
            <span className="text-black">Shop</span>
          </h1>

          {/* MENU */}
          <ul className="hidden lg:flex gap-10">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                smooth={true}
                offset={-100}
                className="uppercase font-semibold cursor-pointer relative text-black
                after:absolute after:w-0 after:h-[2px] after:bg-themepurple
                after:left-0 after:-bottom-1 after:transition-all after:duration-300
                hover:text-themepurple hover:after:w-full"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* SEARCH BAR */}
          <div className="hidden lg:flex items-center bg-white rounded-full shadow px-4 py-2 w-[260px]">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="outline-none px-2 text-sm w-full"
            />
          </div>

          {/* ICONS */}
          <div className="hidden lg:flex gap-6 items-center">
            <Icon icon={<IoPerson />} label="Account" />
            <Icon icon={<FaHeart />} label="Wishlist" />
            <CartIcon />
          </div>

          {/* MOBILE MENU ICON */}
          <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaXmark className="text-3xl text-themepurple" />
            ) : (
              <FaBars className="text-3xl text-themepurple" />
            )}
          </div>
        </div>

        {/* 🔶 MOBILE MENU */}
        <div
          className={`fixed top-[72px] left-0 w-full h-screen bg-gradient-to-br
          from-themepurple to-black text-white transition-all duration-500
          ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}
        >
          <ul className="flex flex-col items-center gap-6 pt-12">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                smooth={true}
                offset={-100}
                onClick={() => setMenuOpen(false)}
                className="text-xl uppercase font-semibold hover:text-themeyellow"
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

/* 🔶 ICON COMPONENT */
const Icon = ({ icon, label }) => (
  <div className="group relative cursor-pointer text-black hover:text-themepurple transition">
    <div className="text-xl group-hover:scale-125 transition">{icon}</div>
    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
      {label}
    </span>
  </div>
);

/* 🔶 CART ICON */
const CartIcon = () => (
  <div className="relative cursor-pointer text-black hover:text-themepurple transition">
    <FaShoppingCart className="text-xl hover:scale-125 transition" />
    <span className="absolute -top-3 -right-3 bg-themepurple text-white text-xs px-2 py-[2px] rounded-full animate-bounce">
      2
    </span>
  </div>
);

export default Header;
