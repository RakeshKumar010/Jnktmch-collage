import React from 'react'
import Carousel from '../carousel/Carousel'
import Department from './homedepartment/HomeDepartment'
import Features from '../features/Features'
import Gallery from './homegallery/HomeGallery'
import './Home.css'
import PrincipalDesk from './PrincipalDesk'
import Superintendent from './Superintendent'
import TenderNoti from '../carousel/TenderNoti'
const Home = () => {
  return (
    <>
      <Carousel />
      <TenderNoti />
      <div className="principal_superintendent">
        <PrincipalDesk />
        <Superintendent />
      </div>
      <Department />
      <Gallery />
      <Features />
    </>
  )
}

export default Home