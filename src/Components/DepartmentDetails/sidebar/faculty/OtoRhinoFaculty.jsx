import React from 'react'

const OtoRhinoFaculty =({ content }) => {
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
                <td>Dr.Jitendra Kumar</td>
                <td>Senior Resident</td>
                <td>+91-7779817421</td>
                <td>jkrishna2202@gmail.com</td>

            </tr>
            <tr>
                <td>2.</td>
                <td>Dr.Santosh Kumar</td>
                <td>Senior Resident</td>
                <td>+91-9939810557</td>
                <td>santoshkukumb2k7@gmail.com</td>
            </tr>
            
          
          

        </tbody>
    </table>
        </div>
    )
}

export default OtoRhinoFaculty