import React from 'react'

const PsychiatryFaculty =  ({ content }) => {
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
                <td>Dr.Satish Kumar Sinha</td>
                <td>Associate Professor</td>
                <td>+91-9431046172</td>
                <td>satishshishir@gmail.com</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Dr. Ram Pravesh Singh</td>
                <td>Senior Resident</td>
                <td>+91-</td>
                <td></td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Dr.Kumar Satyadarshi</td>
                <td>Senior Resident</td>
                <td>+91-</td>
                <td></td>
            </tr>
            
           
           
           
           
          
          

        </tbody>
    </table>
    
        </div>
    )
}

export default PsychiatryFaculty