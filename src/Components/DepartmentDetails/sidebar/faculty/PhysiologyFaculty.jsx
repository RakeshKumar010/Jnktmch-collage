import React from 'react'

const PhysiologyFaculty = ({ content }) => {
    return (
        <div className="siderfaculty_right_body">
            <h3 className='siderfaculty_right_heading'>{content.heading}</h3>
            <p style={{ fontSize: "14px" }}>This are our faculty Members in the {content.paragraph}</p>
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
                        <td>Dr.Gitanjali Kumari</td>
                        <td>Senior Resident & H.O.D</td>
                        <td>+91-9122720539</td>
                        <td>drgitu26@gmail.com</td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}


export default PhysiologyFaculty