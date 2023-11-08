import React from 'react'

const OrthopedicsFaculty = ({ content }) => {
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
                <td>Dr.Deepak Kumar</td>
                <td>Assistant Professor</td>
                <td>+91-9304140580</td>
                <td>drdeepaksahani@gmail.com</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Dr.Sushil Kumar</td>
                <td>Assistant Professor</td>
                <td>+91-9304020274	</td>
                <td></td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Dr.Shailesh Kumar</td>
                <td>Senior Resident</td>
                <td>+91-7488660252</td>
                <td>drsailesh79@gmail.com</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Dr.Vivekanand Kumar</td>
                <td>Senior Resident</td>
                <td>+91-7759906880</td>
                <td>vivekanand5291soni43@gmail.com</td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Dr.Aurangjeb Rahman</td>
                <td>Senior Resident</td>
                <td>+91-9973380086</td>
                <td></td>
            </tr>


        </tbody>
    </table>
        </div>
    )
}

export default OrthopedicsFaculty