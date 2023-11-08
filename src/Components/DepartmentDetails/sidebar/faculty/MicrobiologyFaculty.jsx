

const MicrobiologyFaculty = ({ content }) => {
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
                <td>Dr.Kanhaiya Jha</td>
                <td>Assoc. Professor & H.O.D</td>
                <td>+91-9931232865</td>
                <td>drkanhaiyajha13@gmail.com</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Dr.Prakash Kumar Mishra</td>
                <td>Assistant Professor</td>
                <td>+91-9650123109</td>
                <td>dr.prakash@yahoo.in</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Dr.Md. Sehnanwaj Mehndi</td>
                <td>Tutor</td>
                <td>+91-9546962467</td>
                <td>drmehdi30@gmail.com</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Dr.Vandana Kumari</td>
                <td>Tutor</td>
                <td>+91-9471230260</td>
                <td>drvandanakumari@yahoo.com</td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Dr.Prem Prakash Mandal</td>
                <td>Tutor</td>
                <td>+91-9934701588</td>
                <td>drpremprakash3012@gmail.com</td>
            </tr>
           
           
           
           
          
          

        </tbody>
    </table>

        </div>
    )
}

export default MicrobiologyFaculty