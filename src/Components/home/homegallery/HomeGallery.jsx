import './HomeGallery.css'
import Image_1 from '../../../assets/img_5.jpg'
import Image_2 from '../../../assets/img_6.jpg'
import Image_3 from '../../../assets/img_7.jpeg'
import Image_4 from '../../../assets/img_8.jpeg'
import Image_5 from '../../../assets/img_9.jpg'
import Image_6 from '../../../assets/img_16.jpg'
import { Link } from 'react-router-dom'
const Gallery = () => {
  return (
    <div className="gallery_main">
        <h4 className='gallery_heading'>GALLERY</h4>
    <Link to={'./gallery'} className='gallery_items'>
        <img src={Image_1} alt="gallery_1" className='gallery_img' />
        <img src={Image_2} alt="gallery_1" className='gallery_img' />
        <img src={Image_3} alt="gallery_1" className='gallery_img' />
        <img src={Image_4} alt="gallery_1" className='gallery_img' />
        <img src={Image_5} alt="gallery_1" className='gallery_img' />
        <img src={Image_6} alt="gallery_1" className='gallery_img' />
        
        <img src={Image_1} alt="gallery_1" className='gallery_img' />
        <img src={Image_2} alt="gallery_1" className='gallery_img' />
        <img src={Image_3} alt="gallery_1" className='gallery_img' />
        <img src={Image_4} alt="gallery_1" className='gallery_img' />
        <img src={Image_5} alt="gallery_1" className='gallery_img' />
        <img src={Image_6} alt="gallery_1" className='gallery_img' />

        <img src={Image_1} alt="gallery_1" className='gallery_img' />
        <img src={Image_2} alt="gallery_1" className='gallery_img' />
        <img src={Image_3} alt="gallery_1" className='gallery_img' />
        <img src={Image_4} alt="gallery_1" className='gallery_img' />
        <img src={Image_5} alt="gallery_1" className='gallery_img' />
        <img src={Image_6} alt="gallery_1" className='gallery_img' />

        <img src={Image_1} alt="gallery_1" className='gallery_img' />
        <img src={Image_2} alt="gallery_1" className='gallery_img' />
        <img src={Image_3} alt="gallery_1" className='gallery_img' />
        <img src={Image_4} alt="gallery_1" className='gallery_img' />
        <img src={Image_5} alt="gallery_1" className='gallery_img' />
        <img src={Image_6} alt="gallery_1" className='gallery_img' />


    </Link>
    </div>

    
  )
}

export default Gallery