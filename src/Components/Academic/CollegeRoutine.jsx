import React from 'react'
import { Link } from 'react-router-dom'

const CollegeRoutine = () => {
  return (
    <div className='no_of_bed_main'>
      <div className="gallery_banner_div">
        <h3 className='gallery_page_headiing'>Home / Academics /<strong className="about_college_route" >College Routine</strong></h3>
      </div>
      <header>
        <div style={{ display: "flex" }}>
          <h2>College &nbsp;</h2>
          <h2>Routine</h2>
        </div>
      </header>
      <div className="publication_table_container">
        <table className='notice_page_table admission_page_table college_routine_table_main' style={{ textAlign: "center" }}>
          <tr>
            <th>Sn.</th>
            <th>Year</th>
            <th>Semester</th>
            <th></th>
          </tr>
          <tr>
            <td rowspan="2">1</td>
            <td rowspan="2">1st Year</td>
            <td>1st Semester</td>
            <Link> <td>View</td></Link>

          </tr>
          <tr>
            <td>2nd Semester</td>
            <Link> <td>View</td></Link>

          </tr>
          <tr>
            <td rowspan="2">2</td>
            <td rowspan="2">2nd Year</td>
            <td>3rd Semester</td>
            <Link> <td>View</td></Link>

          </tr>
          <tr>
            <td>4th Semester</td>
            <Link> <td>View</td></Link>

          </tr>
          <tr>
            <td rowspan="2">3</td>
            <td rowspan="2">3rd Year</td>
            <td>5th Semester</td>
            <Link> <td>View</td></Link>

          </tr>
          <tr>
            <td>6th Semester</td>
            <Link> <td>View</td></Link>

          </tr>
          <tr>
            <td rowspan="2">4</td>
            <td rowspan="2">4th Year</td>
            <td>7th Semester</td>
            <Link> <td>View</td></Link>

          </tr>
          <tr>
            <td>8th Semester</td>
            <Link> <td>View</td></Link>

          </tr>
          <tr>
            <td rowspan="2">5</td>
            <td rowspan="2">5th Year</td>
            <td>9th Semester</td>
            <Link> <td>View</td></Link>

          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>


        </table>
      </div>
    </div>
  )
}

export default CollegeRoutine