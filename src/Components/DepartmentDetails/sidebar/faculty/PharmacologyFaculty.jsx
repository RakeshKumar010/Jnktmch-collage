import React from 'react'

const PharmacologyFaculty = ({ content }) => {
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
                <td>Dr.Dinesh Kumar</td>
                <td>Assoc. Professor & H.O.D</td>
                <td>+91-9934267889</td>
                <td>drdinesh.c403@gmail.com</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Dr.Hirendra Kumar</td>
                <td>Tutor</td>
                <td>+91-9631459978</td>
                <td>hirendrakumar1979@gmail.com</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Dr.Pant Suresh Keshaw</td>
                <td>Tutor</td>
                <td>+91-7990399191</td>
                <td>pantsk1510@gmail.com</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Dr.Udeshey kumar</td>
                <td>Tutor</td>
                <td>+91-</td>
                <td></td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Dr.Prabhat Ranjan</td>
                <td>Tutor</td>
                <td>+91-</td>
                <td></td>
            </tr>
           
           
           
           
          
          

        </tbody>
    </table>
    
        </div>
    )
}

export default PharmacologyFaculty