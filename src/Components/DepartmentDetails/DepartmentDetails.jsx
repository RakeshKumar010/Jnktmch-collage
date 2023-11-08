import './DepartmentDetails.css'
import SideSanctionPost from './sidebar/SideSanctionPost'

const DepartmentDetails = ({ content,mession,paraStyle }) => {
    return (

        <div className="department_details_right_body">
            <div className="department_details_body_top">
                <div className="name_of_department">
                    <h3 className='name_of_department_heading'>{content.heading}</h3>
                </div>


                <div className="img_of_department">
                    <div className='name_of_department_paraghraph_container'>

                        <p className='name_of_department_paraghraph'>{content.paragraph}</p>
                        <div>
                            <h4 style={{marginBottom:"2vw"}}><strong>Mission</strong></h4>
                          <>
                            {mession.map((val,id)=>{
                                return(<ul key={id} className="name_of_department_paraghraph">
                                <li>{val}</li>
                                </ul>)
                            })}
                          </>
                        </div>
                    </div>
                    <div className='department_details_hod_img_container'>
                    <img src={content.imgSrc} alt="department_page_img" className='department_details_hod_img' />
                    <p className={paraStyle}>{content.hodname}</p>
                    </div>
                </div>
            </div>

            {/*Sennction */}
            {/* <div className="siderfaculty_right_body">
                <p style={{ fontSize: "14px" }}>This are our Senction Post in the {content.paragraph}</p>
                <table>
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Post</th>
                            <th>Sanction</th>
                            <th>Fill</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Professor</td>
                            <td>2</td>
                            <td>5</td>

                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Associate Professor</td>
                            <td>3</td>
                            <td>7</td>

                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Assistant Professor</td>
                            <td>1</td>
                            <td>2</td>

                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Tutor</td>
                            <td>5</td>
                            <td>3</td>

                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>Statistician</td>
                            <td>4</td>
                            <td>6</td>

                        </tr>
                        <tr>
                            <td>6.</td>
                            <td>Epidemio. cum Lect</td>
                            <td>6</td>
                            <td>3</td>

                        </tr>
                        <tr>
                            <td>7.</td>
                            <td>Lady Medical Officer</td>
                            <td>2</td>
                            <td>3</td>

                        </tr>

                    </tbody>
                </table>
            </div> */}


            {/* <div className="siderfaculty_right_body">
                <p style={{ fontSize: "14px" }}>This are our faculty Members in the {content.paragraph}</p>
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
                            <td>Dr. Nagina Choudhary</td>
                            <td>Assoc. Professor & H.O.D</td>
                            <td>+91-9835093005</td>
                            <td>drnaginachoudhary2013@gmail.com</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Dr. Venu Gopal</td>
                            <td>Assistant Professor</td>
                            <td>+91-9811438902</td>
                            <td>rvenugopal2002@gmail.com</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Dr. Niranjan Kumar</td>
                            <td>Assistant Professor</td>
                            <td>+91-8700433465</td>
                            <td>niranjana0510@gmail.com</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Dr. Amit Abhinandan</td>
                            <td>Senior Resident</td>
                            <td>+91-9718040403</td>
                            <td>amit_abhinandan@hotmail.com</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>Dr. Vinay Kumar</td>
                            <td>Senior Resident</td>
                            <td>+91-7033570075</td>
                            <td>vinaykumar2k7@gmail.com</td>
                        </tr>
                        <tr>
                            <td>6.</td>
                            <td>Dr. Manisha Kutare</td>
                            <td>Senior Resident</td>
                            <td>+91-9425515358</td>
                            <td>manishakutare@gmail.com</td>
                        </tr>
                        <tr>
                            <td>7.</td>
                            <td>Dr. Raghunandan Kumar</td>
                            <td>Senior Resident</td>
                            <td>+91-9308531977</td>
                            <td>raghujlnmc@gmail.com</td>
                        </tr>
                        <tr>
                            <td>8.</td>
                            <td>Dr. Pravin Vijayan</td>
                            <td>Senior Resident</td>
                            <td>+91-</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9.</td>
                            <td>Dr. Santosh Kumar</td>
                            <td>Senior Resident</td>
                            <td>+91-</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
        </div>

    )
}

export default DepartmentDetails