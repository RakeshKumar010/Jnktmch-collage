import './Features.css'
import Featues1 from '../../assets/features1.jpg'
import Featues2 from '../../assets/features2.avif'
import Featues3 from '../../assets/features3.webp'
import Featues4 from '../../assets/features4.jpg'
import Featues5 from '../../assets/features5.jpg'
import Featues6 from '../../assets/features6.webp'
import { Link } from 'react-router-dom'
const Features = () => {
    return (
        <div className='features_main'>
            <h4 className='features_heading'>FACILITIES</h4>
            <p style={{textAlign:"center", fontSize:"14px",fontWeight:"600"}}>Avail this features for the students which are provided from the college.Here are quick links so you 
             directly redirected the main contents of the pages.</p>
            <div className="features_item">
                <div className="features_img_div">
                    <img src={Featues1} alt="features_img" className='features_img citizens' />
                    <p>citizens Charter</p>
                </div>
                <Link to={'./library'} className="features_img_div">

                    <img src={Featues2} alt="features_img" className='features_img library_image' />
                    <p>Library</p>
                </Link>
                <div className="features_img_div">
                    <img src={Featues3} alt="features_img" className='features_img download' />
                    <p>Download</p>
                </div>


                <div className="features_img_div">
                    <Link to={'https://www.onlinesbi.sbi/sbicollect/icollecthome.htm'} target="_blank">
                    <img src={Featues4} alt="features_img" className='features_img online_payment_fees' />
                    <p>Online Fees Payment</p>
                    </Link>
                </div>


                <div className="features_img_div">
                    <img src={Featues6} alt="features_img" className='features_img publication' />
                    <p>Publication</p>
                </div>


                <Link to={'./admission'} className="features_img_div">
                    <img src={Featues5} alt="features_img" className='features_img admitted_students' />
                    <p>Student's Admission </p>
                </Link>


            </div>

        </div>
    )
}

export default Features