import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import NavBtn from '../../assets/nav-icon-17.png'

const Nav = () => {
const[showHide , setShowHide]=useState(true)
  const [informationDownNav, setInformationDownNav] = useState(false)
  const [facilityDownNav, setFacilityDownNav] = useState(false)
  const [hospitalDownNav, setHospitalDownNav] = useState(false)
  const [committeesDownNav, setCommitteesDownNav] = useState(false)
  const [academicDownNav, setAcademicDownNav] = useState(false)
  const [aboutDownNav, setAboutDownNav] = useState(false)
  const hideFun = () => {
    setAboutDownNav(false)
    setInformationDownNav(false)
    setAcademicDownNav(false)
    setHospitalDownNav(false)
    setCommitteesDownNav(false)
    setFacilityDownNav(false)
    if(!showHide){
      document.querySelector('.nav_main_ul').style.display="none"

    }
    // setStafflistDownNav(false)
  }
  return (
    <div className='nav_main_container'>
      <div className="nav_hide_unhide_btn_div">
        <img src={NavBtn} alt="nav_btn" className='nab_btn_show_hide' onClick={()=>{

          if(showHide){

            document.querySelector('.nav_main_ul').style.display="flex"
          }else{
            document.querySelector('.nav_main_ul').style.display="none"
      
          }
          setShowHide(!showHide)
        }}/>
      </div>
      <ul className='nav_main_ul'>
        <li onClick={hideFun}><Link to='/'>Home</Link></li>
        <div className='hospital_route_div'>
          <li onClick={() => {
            setAboutDownNav(!aboutDownNav)
            setInformationDownNav(false)
            setAcademicDownNav(false)
            setHospitalDownNav(false)
            setCommitteesDownNav(false)
            setFacilityDownNav(false)
            // setStafflistDownNav(false)
          }} className="nav_link">About<span className='down_arrow'></span></li>
          {aboutDownNav ? <ul className="bown_div">
            <li onClick={hideFun}><Link to={'/about-college'}>About College</Link></li>
            <li onClick={hideFun}><Link to={'/principal-desk'}>Principal Desk</Link></li>
            <li onClick={hideFun}><Link to={'/administrative-block'}>Administrative Block</Link></li>
            <li onClick={hideFun}><Link to={'./principal'}> Principal Office Staff List</Link></li>

          </ul> : ''}
        </div>

        <div className='hospital_route_div'>
          <li onClick={() => {
            setAcademicDownNav(!academicDownNav)
            setAboutDownNav(false)
            setInformationDownNav(false)
            setHospitalDownNav(false)
            setCommitteesDownNav(false)
            setFacilityDownNav(false)
            // setStafflistDownNav(false)
          }} className="nav_link">Academic <span className='down_arrow'></span></li>
          {academicDownNav ? <ul className="bown_div">
            <li onClick={hideFun}><Link to={'./admission'}>Admission</Link></li>
            <li onClick={hideFun}><Link to={'./fee-structure'}>Fee structure</Link></li>
            <li onClick={hideFun}><Link to={'./college-routine'}>College Routine</Link></li>
            <li onClick={hideFun}><Link to={'./syllabus'}>Syllabus</Link></li>
            <li onClick={hideFun}><Link to={'./exmination-result'}>Exmination & Result</Link></li>
            <li onClick={hideFun}><Link to={'./publications'}>Publications</Link></li>
          </ul> : ''}
        </div>
        <li onClick={hideFun}><Link to={'./department'}>Department</Link></li>
        <div className='hospital_route_div'>
          <li onClick={() => {
            setFacilityDownNav(!facilityDownNav)
            setInformationDownNav(false)
            setHospitalDownNav(false)
            setCommitteesDownNav(false)
            setAcademicDownNav(false)
            setAboutDownNav(false)
            // setStafflistDownNav(false)
          }} className="nav_link">Facility <span className='down_arrow'></span></li>
          {facilityDownNav ? <ul className="bown_div">
            <li onClick={hideFun}><Link to={'./library'}>Library</Link></li>
            <li onClick={hideFun}><Link to={'./hostel'}>Hostel</Link></li>
            <li onClick={hideFun}><Link to={'./residence'}>Residence</Link></li>
            <li onClick={hideFun}><Link to={'./canteen'}>Canteen</Link></li>
            <li onClick={hideFun}><Link to={'./theaters'}>Lecture Theaters</Link></li>
            <li onClick={hideFun}><Link to={'./laboratory'}>Laboratory</Link></li>
            <li onClick={hideFun}><Link to={'./gym'}>Gym</Link></li>
          </ul> : ''}
        </div>
        <div className='hospital_route_div'>
          <li onClick={() => {
            setHospitalDownNav(!hospitalDownNav)
            setInformationDownNav(false)
            setFacilityDownNav(false)
            setCommitteesDownNav(false)
            setAcademicDownNav(false)
            setAboutDownNav(false)
            // setStafflistDownNav(false)
          }} className="nav_link">Hospital <span className='down_arrow'></span></li>
          {hospitalDownNav ? <ul className="bown_div">
            <li onClick={hideFun}><Link to={'./opd'}>O.P.D</Link></li>
            <li onClick={hideFun}><Link to={'./campus'}>Campus</Link></li>
            <li onClick={hideFun}><Link to={'./no-of-bed'}>No. of Beds</Link></li>
            <li onClick={hideFun}><Link to={'./suptd-list'}>Suptd. Office Staff List</Link></li>
            <li onClick={hideFun}><Link to={'./grade'}>Grade A Nurse List</Link></li>
          </ul> : ''}
        </div>
        <div className='hospital_route_div'>
          <li onClick={() => {
            setInformationDownNav(!informationDownNav)
            setFacilityDownNav(false)
            setHospitalDownNav(false)
            setCommitteesDownNav(false)
            setAcademicDownNav(false)
            setAboutDownNav(false)
            // setStafflistDownNav(false)

          }} className="nav_link">Information <span className='down_arrow'></span></li>
          {informationDownNav ? <ul className="bown_div">
            <li onClick={hideFun}><Link to={'./gallery'}> Gallery</Link></li>
            <li onClick={hideFun}><Link to={'./notice'}>Notice</Link></li>
            <li onClick={hideFun}><Link to={'./tender'}>Tender</Link></li>
            <li onClick={hideFun}><Link to={'./news-event'}>News & Event</Link></li>
            <li onClick={hideFun}><Link to={'./circulers'}>Circulers</Link></li>
          </ul> : ''}
        </div>
        {/* <div className='hospital_route_div'>
        <li onClick={() => {
          setInformationDownNav(false)
          setFacilityDownNav(false)
          setHospitalDownNav(false)
          setCommitteesDownNav(false)
          setAcademicDownNav(false)
          setAboutDownNav(false)
          setStafflistDownNav(!stafflistDownNav)

        }} className="nav_link">Staff List<span className='down_arrow'></span></li>
        {stafflistDownNav ? <ul className="bown_div">
        

        </ul> : ''}
      </div> */}
        <div className='hospital_route_div'>
          <li onClick={() => {
            setCommitteesDownNav(!committeesDownNav)
            setInformationDownNav(false)
            setFacilityDownNav(false)
            setHospitalDownNav(false)
            setAcademicDownNav(false)
            setAboutDownNav(false)
            // setStafflistDownNav(false)

          }} className="nav_link">Committees<span className='down_arrow'></span></li>
          {committeesDownNav ? <ul className="bown_div">
            <li onClick={hideFun}><Link to={'./anti-ragging'}> Anti Ragging</Link></li>
            <li onClick={hideFun}><Link to={'./college-council'}> College Council</Link></li>
            <li onClick={hideFun}><Link to={'./ethics'}>Institutional Ethical</Link></li>
            <li onClick={hideFun}><Link to={'./gender-harassment'}> Gender Harassment</Link></li>
            <li onClick={hideFun}><Link to={'./pharma-vigilance'}> Pharma Vigilance</Link></li>
            <li onClick={hideFun}><Link to={'./medical-education'}> Medical Education</Link></li>
            <li onClick={hideFun}><Link to={'./curriculum'}> Curriculum</Link></li>
            <li onClick={hideFun}><Link to={'./central-library'}> Central Library</Link></li>
            <li onClick={hideFun}><Link to={'./biomedical'}>Biomedical</Link></li>
          </ul> : ''}
        </div>
        <li onClick={hideFun}><Link to={'./career'}>Career</Link></li>
        <li onClick={hideFun}><Link to={'./contact'}>Contact us</Link></li>
      </ul>
    </div>
  )
}

export default Nav