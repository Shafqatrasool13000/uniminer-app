import React from 'react'
import Antiminer from '../Antiminer/Antiminer'
import Footer from '../Footer/Footer'
import Navbars from '../Navbar/Navbar'
import PlanDetails from '../PlanDetails/PlanDetails'
import RevenueRate from '../RevenueRate/RevenueRate'

const CloudMining = () => {
  return (
    <>
        <Navbars/>
        <Antiminer/>
       <PlanDetails/>
      <RevenueRate/>
        <Footer/>
    </>
  )
}

export default CloudMining