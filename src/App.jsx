import React from 'react'
import Header from './sections/Header'
import Category from './sections/Category'
import Hero from './sections/Hero'
import Types from './sections/Types'
import Services from './sections/Services'
import Productsgrid from './sections/Productsgrid'
import Banner from './sections/Banner'
import Reviews from './sections/Reviews'
import Insta from './sections/Insta'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <Header />

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* CATEGORY */}
      <section id="category">
        <Category />
      </section>

      {/* TYPES */}
      <section id="types">
        <Types />
      </section>

      {/* SERVICES */}
      <section id="about">
        <Services />
      </section>

      {/* PRODUCTS */}
      <section id="products">
        <Productsgrid />
      </section>

      {/* BANNER */}
      <section>
        <Banner />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <Reviews />
      </section>

      {/* INSTAGRAM */}
      <section>
        <Insta />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Footer />
      </section>

    </div>
  )
}
