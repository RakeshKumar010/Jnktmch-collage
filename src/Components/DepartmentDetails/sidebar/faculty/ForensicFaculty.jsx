import React from 'react'

const ForensicFaculty =({ content }) => {
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
                <td>Dr.</td>
                <td></td>
                <td>+91-</td>
                <td></td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Dr.</td>
                <td></td>
                <td>+91-</td>
                <td></td>
            </tr>
           

        </tbody>
    </table>

        </div>
    )
}

export default ForensicFaculty