import React from 'react'
import { BelowNav } from '../BelowNav/BelowNav'
import Footer from '../Footer/Footer'
import Navbars from '../Navbar/Navbar'
import PaymentCards from '../PaymentCards/PaymentCards'

const Homepage = () => {
  return (
    <>
     <Navbars />
      <BelowNav />
      <PaymentCards/>
      <Footer/>  
    </>
  )
}

export default Homepage