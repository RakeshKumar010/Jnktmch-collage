import quaterImg1 from '../../assets/7d2b3c05-2000-482c-9151-445012aac106.jpg'
import quaterImg2 from '../../assets/WhatsApp Image 2023-07-12 at 8.43.22 PM (1).jpeg'
import quaterImg3 from '../../assets/WhatsApp Image 2023-07-12 at 8.43.06 PM (1).jpeg'
import quaterImg4 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.45 PM.jpeg'
import girlsHostel from '../../assets/WhatsApp Image 2023-07-12 at 8.42.43 PM.jpeg'
import hostelImg from '../../assets/WhatsApp Image 2023-07-12 at 8.42.42 PM.jpeg'

const StaffQuater = () => {
    return (
        <div className='staff_quater_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Facility /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Residence</strong></h3>
            </div>

            <div className='hostel_main'>

                <div className="hostel_body">

                    <div className="boys_hostel_body">

                        <div className="boys_hostel_left">
                            <img src={hostelImg} alt="hostel_img" className='hostel_img boys_hostel_img' />
                        </div>
                        <div className="boys_hostel_right">
                            <h3 className='hostel_right_heading'>Principal Residance </h3>
                            <p className='hostel_right_content_para'>The principal Residence is a critical time for new principals to establish themselves and set the tone for the rest of their tenure.</p>

                            <p>Here are some of the key tasks that a new principal should focus on during the principal quarter:</p>

                            <ul>
                                <li>Build relationships</li>
                                <li>Set expectations</li>

                            </ul>

                        </div>

                    </div>
                    <hr />
                    <div className="girls_hostel_body">

                        <div className="girls_hostel_right">
                            <h3 className='hostel_right_heading'>superintendent Residence </h3>

                            <p>The superintendent Residence is a critical time for new superintendents to establish themselves and set the tone for the rest of their tenure.</p>

                            <p>Here are some of the key tasks that a new superintendent should focus on during the superintendent quarter:</p>

                            <ul>

                                <li>Communicate with the community</li>
                                <li>Advocate for the medical college</li>
                            </ul>
                        </div>

                        <div className="girls_hostel_left">
                            <img src={girlsHostel} alt="hostel_img" className='hostel_img girls_hostel_img' />
                        </div>
                    </div>
                    <hr />
                    <div className="boys_hostel_body">

                        <div className="boys_hostel_left">
                            <img src={quaterImg4} alt="hostel_img" className='hostel_img boys_hostel_img' />
                        </div>
                        <div className="boys_hostel_right">
                            <h3 className='hostel_right_heading'>Proffesor's Residence </h3>
                            <p className='hostel_right_content_para'>College is also providing  the Proffessor Residence Senior Resident Quarter, Junior Resident Quarter Residing into the campus it will positively builds the relation between students and Proffesor / tutor.</p>

                            {/* <p>Here are some of the key tasks that a new principal should focus on during the principal quarter:</p> */}

                           

                        </div>

                    </div>
                </div>

            </div>


            <div className='staff_quater_table_div'>
                <table className='gradeList_table_main library_table_main' id='staff_quater_table_id'>
                    <thead>
                        <tr>
                            <th>Staff Quarter</th>
                            <th>Room</th>
                            <th>Bed</th>
                            <th>Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Senior Resident Quarter</td>
                            <td>21</td>
                            <td>1 BHK</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>Junior Resident Quarter</td>
                            <td>64</td>
                            <td>1</td>
                            <td>64</td>
                        </tr>
                        <tr>
                            <td>Professor Residence</td>
                            <td>36</td>
                            <td>3 BHK</td>
                            <td>36</td>
                        </tr>
                        <tr>
                            <td>Nursing Hostel</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>NMS Quarter</td>
                            <td>24</td>
                            <td>2 BHK</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Karamchari Quarter</td>
                            <td>17</td>
                            <td>1 BHK</td>
                            <td>17</td>
                        </tr>



                    </tbody>
                </table>

            </div>
            <div className="staff_quater_img_div">
                <img src={quaterImg1} alt="quater_img" className='quater_img' />
                <img src={quaterImg2} alt="quater_img" className='quater_img' />
                <img src={quaterImg3} alt="quater_img" className='quater_img' />
            </div>
        </div>
    )
}

export default StaffQuater