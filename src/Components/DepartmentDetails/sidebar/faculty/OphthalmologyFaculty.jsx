
const OphthalmologyFaculty = ({ content }) => {
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
                <td>Dr.Bhupendra Prashad</td>
                <td>Professor & H.O.D</td>
                <td>+91-9431202590</td>
                <td></td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Dr.Vinod Kumar</td>
                <td>Asst. Professor</td>
                <td>+91-9470562854</td>
                <td></td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Dr.Shivangi Rajni</td>
                <td>Senior Resident</td>
                <td>+91-</td>
                <td></td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Dr.Yugesh Kumar</td>
                <td>Senior Resident</td>
                <td>+91-9905265733</td>
                <td>dryugesh80@gmail.com</td>
            </tr>
           
           
           
           
           
          
          

        </tbody>
    </table>

        </div>
    )
}
export default OphthalmologyFaculty