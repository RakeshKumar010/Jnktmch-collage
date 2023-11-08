import React from 'react'

const BiochemistryFaculty = ({ content }) => {
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
                        <td>Dr. Sishir Kumar Suman</td>
                        <td>Assistant Professor</td>
                        <td>+91-8873557500</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Dr. Rakesh Kumar Ranjan</td>
                        <td>Assistant Professor</td>
                        <td>+91-9199819440</td>
                        <td>rakeshranjan1308@gmail.com</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Dr. Amrendra Kumar Amar</td>
                        <td>Tutor</td>
                        <td>+91-9431268458</td>
                        <td>dramar.ak@gmail.com</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Dr. Shabana</td>
                        <td>Tutor</td>
                        <td>+91-</td>
                        <td></td>
                    </tr>



                </tbody>
            </table>
        </div>
    )
}

export default BiochemistryFaculty