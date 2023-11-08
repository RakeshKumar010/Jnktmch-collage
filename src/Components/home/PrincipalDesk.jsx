import React from 'react'
import PrincipalImg from '../../assets/img_3.jpeg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const PrincipalDesk = () => {
    const [showImg, setShowImg] = useState(true)
    return (
        <>
            {showImg ? <div className='principaldesk_main'>
                <div className="principaldesk_text">
                    <h2 className='desk_header'>Principal Desk</h2>
                    <p>Jannayak Karpoori Thakur Medical College and Hospital, Madhepura, (also
                        referred as J.N.K.T.M.C.H.) established in 2020, is a government medical
                        college and hospital located at Madhepura, Bihar, India. This college offers the
                        Bachelor of Medicine and Surgery (MBBS) courses and has an annual intake capacity
                        of 100. This college is affiliated with the Aryabhatta Knowledge University and
                        recognized by the Commission. We are providing the world class facilities in the
                        education with highly qualified teaching faculty members, for practical lab
                        equipment’s, library having lots of journals & publications books. There is also a
                        facility of E-library where students can read all the books in the online mode. For the
                        student’s we are also providing the Boy’s & girl’s Hostel with best accommodation in
                        the Natural environment campus along with canteen.
                        So once again, warm welcome to the students in the college campus to make the
                        culture of excellence, compassion, and innovation in medical education & healthcare.

                    </p>
                    <Link to={'./principal-desk'} className='principaldesk_read_more_btn'>Read More</Link>
                </div>
                <div className='principal_img_div'>
                    <img src={PrincipalImg} alt="principal_img" className='principal_img' onClick={() => { setShowImg(!showImg) }} />
                    <p className='principal_img_para'>Dr. (Prof.) Bhupendra Prasad (PRINCIPAL)</p>
                </div>
            </div> : <><div className='principaldesk_main'>
                <div className="principaldesk_text">
                    <h2 className='desk_header'>Principal Desk</h2>
                    <p>Jannayak Karpoori Thakur Medical College and Hospital, Madhepura, (also
                        referred as J.N.K.T.M.C.H.) established in 2020, is a government medical
                        college and hospital located at Madhepura, Bihar, India. This college offers the
                        Bachelor of Medicine and Surgery (MBBS) courses and has an annual intake capacity
                        of 100. This college is affiliated with the Aryabhatta Knowledge University and
                        recognized by the Commission. We are providing the world class facilities in the
                        education with highly qualified teaching faculty members, for practical lab
                        equipment’s, library having lots of journals & publications books. There is also a
                        facility of E-library where students can read all the books in the online mode. For the
                        student’s we are also providing the Boy’s & girl’s Hostel with best accommodation in
                        the Natural environment campus along with canteen.
                        So once again, warm welcome to the students in the college campus to make the
                        culture of excellence, compassion, and innovation in medical education & healthcare.

                    </p>
                    <Link to={'./principal-desk'} className='principaldesk_read_more_btn'>Read More</Link>
                </div>
                <div className='principal_img_div'>
                    <img src={PrincipalImg} alt="principal_img" className='principal_img'  />
                    <p className='principal_img_para'>Dr. (Prof.) Bhupendra Prasad (PRINCIPAL)</p>
                </div>
            </div>
                <div className='show_principal_img_main' >
                    <img src={PrincipalImg} alt="principal_img" className='show_principal_img' />
                    <p className='principal_img_hide_btn' onClick={() => { setShowImg(!showImg) }}>X</p>

                </div>
            </>}
        </>
    )
}

export default PrincipalDesk