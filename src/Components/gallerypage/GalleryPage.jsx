import './Gallerypage.css'
import Gallery1 from '../../assets/Yoga1.jpg'
import Gallery2 from '../../assets/Yoga2.jpg'
import Gallery3 from '../../assets/Yoga3.jpg'
import Gallery4 from '../../assets/Yoga4.jpg'
import Gallery5 from '../../assets/Yoga5.jpg'
import Gallery6 from '../../assets/Yoga6.jpg'
import Gallery7 from '../../assets/Yoga7.jpg'
import Gallery8 from '../../assets/Yoga8.jpg'
import Gallery9 from '../../assets/Yoga9.jpg'
import Gallery10 from '../../assets/Yoga10.jpg'
import Gallery11 from '../../assets/Yoga11.jpg'
import Gallery12 from '../../assets/Yoga12.jpg'
import Gallery13 from '../../assets/Yoga13.jpg'
import Gallery14 from '../../assets/Yoga14.jpg'
import Gallery15 from '../../assets/Yoga15.jpg'
import Gallery16 from '../../assets/Yoga16.jpg'
import { useState } from 'react'

const GalleryPage = () => {
    const [num, setNum] = useState(1)
    const pupUpFun = (e) => {
        let img_Value = e.target.src;
        console.log(e.target);
        let popup_img = document.querySelector('.popup_img')
        let popup_main = document.querySelector('.popup_main')
        popup_main.style.display = "inline-flex"
        popup_img.src = img_Value;
        let fetch_num = parseInt(e.target.alt)
        setNum(fetch_num)
    }
    return (
        <div className='gallery_page_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Information / <strong style={{ color: "blue", fontSize: "1.2vw" }}> Gallery</strong></h3>

            </div>
            <div className="gallery_page_body">
                <div className="gallery_page_img_container">
                    <div className="gallery_page_heading">
                        <h4>YOGA DIWAS</h4>
                        <p> POST ON :- 21ST JUNE 2023 {num}</p>
                    </div>
                    <div className="gallery_page_image_list">
                        <img src={Gallery1} alt="1" className='yoga_img' onClick={pupUpFun} />
                        <img src={Gallery2} alt="2" className='yoga_img' onClick={pupUpFun} />
                        <img src={Gallery3} alt="3" className='yoga_img' onClick={pupUpFun} />
                        <img src={Gallery4} alt="4" className='yoga_img' onClick={pupUpFun} />
                    </div>
                </div>
                <div className="gallery_page_img_container">
                    <div className="gallery_page_heading">
                        <h4>AMBEDKAR JAYANTI</h4>
                        <p> POST ON :- 21ST JUNE 2023</p>
                    </div>
                    <div className="gallery_page_image_list">
                        <img src={Gallery5} alt="5" className='yoga_img' onClick={pupUpFun} />
                        <img src={Gallery6} alt="6" className='yoga_img' onClick={pupUpFun} />
                        <img src={Gallery7} alt="7" className='yoga_img' onClick={pupUpFun} />
                        <img src={Gallery8} alt="8" className='yoga_img' onClick={pupUpFun} />
                    </div>
                </div>
                <div className="gallery_page_img_container">
                    <div className="gallery_page_heading">
                        <h4>COLLEGE CAMPUS</h4>
                        <p> POST ON :- 21ST JAN 2022</p>
                    </div>
                    <div className="gallery_page_image_list">
                        <img src={Gallery9} alt="9" className='yoga_img' onClick={pupUpFun} />
                        <img src={Gallery10} alt="10" className='yoga_img' onClick={pupUpFun} />
                        <img src={Gallery11} alt="11" className='yoga_img' onClick={pupUpFun} />
                        <img src={Gallery12} alt="12" className='yoga_img' onClick={pupUpFun} />
                        <img src={Gallery13} alt="13" className='yoga_img' onClick={pupUpFun} />
                        <img src={Gallery14} alt="14" className='yoga_img' onClick={pupUpFun} />
                        <img src={Gallery15} alt="15" className='yoga_img' onClick={pupUpFun} />
                        <img src={Gallery16} alt="16" className='yoga_img' onClick={pupUpFun} />
                    </div>
                </div>
            </div>
            <div className="popup_main" id='popup_main_id'>
                <h1 className='popup_slide_btn popup_slide_btn_left' onClick={() => {
                    let popup_img = document.querySelector('.popup_img')
                    if (num > 1) {
                        setNum(num - 1)
                        popup_img.src = `http://localhost:5173/src/assets/Yoga${num}.jpg`
                    } else {
                        alert('not found')
                    }
                }}>{`<`}</h1>
                <div className="popup_img_div" id='popup_img_div_id'>

                    <img src={Gallery1} alt="yoga_img" className='popup_img' id='popup_img_id' />
                    <span className='cross' onClick={() => {
                        document.querySelector('#popup_main_id').style.display = "none"
                    }} >&#10008;</span>
                </div>
                <h1 className='popup_slide_btn popup_slide_btn_right' onClick={() => {
                    console.log('show now')
                    // let popup_img = 
                    if (num < 16) {
                        setNum(num + 1)
                        document.querySelector('.popup_img').src = `http://localhost:5173/src/assets/Yoga${num}.jpg`
                    } else {
                        alert('16+ not found')
                    }
                }} >{`>`}</h1>

            </div>
        </div>
    )
}

export default GalleryPage