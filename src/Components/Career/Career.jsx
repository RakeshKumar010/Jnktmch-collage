import './Career.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Career = () => {
    const [pageNumber, setPageNumber] = useState(0)

    return (
        <div className='career_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home /<strong className="about_college_route"> Career</strong></h3>
            </div>
            <div className='gradeList_main'>
                <h4 className='staff_list_heading career_heading'>CAREER</h4>
                <div className='career_top_paragraph'>
                    <p>जननायक कर्पूरी ठाकुर चिकित्सा महाविद्यालय एवं अस्पताल, मधेपुरा की बेहतर सुविघा मुहैया कराने हेतु अनुबंध के आधार
                        पर नियुक्ति/पैनल निर्माण किया जा रहा है|</p>

                    <p>जननायक कर्पूरी ठाकुर चिकित्सा महाविद्यालय एवं अस्पताल, मधेपुरा में निम्नलिखित संवर्ग के स्वीकृत पदों के विरूद्ध
                        अनुबंध के आधार पर संबंधित रिक्त पदों पर नियुक्ति हेतु पैनल निर्माण करने के उद्देश्य से सुयोग्य उम्मीदवार को इस
                        विज्ञापन के माध्यम से आनलाईन आवेदन पत्र आमंत्रित करती है | पद संबंधी योग्यता का विवरण निम्न है :-
                    </p>
                </div>

                <ol className='career_ordered_list'>
                    <li><Link href="link_to_1">कॉलेज में भिन्न पदों पर नियुक्ति हेतु पदों की संख्या एवं नियम का विवरण</Link></li>
                    <li><Link href="link_to_2">अस्पताल में भिन्न पदों पर नियुक्ति हेतु पदों की संख्या एवं नियम का विवरण</Link></li>
                    <li>ऑनलाइन आवेदन ( APPLY ONLINE )</li>
                    <strong className='career_note'>Note: – Online Application Process Closed From 05/10/2019 11:59 PM . Those Candidate Who Has Submitted
                        Application Form Can Send All The Relevant Documents To The College Till 10/10/2019 05:00 PM By
                        Post.</strong>
                    <li>अनुबंध के आधार पर नियुक्ति हेतु प्रकाशित विज्ञापन संख्या PR. NO – 008019(Health)2019-20 एवं PR. NO –
                        008041(Health)2019-20 का शुद्धि पत्र |Ammendment 24-Sep-2019 18-51-48
                    </li>
                    <li>अनुबंध के आधार पर विभिन्न पदों पर नियुक्ति हेतु विज्ञापन के आलोक में सूचना | <Link
                        href="link_to_Suchna(1)">Suchna(1) 22-Nov-2019 13-04-42</Link></li>
                    <li>अनुबंध के आधार पर नियोजन हेतु निम्नलिखित पदों की वरीयता सूची _ दिनांक – 21/01/2020</li>
                    <table className='gradeList_table_main notice_page_table career_table'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Post Name</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>VARIY MATRON (वरीय मैट्रन)</td>
                                <td><Link href="link_to_download_page1">Download</Link></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>NURSING SISTER (नर्सिंग सिस्टर)</td>
                                <td><Link href="link_to_download_page2">Download</Link></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>LIBRARIAN (लाइब्रेरियन)</td>
                                <td><Link href="link_to_download_page3">Download</Link></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>ASSISTANT LIBRARIAN (सहायक लाइब्रेरियन)</td>
                                <td><Link href="link_to_download_page4">Download</Link></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>LIBRARIAN ASSISTANT (लाइब्रेरियन सहायक)</td>
                                <td><Link href="link_to_download_page5">Download</Link></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>E.C.G TECHNICIAN (ECG टेक्नीशियन)</td>
                                <td><Link href="link_to_download_page6">Download</Link></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>PHYSIOTHERAPIST (फिजियोथेरापिस्ट)</td>
                                <td><Link href="link_to_download_page7">Download</Link></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>DARK ROOM ASSISTANT (डार्क रूम सहायक)</td>
                                <td><Link href="link_to_download_page8">Download</Link></td>
                            </tr>

                        </tbody>
                    </table>

                    <li>अनुबंध के आधार पर नियोजन हेतु निम्नलिखित पदों की वरीयता सूची_<strong>दिनांक –31/01/2020</strong></li>
                    <table className='gradeList_table_main notice_page_table career_table'>
                        <thead>
                            <tr>
                                <th>S.N.</th>
                                <th>POST NAME</th>
                                <th>DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Hall Attendant (हॉल अटेंडेंट)</td>
                                <td><Link href="link_to_download_page1">Download</Link></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>X-RAY Technician</td>
                                <td><Link href="link_to_download_page2">Download</Link></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Parichari (परिचारी)</td>
                                <td><Link href="link_to_download_page3">Download</Link></td>
                            </tr>
                        </tbody>
                    </table>
                    <li>अनुबंध के आधार पर नियोजन हेतु निम्नलिखित पदों की वरीयता सूची_<strong>दिनांक –11/02/2020</strong></li>
                    <table className='gradeList_table_main notice_page_table career_table'>
                        <thead>
                            <tr>
                                <th>S.N.</th>
                                <th>POST NAME</th>
                                <th>DETAILS</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>1.</td>
                            <td>GRADE -A Nurse (नर्स)</td>
                            <td><Link href="link_to_download_page1">Download</Link></td>
                        </tr>
                    </table>
                    <li>शुद्धि पत्र –<Link href="link "> चयन समिति द्वारा आवेदक कि आपत्ति का निराकरण संबंधी सूचना</Link> |<strong>– दिनांक – 14/02/2020</strong> </li>
                    <li>अनुबंध के आधार नियुक्ति हेतु छः (06) पदों की काउंसेलिंग हेतु दिनांक – 22/02/2020 निर्धारित कि गयी है | –<Link href="link"> DOWNLOAD Details</Link></li>

                </ol>
                <div className="pagination">
                    <h1 style={{color:"gray"}}>{`<`}</h1>
                    <h1>{pageNumber}</h1>
                    <Link to={'/career1'}> <h1 style={{color:"gray"}}>{pageNumber+1}</h1></Link>
                    <Link to={'/career1'}><h1>{`>`}</h1></Link>
                </div>
            </div>

        </div>
    )
}

export default Career