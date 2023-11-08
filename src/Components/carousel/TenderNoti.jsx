import { Link } from 'react-router-dom'
import './Carousel.css'
import NewBtn from '../../assets/new_btn.jpg'
const TenderNoti = () => {
    return (
        <div className="tender_noti_container">
            <div className="tender_noti_header_div">
            <h3 className='tender_noti_header'>TENDER</h3>
            </div>
            <Link to={'./tender'} className="notice_link">
            <ol className='tender_noti_list'>
                <li>अस्पातल में अभिलेखों की SCANNING, DIGITISATION & UPLOADING से संबंधित निविदा | <img src={NewBtn} alt="" style={{width:"4%"}}/> &nbsp; &nbsp; &nbsp; &nbsp; Post Date :- 2023-07-06</li>
               

            </ol>
            </Link>
            {/* <Link to={'./View-all'} className="tender_noti_header">View All</Link> */}

        </div>
    )
}

export default TenderNoti