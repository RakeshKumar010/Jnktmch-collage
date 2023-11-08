import './Facility.css'
import LaboratoryImg from '../../assets/Laboratory.jpg'
const Laboratory = () => {
  return (
    <div className='theaters_main'>
    {/* {props.text.heading} */}
    <div className="gallery_banner_div">
        <h3 className='gallery_page_headiing'>Home / Facility /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Laboratory</strong></h3>
    </div>
    <div className="theaters_body">
        <div className="theaters_left">
            <h1 className='theaters_heading'>Laboratory</h1>
            <p>We provide our students best learning environment by providing good lecture theaters
                . Where the students can get the best of the study experiences throughout the their academic sessions.<br />

                Theater has the Seating capacity of 200 students at the same time.
                It has the facility of Projector , digital audio sounds & public address
                systems. We are providing the world class best facility lecture room.</p>
        </div>
        <div className="theaters_right">
            <img src={LaboratoryImg} alt="labroratory_img" className='labroratory_img'/>
        </div>
    </div>
</div>
  )
}

export default Laboratory

// text={{heading:'Theaters',paragraph:"We also provide our students a good laboratory , where they can enhance their learning experiences at their best levels."}}