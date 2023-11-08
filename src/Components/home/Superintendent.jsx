import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SuperintendentImg from '../../assets/img_4.jpeg'
const Superintendent = () => {
    const [superintendentImg, setSuperintendentImg] = useState(false)

    return (<>
        <div className='superintendent_main'>
            <div className='superintendent_img_div'>
                <img src={SuperintendentImg} alt="superintendent_img" className='superintendent_img' onClick={()=>{
                        document.querySelector('.show_superintendent_img_main').style.display="flex"
                    }} />
                <p className='superintendent_img_para'>Dr. (Prof.) Malti Kumari (SUPERINTENDENT)</p>

            </div>
            <div className="superintendent_text">
                <h2 className='desk_header'>Superintendent Message</h2>
                <p className='superintendent_para'>JanNayak Karpoori Thakur Medical College & Hospital, Madhepura are the
                    government medical Hospital with world class facilities. A Hospitals has its own
                    Emergency ward along with 500 bed with latest equipment’s in O.T, experienced
                    doctor’s & Nursing staff. Hospitals main building is divided into 05 blocks. There is
                    an 23 departments with actively serving the patients. we have advanced lab testing
                    , CT Scan-ray Room, ECG ,EEG, Operation Theater, OPD Section, Ambulance facility,
                    etc. There is an Outdoor Patients wards in the 3
                    rd blocks with registration counter.
                    Hospital’s having its own Oxygen generation plants, Private electrifications, security
                    guard’s, Canteen, Jeevika counter for “may Help You” Counter.

                </p>
                <Link to={'./superintendent-desk'} className='superintendent_read_more_btn'>Read More</Link>
            </div>
        </div>
        <div className='show_superintendent_img_main' >
                    <img src={SuperintendentImg} alt="principal_img" className='show_principal_img'  />
                    <p className='principal_img_hide_btn' onClick={() => { 
                        document.querySelector('.show_superintendent_img_main').style.display="none"
                     }}>X</p>

                </div>
    </>
    )
}

export default Superintendent