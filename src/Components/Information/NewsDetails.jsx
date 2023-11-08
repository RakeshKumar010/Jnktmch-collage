

const NewsDetails = ({img}) => {
    return (
        <div className='news_details_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Information / News & Event /<strong style={{ color: "blue", fontSize: "1.2vw" }}> News</strong></h3>
            </div>
            <div className="news_details_container">
                <img src={img.src} alt="news_details_banner" className='news_details_banner' />
                
            </div>
        </div>
    )
}

export default NewsDetails