import React from 'react'

const AnatomyFacultyTable = ({content}) => {
  return (
         <div className="siderfaculty_right_body">
            <h3 className='siderfaculty_right_heading'>{content.heading}</h3>
            <p style={{fontSize:"14px"}}>This are our faculty Members in the {content.paragraph}</p>
            
            <table>
        <thead>
            <tr>
                <th>S.N</th>
                <th>Doctor's Name</th>
                <th>Designation</th>
                <th>Mobile No.</th>
                <th>E-Mail ID</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1.</td>
                <td>डॉ भूपेंद्र प्रसाद</td>
                <td>प्राचार्य</td>
                <td>+91-</td>
                <td></td>
            </tr>
            <tr>
                <td>2.</td>
                <td>डॉ प्रेमजीत कुमार मधुकर</td>
                <td>सह प्राध्यापक</td>
                <td>+91-9973807303</td>
                <td>drpremjeet@gmail.com</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Dr. Jay Prakash Bharti</td>
                <td>Assistant Professor</td>
                <td>+91-9431411379</td>
                <td>drjpbharti@gmail.com</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Dr. Sony Kumari</td>
                <td>Tutor</td>
                <td>+91-</td>
                <td></td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Dr. Vijay Shekhar Kumar</td>
                <td>Tutort</td>
                <td>+91-</td>
                <td></td>
            </tr>
            <tr>
                <td>6.</td>
                <td>Dr. Manish Kumar</td>
                <td>Tutor</td>
                <td></td>
                <td></td>
            </tr>
          

        </tbody>
    </table>
        </div>
  )
}

export default AnatomyFacultyTable