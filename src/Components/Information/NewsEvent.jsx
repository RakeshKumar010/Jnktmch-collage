import React from 'react'
import { Link } from 'react-router-dom'
import NewsLogo from '../../assets/blankstock180300934-removebg-preview.png'

const NewsEvent = () => {
  return (
    <div className='no_of_bed_main'>
      <div className="gallery_banner_div">
        <h3 className='gallery_page_headiing'>Home / Information /<strong style={{ color: "blue", fontSize: "1.2vw" }}> News & Event</strong></h3>
      </div>
      <header>
        <div style={{ display: "flex" }}>
          <h2>News &&nbsp;</h2>
          <h2>Event</h2>
        </div>
      </header>
      <div className="gallery_page_body">
        <div className='news_item_container'>
          <Link to={'./news-details-1'}>
            <div className="news_item">

              <div className="news_item_text_img">
                <p>भूकंप का रिएक्टर पर 8 की त्रिवृता को भी सह लेगा मेडिकल कॉलेज</p>
                <img src={NewsLogo} alt="news_img" className='news_img' />
              </div>
              <div className="new_item_bottom">
                <p>Date :-  07.03.2022</p>
                <Link to={'./news-details-1'} className="news_read_more_btn" style={{ color: "white" }}>Read More</Link>
              </div>
            </div>
          </Link>
        </div>

        <div className='news_item_container'>
          <Link to={'./news-details-2'}>
            <div className="news_item">

              <div className="news_item_text_img">
                <p>मधेपुरा के मेडिकल कॉलेज में आज से शुरू होगा इलाज,सात जिले की 1.25 करोड़ आबादी को लाभ,मुख्यमंत्री करेंगे उद्घाटन |</p>
                <img src={NewsLogo} alt="news_img" className='news_img' />
              </div>
              <div className="new_item_bottom">
                <p>Date :- 07.03.2022</p>
                <Link to={'./news-details-2'} className="news_read_more_btn" style={{ color: "white" }}>Read More</Link>
              </div>
            </div>
          </Link>
        </div>

    


      </div>

    </div>
  )
}

export default NewsEvent