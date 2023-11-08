import React from 'react'

const ObsyFaculty = ({ content }) => {
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
                <td>Dr.Kamlini</td>
                <td>Associate Professor</td>
                <td>+91-9431022666</td>
                <td>drkamalinikumar@gmail.com</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Dr.Poonam Kumari</td>
                <td>Asst. Professor</td>
                <td>+91-8789770940</td>
                <td>drpoonam22@gmail.com</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Dr.Rani Kumari</td>
                <td>Senior Resident</td>
                <td>+91-</td>
                <td></td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Dr.Shaivya Saurav</td>
                <td>Senior Resident</td>
                <td>+91-7970556738</td>
                <td>drshaivyasaurav@gmail.com</td>
            </tr>
  
        </tbody>
    </table>

        </div>
    )
}

export default ObsyFaculty