import './Facility.css'
import TheatersImg from '../../assets/WhatsApp Image 2023-07-12 at 8.42.36 PM.jpeg'
const Theaters = (Props) => {
    return (
        <div className='theaters_main'>
            {/* {props.text.heading} */}
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Facility /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Theaters</strong></h3>
            </div>
            <div className="theaters_body">
                <div className="theaters_left">
                    <h1 className='theaters_heading'>Lecture Theaters</h1>
                    <p>We provide our students best learning environment by providing good lecture theaters
                        . Where the students can get the best of the study experiences throughout the their academic sessions.<br />

                        Theater has the Seating capacity of 200 students at the same time.
                        It has the facility of Projector , digital audio sounds & public address
                        systems. We are providing the world class best facility lecture room.</p>
                </div>
                <div className="theaters_img_div">
                    <img src={TheatersImg} alt="theaters_img" className='labroratory_img'/>
                </div>
            </div>
        </div>
    )
}

export default Theaters