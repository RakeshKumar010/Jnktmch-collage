import React from 'react'
import { Link } from 'react-router-dom'

const ExminationResult = () => {
  return (
    <div className='no_of_bed_main'>
    <div className="gallery_banner_div">
        <h3 className='gallery_page_headiing'>Home / Academics /<strong className="about_college_route" > Exmination & Result</strong></h3>
    </div>
    <header>
        <div style={{display:"flex"}}>
        <h2>Exmination &&nbsp;</h2>
        <h2>Result</h2>
        </div>
    </header>
    <div className="exam_result_body">
      <div className='exam_result_text'>
      <p>Please Referred To the University Website for examination Information</p> 
      <Link to='http://akubihar.ac.in/'>University Website</Link>
      </div>
      <div className='exam_hr'></div>
      <div className='exam_result_text'>
      <p>Please Referred To the University Website for result Information</p>
      <Link to='http://akubihar.ac.in/'>University Website</Link>
      </div>
    </div>
   
        
</div>
  )
}

export default ExminationResult