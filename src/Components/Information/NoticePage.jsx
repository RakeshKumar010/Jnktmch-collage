import React, { useState } from "react";
import { Link } from "react-router-dom";
import './information.css'
import doc1 from '../../noticeDoc/doc1.pdf'
import newGif from '../../assets/new_gif.gif'
const NoticePage = () => {


    // const [fileUrl, setFileUrl] = useState("../../noticeDoc/doc1.pdf");
    const [pageNumber, setPageNumber] = useState(0)
    return (
        <div className='noticePage_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Information /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Notice</strong></h3>
            </div>
            <div className="notice_page_body">
                <h1 className='notic_page_heading'>NOTICE</h1>
                <table className='notice_page_table' style={{textAlign:"center"}}>
                    <tr>
                        <th>SN.</th>
                        <th>Date</th>
                        <th>Subject</th>
                        <th>View</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2023-07-21</td>
                        <td>स्नातक पाठ्यक्रम में नामांकन हेतु नामांकन एवं अन्य शुल्क का निर्धारण किया गया है|  <img src={newGif} alt="new_gif" className="new_gif" /> </td>

                        <td><a
                            href={doc1}
                            View='DOC-20230318-WA0027.'
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="notice_dow_btn">View</button>
                        </a>
                        </td>

                        {/* <Link to={'./view-doc'}><td>View</td></Link> */}
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2023-06-21</td>
                        <td>FMG छात्र / छात्राओं के लिए MEDICAL INTERNSHIP करने हेतु सूचना | </td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2023-06-19</td>
                        <td>आम सूचना : - दिव्यंगता प्रमाण पत्र हेतु दिव्यंगता की जाँच संबंधित सूचना |</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>2023-06-07</td>
                        <td>FOREIGN MEDICAL GRADUATES (FMG) छात्र / छात्रा के लिए MEDICAL INTERNSHIP करने हेतु सूचना | </td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>2022-12-10</td>
                        <td>कार्यालय वेश्म में दिनांक - 14/12/2022 को होने वाली क्रय समिति के बैठक में उपस्थित रहने के सम्बन्ध में |</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>2022-11-01</td>
                        <td>दर निर्धारण संबंधित तकनीकी निविदा हेतु प्राप्त कोटेशन को खोलने संबंधित बैठक में भाग लेने हेतु</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>2022-10-26</td>
                        <td>पुस्तक के क्रय हेतु निविदा को खोलने संबंधी बैठक में भाग लेने संबंधित सूचना </td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>2022-08-08</td>
                        <td>महाविद्यालय के परिसर में कैंटीन संचालन हेतु निविदा को खोलने संबंधी बैठक में भाग लेने संबंधित सूचना	</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>2022-08-08</td>
                        <td>स्टेशनरी , रसायन , एवं अन्य सामग्रियों की क्रय हेतु निविदा को खोलने संबंधी बैठक में भाग लेने संबंधित सूचना</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>2022-07-18</td>
                        <td>PIL (CASE NO - CWJC-7338/2022) FILLED AS ON DATED 11TH MAY 2022</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>2022-02-08</td>
                        <td>MACHINE क्रय करने से सम्बंधित कोटेशन अपरिहार्य कारणों से दिनांक 09/02/22 से 11/02/22 को बढ़ा दी गयी है ।</td>
                        <td>View</td>
                    </tr>

                </table>
                <div className="pagination">
                    <h1>{`<`}</h1>
                    <h1>{pageNumber}</h1>
                    <h1>{`>`}</h1>
                </div>
            </div>

        </div>
    )
}

export default NoticePage