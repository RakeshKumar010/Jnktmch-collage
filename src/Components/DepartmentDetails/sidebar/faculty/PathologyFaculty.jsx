import React from 'react'

const PathologyFaculty = ({ content }) => {
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
                <td>Dr.Ghulam Tabraiz</td>
                <td>Assoc. Professor & H.O.D</td>
                <td>+91-9431402505</td>
                <td>ghulamtabraiz.dbg@gmail.com</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Dr.Ashok Kumar</td>
                <td>Assistant Professor</td>
                <td>+91-7566863146</td>
                <td>drashokkumar327@gmail.com</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Dr.Ajay Kumar</td>
                <td>Assistant Professor</td>
                <td>+91-8292605562</td>
                <td>do.ajay@yahoo.co.in</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Dr.Dev Kumar Singh</td>
                <td>Tutor</td>
                <td>+91-9709859407</td>
                <td>deokr2k4pmch@gmail.com</td>
            </tr>
          
            <tr>
                <td>5.</td>
                <td>Dr.Sweta Kumari</td>
                <td>Tutor</td>
                <td>+91-9631887118</td>
                <td></td>
            </tr>
            <tr>
                <td>6.</td>
                <td>Dr.Sujeet Kumar</td>
                <td>Tutor</td>
                <td>+91-8521863186</td>
                <td>sujeetnmc2k8@gmail.com</td>
            </tr>
            <tr>
                <td>7.</td>
                <td>Dr.Sanjay Kumar Sahni</td>
                <td>Tutor</td>
                <td>+91-</td>
                <td></td>
            </tr>
            <tr>
                <td>8.</td>
                <td>Dr.Santosh Kumar</td>
                <td>Tutor</td>
                <td>+91-</td>
                <td></td>
            </tr>
           
           
           
           
          
          

        </tbody>
    </table>
    
        </div>
    )
}
export default PathologyFaculty