import React from 'react'
import Logo from '../../assets/logo-1.png'
import BiharGovLog from '../../assets/bihar_govt_logo.png'
import './Header.css'
import { Link } from 'react-router-dom'
const header = () => {
  return (
    <div className='header_main'>
      <Link to={'./'} className="header_main_link">
        <img src={Logo} alt="logo" className='header_logo' />
      </Link>
      <div>
        <h4 className='header_heading_iv'>JANNAYAK KARPOORI THAKUR MEDICAL COLLEGE & HOSPITAL, MADHEPURA </h4>
        <h5 className='header_heading_iii'> जननायक कर्पूरी ठाकुर चिकित्सा महाविद्यालय एवं अस्पताल, मधेपुरा &nbsp;(बिहार)</h5>
      </div>

      <img src={BiharGovLog} alt="BiharGovLog" className='bihar_gov_logo' />
    </div>
  )
}

export default header