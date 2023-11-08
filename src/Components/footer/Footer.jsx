import React from 'react'
import './Footer.css'
import Map from '../../assets/Map.png'
import Phone from '../../assets/phone.png'
import Mail from '../../assets/mail.png'
import Logo from '../../assets/logo-1.png'
import Fb from '../../assets/Facebook-logo.png'
import Insta from '../../assets/insta.png'
import InputBtn from '../../assets/inputBtn.png'
import { Link } from 'react-router-dom'
import CopyRight from '../copyright/CopyRight'
import { useEffect } from 'react'
import { useState } from 'react'
const Footer = () => {
    const [ data , setDate]= useState()
    const [ totalvisiter , setTotalvisiter]= useState(51)
    useEffect(() => {
        const date = new Date();

        let day = date.getDate() - 2;
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;
        setDate(currentDate)
        console.log(navigator);
        setTotalvisiter(totalvisiter+1)
       
    },[])
    return (

        <div className='footer-section'>
            <div className="container">
                <div className="footer_top">
                    <div className="footer_top_first footer-section-item">
                        <div className="footer_top_firsrt_heading">
                            <img src={Map} alt="map_img" className='footer_top_img' />
                            <h4> Find Us</h4>
                        </div>

                        <p className='footer_paragraph'> JanNayak Karpoori Thakur Medical College & Hospital, Madhepura</p>
                    </div>
                    <div className="footer_top_second footer-section-item">
                        <div className="footer_top_firsrt_heading">
                            <img src={Phone} alt="phone_img" className='footer_top_img' />
                            <h4>Call Us</h4>
                        </div>
                        <p className='footer_paragraph'>Office Contact No:-<br /> +91- 8102925093</p>
                    </div>
                    <div className="footer_top_third footer-section-item">
                        <div className="footer_top_firsrt_heading">
                            <img src={Mail} alt="mail_img" className='footer_top_img' />

                            <h4>Mail Us</h4>
                        </div>
                        <p className='footer_paragraph'>principalsoffice@jnktmchmadhepura.org
                            jnktmchmadhepura@gmail.com</p>
                    </div>

                </div>
                <hr className='footer_hr' />

                <div className="footer_bottom">
                    <div className="footer_bottom_first footer-section-item">
                        <img src={Logo} alt="footer_logo" className='footer_logo' />
                        <p className='footer_paragraph'>
                            JNKTMCH dedicated to provide the best quality of education & Hopitals services that meet the needs and expectations of our students and teachers.
                        </p>
                        <h4>Follow us</h4>
                        <div className="social_icon">
                            <img src={Fb} alt="fb_icon" className='fb_icon social_icon_img' />
                            <img src={Insta} alt="insta" className='insta_icon social_icon_img' />
                        </div>
                    </div>
                    <div className="footer_bottom_second footer-section-item">
                        <div>
                            <h4>UseFul Links</h4>
                            <hr className='text_underline_useful_link' />
                        </div>
                        <div className="footer_bottom_second_router">
                            <ul className='footer_bottom_second_router_ul footer_paragraph'>
                                <li>  <Link to='/'>Home</Link></li>
                                <li><Link to={'/about-college'}>About Us</Link></li>
                                <li><Link to={'./career'}>Career</Link></li>
                                <li><Link to={'/circulers'}>Circulers</Link></li>
                                <li><Link to={'/citizen-charter'}>Citizen Charter</Link></li>
                                <li><Link to={'./gallery'}>Gallery</Link></li>


                            </ul>
                            <ul className='footer_bottom_second_router_ul footer_paragraph'>
                                <li><Link to={'/library'}>Library</Link></li>
                                <li><Link to={'./notice'}>Notice</Link></li>
                                <li><Link to={'/news-event'}>News & Events</Link></li>
                                <li><Link to={'/publications'}>Publication</Link></li>
                                <li><Link to={'/rti'}>RTI</Link></li>
                                <li> <Link to={'./tender'}>Tender</Link></li>

                                {/* <li><Link to={'./contact'}>Contact us</Link></li> */}
                            </ul>
                        </div>


                    </div>

                    <div className="footer_bottom_third footer-section-item">
                        <div className='feedback_div'>
                            <h4>Feedback</h4>
                            <hr className='text_underline' />
                        </div>

                        <p className='footer_paragraph'>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        {/* <p className='footer_paragraph'>.</p> */}
                        <form className='footer_input_form'>
                            <input type="text" placeholder='Email Address' className='footer_input_box' />
                            <img src={InputBtn} className='footer_input_btn' />
                        </form>
                        <div>
                            <p className='footer_visiter_code'>Total Visiter :- {totalvisiter} </p>
                            <p className='footer_visiter_code'>Last Update :- {data} </p>
                        </div>
                        <p className='footer_paragraph copyright_link_footer'>Developed & Maintained by <Link to={'https://www.alternativesolution.in/'} target="_blank">AGSPL</Link></p>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Footer