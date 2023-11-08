import './Academic.css'
import studentList from '../../noticeDoc/MBBS 2020.pdf'
import studentList1 from '../../noticeDoc/MBBS 2021.pdf'
import studentList2 from '../../noticeDoc/MBBS 2022.pdf'


const Admisssion = () => {
    return (
        <div className='no_of_bed_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Academics /<strong className="about_college_route" >Admission</strong></h3>
            </div>
            <header>
                <h2>Admission</h2>
            </header>
            <div className="no_of_bed_body admission_body" style={{marginBottom:"4vw",flexWrap:"wrap"}}>
                <div>
                    <p id='admission_paragraph'>In New College Campus, Student’s admission has been started from Academic session (2020 – 21).

                        Intake capacity of students are 100 seats in Under-Graduate of MBBS. Admission for Under-Graduate Programme will be held on the basis of examination , which are conducted by BCECE, Bihar & NEET
                        cut-off marks. BCECE is expected to be held in April/May every year. Examination of NEET will be conducted into the month of May in every year on the National level

                    </p>
                    <h4>Reservation</h4>
                    <p id='admission_paragraph'>Reservation in Seats under various Categories is only for the permanent residents/ domicile of Bihar. Outsiders have to appear under General Category only.

                        
                    </p>
                    <div className='admission_bottom_download_btn'>
                    <h4>Admission List</h4>
                    <div className='notification_regarding_download_btn'>
                        <p style={{
                            margin: "0",
                            width: "fit-content"
                        }}> <strong>1.</strong> List of students for the Academic session year 2020-21</p>
                        <a href={studentList}
                            
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="notice_dow_btn fee_notification_download_btn"> View Details</button>
                        </a>
                    </div>
                    <div className='notification_regarding_download_btn'>
                        <p style={{
                            margin: "0",
                            width: "fit-content"
                        }}><strong> 2.</strong> List of students for the Academic session year 2021-22</p>
                        <a href={studentList1}
                           
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="notice_dow_btn fee_notification_download_btn">View Details</button>
                        </a>
                    </div>
                    <div className='notification_regarding_download_btn'>
                        <p style={{
                            margin: "0",
                            width: "fit-content"
                        }}><strong>3.</strong> List of students for the Academic session year 2022-23</p>
                        <a href={studentList2}
                           
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="notice_dow_btn fee_notification_download_btn">View Details</button>
                        </a>
                    </div>
                </div>
                </div>
                <table className='notice_page_table admission_page_table admission_page_table_id'>
                    <tr>
                        <th>Category</th>
                        <th>Code</th>
                        <th>Percentage</th>
                    </tr>
                    <tr>
                        <td>General</td>
                        <td>GEN</td>
                        <td>50 %</td>
                    </tr>
                    <tr>
                        <td>Scheduled Caste</td>
                        <td>SC</td>
                        <td>16 %</td>

                    </tr>
                    <tr>
                        <td>Scheduled Tribe</td>
                        <td>ST</td>
                        <td>1 %</td>
                    </tr>
                    <tr>
                        <td>Extremely Backward Caste</td>
                        <td>EBC</td>
                        <td>18 %</td>
                    </tr>
                    <tr>
                        <td>Backward Caste</td>
                        <td>BC</td>
                        <td>12%</td>
                    </tr>
                    <tr>
                        <td>Reserved Category Girls</td>
                        <td>RCG</td>
                        <td>3%</td>
                    </tr>
                    <tr>
                        <td>Disabled Quota</td>
                        <td>DQ</td>
                        <td>3%</td>
                    </tr>

                </table>
               
            </div>
        </div>
    )
}

export default Admisssion