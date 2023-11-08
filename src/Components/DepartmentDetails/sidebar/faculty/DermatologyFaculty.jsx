import React from 'react'

const DermatologyFaculty = ({ content }) => {
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
                        <td>Assoc. Professor & H.O.D</td>
                        <td>+91-</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Dr. Naveen Kumar</td>
                        <td>Senior Resident</td>
                        <td>+91-8002684358</td>
                        <td>naveenkumar30989@gmail.com</td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default DermatologyFaculty