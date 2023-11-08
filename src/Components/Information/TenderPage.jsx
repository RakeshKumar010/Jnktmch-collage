import { useState } from 'react'
import './Information.css'
const TenderPage = () => {
    const [pageNumber, setPageNumber] = useState(0)

    return (
        <div className='noticePage_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Information /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Tender</strong></h3>
            </div>
            <div className="notice_page_body">
                <h1 className='notic_page_heading'>TENDER</h1>
                <table className='notice_page_table'>
                    <tr>
                        <th>SN.</th>
                        <th>Short Descriptions</th>
                        <th>Details</th>
                        <th>Posted Date</th>
                        <th>End Date</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>अस्पातल में अभिलेखों की SCANNING, DIGITISATION & UPLOADING से संबंधित निविदा  </td>
                        <td>Download</td>
                        <td>2023-07-06</td>
                        <td>2023-07-13</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>LPM 280 में लगने वाले सामाग्रियों AIR FILTER, OIL FILTER,OIL SEPERATOR, FILTER MAT,PURITY SENSOR & SERVICE CHARGE की आपूर्ति हेतु कोटेशन 	 </td>
                        <td>Download</td>
                        <td>2023-05-12	</td>
                        <td>2023-05-23</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>चिकित्सा छात्र / छात्राओ , पदाधिकारी , कर्मचारियों एवं आगंतुकों के लिए CAFETERIA संचालन हेतु कोटेशन |</td>
                        <td>Download</td>
                        <td>2023-01-19</td>
                        <td>2023-01-30</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>पैथोलॉजी विभाग में प्रयोग होने वाले रसायण तथा अन्य आवश्यक सामग्री हेतु कोटेशन</td>
                        <td>Download</td>
                        <td>2023-01-14</td>
                        <td>2023-01-21</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>QUATATION FOR 3 PHASE FOUR CORE ELECTRIC CABLE 10 MM & 16 MM	</td>
                        <td>Download</td>
                        <td>2022-10-26</td>
                        <td>2022-11-01</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>केन्द्रीय एवं विभागीय पुस्तकालय के लिए मेडिकल पुस्तक एवं जर्नल की आपूर्ति करने हेतु निविदा</td>
                        <td>Download</td>
                        <td>2022-10-06</td>
                        <td>2022-10-21</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>विभिन्न विभागों में मशीन/रसायन/उपकरण/सामग्री की दर निर्धारण एवं आपूर्ति करने से सम्बंधित निविदा</td>
                        <td>Download</td>
                        <td>2022-09-22</td>
                        <td>2022-09-30</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>QUOTATION FOR AEBAS एवं BBAS BIOMETRIC SYSTEM</td>
                        <td>Download</td>
                        <td>2022-08-18</td>
                        <td>2022-08-23</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>विभिन्न विभागों में मशीन/रसायन/उपकरण/सामग्री की दर निर्धारण एवं आपूर्ति करने से सम्बंधित निविदा</td>
                        <td>Download</td>
                        <td>2022-07-16</td>
                        <td>2022-07-30</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>महाविद्यालय के सी - 01 भवन परिसर में कैंटीन ( 280 वर्ग .मी .) के संचालन हेतु निविदा (TENDER FORM CHARGE - 2500/- ₹)	</td>
                        <td>Download</td>
                        <td>2022-06-24</td>
                        <td >2023-07-31</td>
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

export default TenderPage