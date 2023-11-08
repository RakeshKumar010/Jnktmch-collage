import React from 'react'

const EmergencyFaculty = ({ content }) => {
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
                <td>Dr.Md.Tarik</td>
                <td>Senior Resident</td>
                <td>+91-</td>
                <td></td>
            </tr>
          

        </tbody>
    </table>

        </div>
    )
}

export default EmergencyFaculty