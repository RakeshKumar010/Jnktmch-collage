import { Link } from 'react-router-dom'
import DepartmentBanner from '../../assets/Department_Banner.jpg'
import ANAESTHESIOLOGY_DEPARTMENT from '../../assets/img_10.jpg'
import ANATOMY_DEPARTMENT from '../../assets/img_11.jpg'
import BIO_CHEMISTRY_DEPARTMENT from '../../assets/img_12.png'
import DENTISTRY_DEPARTMENT from '../../assets/img_13.jpg'
import FORENSIC_DEPARTMENT from '../../assets/img_14.png'
import EMERGENCY_DEPARTMENT from '../../assets/img_15.jpg'
import GENERAL_MEDICINE_DEPARTMENT from '../../assets/Department/General-medicine_banner-.png'
import GENERAL_SURGERY_DEPARTMENT from '../../assets/Department/General-Surgery_banner-1536x421 (1).png'
import MICRO_BIOLOGY_DEPARTMENT from '../../assets/Department/51_header_51_header_Microbiology.jpg'
import OPHTHALMOLOGY_DEPARTMENT  from '../../assets/Department/ophthalmology.jpg'
import ORTHOPEDICS_DEPARTMENT  from '../../assets/Department/Orthopaedic.jpg'
import OTO_RHINO_LARYNGOLOGY_DEPARTMENT  from '../../assets/Department/rhino-oto-centre-logo-2x.png'
import PEDIATRICS_DEPARTMENT  from '../../assets/Department/paediatrics-mob-banner.jpg'
import PATHOLOGY_DEPARTMENT  from '../../assets/Department/OIP.jfif'
import PHARMACOLOGY_DEPARTMENT  from '../../assets/Department/pharmacology-banner-with-pill_145342-104.webp'
import PSYCHIATRY_DEPARTMENT  from '../../assets/Department/Psychiatry-1024x280.jpg'
import PHYSIOLOGY_DEPARTMENT  from '../../assets/Department/physiology-as-a-medical-specialty-field-or-department-clip-art_csp38099628.webp'
import RADIOLOGY_DEPARTMENT  from '../../assets/Department/OIP (2).jfif'
import Community_Medicine  from '../../assets/Department/psm community medicine.jpg'
import PMR  from '../../assets/Department/PMR.png'
import GYANE_DEPARTMENT  from '../../assets/Department/R.png'
import DERMATOLOGY  from '../../assets/DERMATOLOGY.jpg'
import RESPIRATORY_TUBERCULOSIS_DEPARTMENT  from '../../assets/Department/psm community medicine 2.jfif'

import './DepartmentPage.css'
import { useEffect } from 'react'
const DepartmentPage = () => {
   
    return (
        <div className='department_page_main'>
            <div className='department_banner_div'>
                <img src={DepartmentBanner} alt="department_banner" className='department_banner' />
                <h3 className='department_page_headiing'>Home / <strong style={{color:"black"}}>Department</strong></h3>

            </div>
            <div className="department_page_body">
                <h2 className='department_page_body_heading'>List of Department</h2>
                <p style={{
                    float: "right",
                    fontSize:"15px",
                    marginRight:"2vw",
                    fontWeight: "bold"
                }}>Total number of departments :-  23 (Twenty Three)</p>
                <div className="department_page_img_container">
                    <div className="department_page_img_div">
                        <img src={ANAESTHESIOLOGY_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">
                            <p className='department_page_img_heading'>ANAESTHESIOLOGY DEPARTMENT</p>
                            <Link to={'./anaesthesiology/home'}>Details</Link>
                        </div>
                    </div>
                    <div className="department_page_img_div">
                        <img src={ANATOMY_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">


                            <p className='department_page_img_heading'>ANATOMY DEPARTMENT</p>
                            <Link to={'./anatomy/home'}>Details</Link>
                        </div>
                    </div>


                    <div className="department_page_img_div">
                        <img src={BIO_CHEMISTRY_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>BIO_CHEMISTRY DEPARTMENT</p>
                            <Link to={'./biochemistry/home'}>Details</Link>
                        </div>
                    </div>


                    <div className="department_page_img_div">
                        <img src={DENTISTRY_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">
                            <p className='department_page_img_heading'>DENTISTRY DEPARTMENT</p>
                            <Link to={'./dentistry/home'}>Details</Link>
                        </div>
                    </div>
                    <div className="department_page_img_div">
                        <img src={DERMATOLOGY} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">
                            <p className='department_page_img_heading'>.DERMATOLOGY & VENEREOLOGY DEPARTMENT (SKIN)</p>
                            <Link to={'./dermatology/home'}>Details</Link>
                        </div>
                    </div>


                    <div className="department_page_img_div">
                        <img src={EMERGENCY_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>EMERGENCY DEPARTMENT</p>
                            <Link to={'./emergency/home'}>Details</Link>
                        </div>
                    </div>
                    <div className="department_page_img_div">
                        <img src={FORENSIC_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>FORENSIC DEPARTMENT</p>
                            <Link to={'./forensic/home'}>Details</Link>
                        </div>
                    </div>

                    <div className="department_page_img_div">
                        <img src={GENERAL_MEDICINE_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>GENERAL MEDICINE DEPARTMENT</p>
                            <Link to={'./generalmedicine/home'}>Details</Link>
                        </div>
                    </div>
                    <div className="department_page_img_div">
                        <img src={GENERAL_SURGERY_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>GENERAL SURGERY DEPARTMENT</p>
                            <Link to={'./generalsurgery/home'}>Details</Link>
                        </div>
                    </div>
                    <div className="department_page_img_div">
                        <img src={MICRO_BIOLOGY_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">
                            <p className='department_page_img_heading'>MICRO BIOLOGY DEPARTMENT</p>
                            <Link to={'./microbiology/home'}>Details</Link>
                        </div>
                    </div>
                    <div className="department_page_img_div">
                        <img src={OPHTHALMOLOGY_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">


                            <p className='department_page_img_heading'>OPHTHALMOLOGY DEPARTMENT</p>
                            <Link to={'./ophthalmology/home'}>Details</Link>
                        </div>
                    </div>


                    <div className="department_page_img_div">
                        <img src={ORTHOPEDICS_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>ORTHOPEDICS DEPARTMENT</p>
                            <Link to={'./orthopedics/home'}>Details</Link>
                        </div>
                    </div>


                    <div className="department_page_img_div">
                        <img src={OTO_RHINO_LARYNGOLOGY_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">
                            <p className='department_page_img_heading'>OTO RHINO LARYNGOLOGY (ENT) DEPARTMENT</p>
                            <Link to={'./otorhino/home'}>Details</Link>
                        </div>
                    </div>
                    <div className="department_page_img_div">
                        <img src={GYANE_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">
                            <p className='department_page_img_heading'>OBSY. & GYANE. DEPARTMENT</p>
                            <Link to={'./obsy/home'}>Details</Link>
                        </div>
                    </div>



                    <div className="department_page_img_div">
                        <img src={PEDIATRICS_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>PEDIATRICS DEPARTMENT</p>
                            <Link to={'./pediatrics/home'}>Details</Link>
                        </div>
                    </div>
                    <div className="department_page_img_div">
                        <img src={PMR} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>Physical Medicine & Rehabitation DEPARTMENT (P.M.R)</p>
                            <Link to={'./pmr/home'}>Details</Link>
                        </div>
                    </div>
                    <div className="department_page_img_div">
                        <img src={PATHOLOGY_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>PATHOLOGY DEPARTMENT</p>
                            <Link to={'./pathology/home'}>Details</Link>
                        </div>
                    </div>

                    <div className="department_page_img_div">
                        <img src={PHARMACOLOGY_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>PHARMACOLOGY DEPARTMENT</p>
                            <Link to={'./pharmacology/home'}>Details</Link>
                        </div>
                    </div>
                    <div className="department_page_img_div">
                        <img src={PSYCHIATRY_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>PSYCHIATRY DEPARTMENT</p>
                            <Link to={'./psychiatry/home'}>Details</Link>
                        </div>
                    </div>
                    <div className="department_page_img_div">
                        <img src={PHYSIOLOGY_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>PHYSIOLOGY DEPARTMENT</p>
                            <Link to={'./physiology/home'}>Details</Link>
                        </div>
                    </div>
                    <div className="department_page_img_div">
                        <img src={RADIOLOGY_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>RADIOLOGY DEPARTMENT</p>
                            <Link to={'./radiology/home'}>Details</Link>
                        </div>
                    </div>

                    <div className="department_page_img_div">
                        <img src={Community_Medicine} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>P.S.M ( Community Medicine )</p>
                            <Link to={'./psm/home'}>Details</Link>
                        </div>
                    </div>
                    <div className="department_page_img_div">
                        <img src={RESPIRATORY_TUBERCULOSIS_DEPARTMENT} alt="department_page_img" className='department_page_img' />
                        <div className="department_page_btn_heading">

                            <p className='department_page_img_heading'>RESPIRATORY & TUBERCULOSIS (TB) DEPARTMENT</p>
                            <Link to={'./respiratory/home'}>Details</Link>
                        </div>
                    </div>
                   

                    



                </div>
            </div>
        </div>
    )
}

export default DepartmentPage