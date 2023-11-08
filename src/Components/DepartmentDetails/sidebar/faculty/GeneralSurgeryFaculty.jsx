import React from 'react'

const GeneralSurgeryFaculty = ({ content }) => {
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
                        <td>Dr.Ganesh Kumar</td>
                        <td>Assistant Professor</td>
                        <td>+91-9471489942</td>
                        <td>drganeshgaya@gmail.com</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Dr.Ravindra Kumar</td>
                        <td>Senior Resident</td>
                        <td>+91-9308306985</td>
                        <td>mintu.singh@yahoo.com</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Dr.Hari Shankar Thakur</td>
                        <td>Senior Resident</td>
                        <td>+91-8544057749</td>
                        <td>drhst17@gmail.com</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Dr.Sanjeev Kumar Bharti</td>
                        <td>Senior Resident</td>
                        <td>+91-</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Dr.Jacqeb Sadanala</td>
                        <td>Senior Resident</td>
                        <td>+91-</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Dr.Pankaj Kumar</td>
                        <td>Senior Resident</td>
                        <td>+91-</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>Dr.Birendra Kumar</td>
                        <td>Senior Resident</td>
                        <td>+91-</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default GeneralSurgeryFaculty