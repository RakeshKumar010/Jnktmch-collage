
import DepartmentBanner from '../../assets/Department_Banner.jpg'
import opdImg1 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.55 PM.jpeg'
import opdImg2 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.54 PM.jpeg'
import opdImg3 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.54 PM (1).jpeg'
import opdImg4 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.53 PM.jpeg'
import opdImg5 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.53 PM.jpeg'
import opdImg6 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.53 PM (1).jpeg'
import opdImg7 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.52 PM.jpeg'
import opdImg8 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.52 PM (1).jpeg'
import opdImg10 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.46 PM.jpeg'


const OPD = () => {
  return (
    <div className='opd_main'>
      <div className='department_banner_div'>
        <img src={DepartmentBanner} alt="department_banner" className='department_banner' />
        <h5 className='department_page_headiing' >Home / Hospital / <strong >O.P.D</strong></h5>
      </div>

      <h5 className='staff_list_heading opd_heading'>Outdoor Patient Department</h5>
      <div className='opd_body'>
        <div className='opd_img_container'>
          <img src={opdImg1} alt="opd_img" className='opd_img' />
          <img src={opdImg2} alt="opd_img" className='opd_img' />
          <img src={opdImg3} alt="opd_img" className='opd_img' />
          <img src={opdImg4} alt="opd_img" className='opd_img' />
          <img src={opdImg5} alt="opd_img" className='opd_img' />
          <img src={opdImg6} alt="opd_img" className='opd_img' />
          <img src={opdImg7} alt="opd_img" className='opd_img' />
          <img src={opdImg8} alt="opd_img" className='opd_img' />
          <img src={opdImg10} alt="opd_img" className='opd_img' />
        </div>

        <div className='opd_about_services'>
          <div>
            <h5>SUMMER SEASON TIMINGS </h5> <br />
            <div style={{ textAlign: "center" }}>
              <h6>( Morning Shift)</h6> 
              <p><strong>Counter Registration Time -  </strong>08 AM to 12.30 PM</p>
              <p><strong>Doctor’s Visit Time </strong>09.00 AM  to 01.00 PM</p>
            </div> <br />

            <div style={{ textAlign: "center" }}>
              <h6>(Evening Shift)</h6> 
              <p><strong>Counter Registration Time -</strong>08 AM to 12.30 PM</p>
              <p><strong>Doctor’s Visit Time </strong>3.30 PM To 5.00 PM</p>
            </div>
          </div>
          <div className='hrDiv' ></div>
          <div>
            <h5>WINTER  SEASON TIMINGS</h5> <br />
            <div style={{ textAlign: "center" }}>
              <h6>(Morning Shift)</h6> 
              <p><strong>Counter Registration Time -</strong>08 AM to 12.30 PM</p>
              <p><strong>Doctor’s Visit Time </strong>09.00 AM to 01.00 PM</p>
            </div> <br />

            <div style={{ textAlign: "center" }}>
              <h6>(Evening Shift)</h6> 
              <p><strong>Counter Registration Time -</strong>08 AM to 12.30 PM</p>
              <p><strong>Doctor’s Visit Time </strong>3.30 PM To 5.00 PM</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default OPD