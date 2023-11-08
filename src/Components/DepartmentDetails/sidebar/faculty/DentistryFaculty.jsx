import React from 'react'

const DentistryFaculty = ({ content }) => {
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
                        <td>Dr. Ahtesham Anwar</td>
                        <td>Asst. Professor & H.O.D</td>
                        <td>+91-9709890327</td>
                        <td>anwar.ahtasham@gmail.com</td>
                    </tr>
                  



                </tbody>
            </table>
        </div>
    )
}

export default DentistryFaculty