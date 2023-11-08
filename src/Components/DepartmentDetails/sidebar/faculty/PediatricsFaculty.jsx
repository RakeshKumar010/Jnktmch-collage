import React from 'react'

const PediatricsFaculty =({ content }) => {
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
                <td>Dr.Vipin Kumar Verma</td>
                <td>Assoc. Professor & H.O.D</td>
                <td>+91-9386494791</td>
                <td>bepinrmch1976@gmail.com</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Dr.Umesh Kumar</td>
                <td>Assistant Professor</td>
                <td>+91-9523752105</td>
                <td>drumeshkumarpat@gmail.com</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Dr.Srikant Pandey</td>
                <td>Assistant Professor</td>
                <td>+91-7979870092</td>
                <td>pandeysrikant26@gmail.com</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Dr.Tajendra Kumar</td>
                <td>Senior Resident</td>
                <td>+91-</td>
                <td></td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Dr.Chandra Bhusan Mandal</td>
                <td>Senior Resident</td>
                <td>+91-9304919425</td>
                <td>drcbhushan@live.com</td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Dr.Kumar Keshav Chandra</td>
                <td>Senior Resident</td>
                <td>+91-</td>
                <td></td>
            </tr>
           
           
           
           
          
          

        </tbody>
    </table>
    

        </div>
    )
}

export default PediatricsFaculty