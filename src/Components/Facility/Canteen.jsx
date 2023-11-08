import './facility.css'
import CanteenImg1 from '../../assets/canteen.jpg'
import CanteenImg2 from '../../assets/canteen-1.jpeg'
const Canteen = () => {
    return (
        <div className='Canteen_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Facility /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Canteen</strong></h3>
            </div>
            <div className="canteen_body">
                <div className="canteen_left">
                    <h4 className='administrative_block_heading'>Canteen</h4>
                    <p style={{width:"50vw"}}>
                     
                        our college facilitates canteen to fulfill the elementary need of every 
                        human being. We provide hygienic and healthier food at a very low cost for 
                        our students as well as our faculties & staffs. <br /> <br />
                         There Are Two Canteens In The Campus One Is For The Students And Another One Is For Faculty Member's. Both Canteens Serves Hygenic And Tasty Food. Both Canteens available to serve from 7Am to 10pm.
                    </p>
                </div>
                <div className="canteen_right">
                    <img src={CanteenImg1} alt="conteen_img" className='conteen_img' />
                    <img src={CanteenImg2} alt="conteen_img" className='conteen_img' />
                </div>
            </div>
        </div>
    )
}

export default Canteen