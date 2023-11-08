import { Link } from "react-router-dom"
import doc1 from '../../noticeDoc/20230627233105_Syllabus.pdf'
const Syllabus = () => {
    return (
        <div className='no_of_bed_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Academics / <strong className="about_college_route"> Syllabus</strong></h3>
            </div>
            <header>
                <h2>Syllabus</h2>
            </header>

            <div className="no_of_bed_body admission_body">
                <div className="admisssin_text">
                    <h5>MBBS is recognized by Medical Council of India and intake capacity of 100 Students Admission.</h5>
                    <p>
                        Every student shall undergo a certified study extending over 4 ½ academic years divided into 9 semesters (of 6 months each) from the date of commencement of his date of completion of examination and followed by one year compulsory rotating internship. Each semester will consist of 120 teaching days of 8 hrs each college working time including one hour of lunch.
                        <i> The period of 4 ½ (9 semester) years is divided into 3 phases as follows:</i>

                        <strong> EXAMINATION REGULATIONS </strong>
                    </p>
                    <h6>Attendance:</h6>
                    <p>75% of attendance in a subject for appearing in the examination is compulsory provided he/she has 80% attendance in non lecture teaching, i.e. seminars, group discussions, tutorials, demonstrations, practical, Hospital (Tertiary, Secondary, Primary) postings and bed side clinics, etc.

                    </p>
                </div>
                <table className='notice_page_table admission_page_table' style={{ textAlign: "center" }}>
                    <tr>
                        <th>SL.</th>
                        <th>Syllabus</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>CURRICULUM FOR MBBS</td>

                        <td><a
                            href={doc1}
                            download='20230627233105_Syllabus'
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="notice_dow_btn">Download</button>
                        </a>
                        </td>

                    </tr>


                </table>
            </div>
        </div>
    )
}

export default Syllabus