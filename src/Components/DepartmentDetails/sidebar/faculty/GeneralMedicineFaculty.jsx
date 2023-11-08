import React from 'react'

const GeneralMedicineFaculty =({ content }) => {
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
                <td>Dr.Krishna Prashad</td>
                <td>Assoc. Professor & H.O.D</td>
                <td>+91-9431495648</td>
                <td>krishna.prashad58@gmail.com</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Dr.Ananad Kumar Jha</td>
                <td>Associate Professor</td>
                <td>+91-9431695060</td>
                <td>anandkumarjha1958@gmail.com</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Dr.Virendra Kumar</td>
                <td>Assistant Professor</td>
                <td>+91-8210051704</td>
                <td>kumarbirendra422@gmail.com</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Dr.Sunil Kumar</td>
                <td>Senior Resident</td>
                <td>+91-8825338508</td>
                <td>sunilkumarpmch@gmail.com</td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Dr.Naveen Kumar</td>
                <td>Senior Resident</td>
                <td>+91-9990912046</td>
                <td>drnabink007@gmail.com</td>
            </tr>
            <tr>
                <td>6.</td>
                <td>Dr.Gangesh Kumar Gunjan</td>
                <td>Senior Resident</td>
                <td>+91-8825124084</td>
                <td>drgkgunjan15@gmail.com</td>
            </tr>
            <tr>
                <td>7.</td>
                <td>Dr.Kiran Kumar H.D</td>
                <td>Senior Resident</td>
                <td>+91-9122862901</td>
                <td>kirankumarhd786@gmail.com</td>
            </tr>
            <tr>
                <td>8.</td>
                <td>Dr.Manish Kumar H.D</td>
                <td>Senior Resident</td>
                <td>+91-</td>
                <td></td>
            </tr>
            <tr>
                <td>9.</td>
                <td>Dr.Manish Kumar</td>
                <td>Senior Resident</td>
                <td>+91-</td>
                <td></td>
            </tr>
            <tr>
                <td>10.</td>
                <td>Dr.Santosh Kumar Bhagat</td>
                <td>Senior Resident</td>
                <td>+91-</td>
                <td></td>
            </tr>

           
          
          

        </tbody>
    </table>

        </div>
    )
}

export default GeneralMedicineFaculty