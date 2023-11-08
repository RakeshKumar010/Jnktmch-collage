import admiImg1 from '../../assets/6358986b-5bd3-47c9-a945-728cc68a2172.jpg'
import admiImg2 from '../../assets/Yoga14.jpg'
import admiImg3 from '../../assets/img_1.jpeg'
// import admiImg2 from '../../assets/96044dfb-7c9e-4c05-8f0f-aa46616ffff8.jpeg'
// import admiImg3 from '../../assets/.jpeg'

const AdministrativeBlock = () => {
    return (
        <div className='administrative_block_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / About / <strong style={{ color: "blue", fontSize: "1.2vw" }}> Administrative Block</strong></h3>

            </div>
            <div className="administrative_block_heading_div">
                <h4 className='administrative_block_heading' > Administrative Block</h4>
            </div>
            <div className="administrative_block_body">
                <div className="administrative_block_text">
                    <br /> <br />
                    <ol>
                        <li>Intoduction</li>
                        <ul>
                            <li>Briefly introduce the Administrative Block as the central hub for administrative activities at your medical college.</li>
                            <li>Mention its significance in managing day-to-day operations and supporting the college's mission.</li>
                        </ul> <br /><br /><br /> <br /><br /> <br />
                        <li>Office of the Principal/Dean:</li>
                        <ul>
                            <li>Provide an overview of the role of the Principal/Dean in leading the college.</li>
                            <li>Highlight the Principal/Dean's responsibilities and their commitment to academic excellence and student welfare.</li>
                        </ul><br /><br /><br /> <br /><br /> <br />
                        <li>Registrar's Office</li>
                        <ul>
                            <li>Explain the Registrar's Office's role in managing student registrations, academic records, and course-related matters.</li>
                            <li>Mention any online portals or systems available for students to access their records.</li>
                        </ul>
                    </ol>

                </div>
                <div className="administrative_block_img">
                    <img src={admiImg1} alt="admin_img1" className='admin_img' />
                    <img src={admiImg2} alt="admin_img1" className='admin_img' />
                    <img src={admiImg3} alt="admin_img1" className='admin_img' />
                    {/* <img src={admiImg1} alt="admin_img1" /> */}
                </div>
            </div>
        </div>
    )
}

export default AdministrativeBlock