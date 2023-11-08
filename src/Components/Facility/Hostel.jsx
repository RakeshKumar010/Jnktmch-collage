import './Facility.css'
import hostelImg from '../../assets/hostel_img1.jpg'
import girlsHostel from '../../assets/girls_hostel.jpg'

const Hostel = () => {
    return (
        <div className='hostel_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Facility /<strong className="about_college_route"> Hostel</strong></h3>
            </div>
            <div className="hostel_body">

                <div className="boys_hostel_body">

                    <div className="boys_hostel_left">
                        <img src={hostelImg} alt="hostel_img" className='hostel_img boys_hostel_img' />
                    </div>
                    <div className="boys_hostel_right">
                        <h3 className='hostel_right_heading'>Boys Hostel</h3>
                        <p className='hostel_right_content_para'>tde college has got well furnished separate hostels for boys and girls.its located in tde main college campus. <br /> <br />

                            tdese hostels have adequate capacity and are equipped witd facility like proper security,cleaned daily rooms,free wireless internet,newspaper, etc. <br /> <br />

                            A calm environment is maintained inside tde rooms for a distract free study. <br /> <br />

                            All rooms are having proper ventilation and getting proper amount of sunlight. <br /> <br />

                            All floor having a proper numbers of washroom and common rooms. <br /> <br />

                        </p>
                    </div>

                </div>

                <div className="girls_hostel_body">

                    <div className="girls_hostel_right">
                        <h3 className='hostel_right_heading'>Girls Hostel</h3>
                        <p>A girls' hostel is a dormitory-style accommodation for female students. It is typically located on tde campus of a college or university, but it can also be found in otder settings, such as boarding schools or religious institutions. <br /><br />

                            Girls' hostels provide a safe and secure place for female students to live and study. tdey typically have shared bedrooms, batdrooms, and kitchens. Some hostels also have common areas where students can relax, study, or socialize. <br /> <br />

                            tde rules and regulations of girls' hostels vary from one institution to anotder. However, most hostels have a curfew, and students are usually required to attend all classes. Some hostels also have restrictions on visitors. <br /> <br />

                        </p>
                    </div>

                    <div className="girls_hostel_left">
                        <img src={girlsHostel} alt="hostel_img" className='hostel_img girls_hostel_img' />
                    </div>
                </div>

                <div className="hostel_bottom_div">
                    <table className='library_table_main hostel_table_main'>
                        <thead>
                            <tr>
                                <th>Hostel</th>
                                <th>Room</th>
                                <th>Bed</th>
                                <th>Capacity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Boys Hostel-1</td>
                                <td>78</td>
                                <td>2</td>
                                <td>156</td>
                            </tr>
                            <tr>
                                <td>Boys Hostel-2</td>
                                <td>39</td>
                                <td>2</td>
                                <td>78</td>
                            </tr>
                            <tr>
                                <td>Girls Hostel-1</td>
                                <td>56</td>
                                <td>2</td>
                                <td>112</td>
                            </tr>
                            <tr>
                                <td>Girls Hostel-2</td>
                                <td>16</td>
                                <td>2</td>
                                <td>32</td>
                            </tr>
                            <tr>
                                <td>Intern Hostel-1</td>
                                <td>55</td>
                                <td>1</td>
                                <td>55</td>
                            </tr>
                            <tr>
                                <td className='last_row_first_box'>Intern Hostel-2</td>
                                <td>55</td>
                                <td>1</td>
                                <td className='last_row_last_box'>55</td>
                            </tr>

                        </tbody>
                    </table>
                    <div className='hostel_total_beds'>
                        <p> <span> Total of beds in Boys Hostel- 234 </span></p> <br />
                        <p> <span> Total of beds in Girls Hostel- 144 </span></p>  <br />
                        <p> <span> Total of beds in Intern Hostel- 110 </span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hostel