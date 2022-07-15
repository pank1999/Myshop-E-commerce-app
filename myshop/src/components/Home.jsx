import React from 'react'
import Announcement from './Announcement'
import Categary from './Categaries/Categary'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Newsletter from './Newsletter/Newsletter'
import Products from './Products/Products'
import Slider from './Slider/Slider'

export default function Home() {
  return (
     <div>
       <Announcement /> 
       <Navbar />
       <Slider/>
       <Categary/>
       <Products />
       <Newsletter />
       <Footer />
    </div> 
  )
}
