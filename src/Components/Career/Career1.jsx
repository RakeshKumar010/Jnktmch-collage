import './Career.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Career1 = () => {
    const [pageNumber, setPageNumber] = useState(1)

    return (
        <div className='career_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Information /<strong className="about_college_route" > Career</strong></h3>
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
                <ol start="11" className='career_ordered_list'>

                    <li>शुद्धि पत्र –<Link href="link">चयन समिति द्वारा आवेदकों की दर्ज आपत्ति का निराकरण संबंधी सूचना </Link>| –<strong> दिनांक – 27/02/2020</strong></li>
                    <li>ग्रेड – A – नर्स के अभ्यर्थीयों की मेधा सूची जारी करते हुए दिनांक – 02/03/2020 को काउंसलिंग के लिए आमंत्रित की जाती है ;<Link href="link"> Download Details – 27/02/2020</Link></li>



                    <li><Link href="link">शुद्धि पत्र – जारी Grade A Nurse मेधा सूची में टंकण सुधार करते हुए सूचना </Link>| – <strong>दिनांक – 29/02/2020</strong></li>
                    <li><Link href="link">शुद्धि पत्र – X-Ray टेक्नीशियन, फिजियोथेरापिस्ट, ECG टेक्नीशियन, परिचारी , डार्क रूम सहायक एवं हॉल अटेंडेंट की प्रकाशित मेधा सूची को तकनीकी कारणों से पुनः संशोधित करते हुए प्रकाशित की जायेगी </Link>| | – <strong>दिनांक – 29/02/2020</strong></li>
                    <li>ग्रेड -A- नर्स के अभ्यर्थीयों की संशोधित मेधा सूची <Link href="link">Download Details- 29/02/2020</Link></li>
                    <li>ग्रेड -A- नर्स के अभ्यर्थीयों को संशोधित तिथि – 03/03/2020 को काउंसलिंग के लिए आमंत्रित की जाती है ;<Link href="link"> Download Details – 29/02/2020</Link></li>
                    <li>अनुबंध के आधार पर ग्रेड -A- नर्स की नियोजन संबंधीत सूचना ; <Link href="link">Download Details – 04/03/2020</Link></li>
                    <li>X-Ray टेक्नीशियन, फिजियोथेरापिस्ट, ECG टेक्नीशियन, परिचारी, डार्क रूम सहायक एवं हॉल अटेंडेंट के अभ्यर्थीयों की संशोधित मेधा सूची <Link href="link">Download Details- 07/03/2020</Link></li>
                    <li>X-Ray टेक्नीशियन, फिजियोथेरापिस्ट, ECG टेक्नीशियन, परिचारी, डार्क रूम सहायक एवं हॉल अटेंडेंट के अभ्यार्थियों को दिनांक-13/03/2020 को काउंसलिंग के लिए आमंत्रित की जाती है ; <Link href="link">Download Details – 07/03/2020</Link></li>
                    <li>अनुबंध के आधार पर E.C.G टेक्नीशियन, फिजियोथेरापिस्ट, X-RAY टेक्नीशियन, डार्क रूम सहायक, परिचारी, हॉल अटेंडेंट के पद पर नियोजन संबंधित सूचना | ;<Link href="link">Download Details – 13/03/2020</Link></li>
                    <li>शुद्धि पत्र – <Link href="link">हॉल अटेंडेंट के पद पर नियोजन संबंधित सूचना में टंकण सुधार करते हुए सूचना </Link>| – <strong>दिनांक – 18/03/2020</strong></li>
                    <li>प्रयोगशाला प्रावैधिक(अस्पताल) के पद पर अनुबंध के आधार पर चयन हेतु वरीयता सूची <strong>दिनांक –18/03/2020</strong></li>
                    <table className='gradeList_table_main notice_page_table career_table'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>POST NAME</th>
                                <th>DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>प्रयोगशाला प्रावैधिक(अस्पताल)</td>
                                <td><Link href="link">Download</Link></td>
                            </tr>
                        </tbody>
                    </table>



                    <li>अनुबंध के आधार पर नियोजन हेतु निम्नलिखित पदों की वरीयता सूची_दिनांक –15/10/2020</li>
                    <table className='gradeList_table_main notice_page_table career_table'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>POST NAME</th>
                                <th>DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>Dresser(ड्रेसर )</td>
                                <td><Link href="link">Download</Link></td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Mahila Kaksch Sevika(महिला कक्ष सेविका )</td>
                                <td><Link href="link">Download</Link></td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>Laboratory Attendant(लेबोरेटरी अटेंडेंट)</td>
                                <td><Link href="link">Download</Link></td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>Lab Technician_college(लैब टेक्निशियन)</td>
                                <td><Link href="link">Download</Link></td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>Kaksh Sewak ( कक्ष सेवक )</td>
                                <td><Link href="link">Download</Link></td>
                            </tr>

                        </tbody>
                    </table>
                    <p className='career_note'><strong>Note :-</strong>उपर्युक्त पदों की वरीयता सूची से संबंधित आपत्ति इस Mail ID –<strong>Jnktmchinfo@Gmail.Com</strong> पर दिनांक 22/10/2020 तक दर्ज करा सकते है | इस मेल पर प्राप्त आपत्ति ही मान्य होगा |</p>

                    <li><Link href="link">शुद्धि पत्र–प्रयोगशाला प्रावैधिक(अस्पताल) के पद पर नियोजन संबंधित सूचना में टंकण सुधार करते हुए सूचना</Link> | – <strong>दिनांक–20/10/2020</strong></li>
                    <li>प्रयोगशाला प्रावैधिक(अस्पताल) के अभ्यार्थियों को दिनांक-27/10/2020को काउंसलिंग के लिए आमंत्रित की जाती है|-<Link href="link">Download Details</Link> – <strong>दिनांक–20/10/2020</strong></li>
                    <li>Covid-19 संक्रमण के परिपेक्ष में पन्द्रह (15) सामान्य चिकित्सा पदाधिकारियों के संविदागत नियोजन हेतु औपबंधिक मेधा सूची- <Link href="link">Download Details</Link> – <strong>दिनांक–11/05/2021</strong></li>
                    <li>Covid-19 संक्रमण के परिपेक्ष में पन्द्रह (15) सामान्य चिकित्सा पदाधिकारियों के संविदागत नियोजन हेतु नियोजन पत्र |-<Link href="link">Download Details</Link> – <strong>दिनांक–11/05/2021</strong></li>
                </ol>
                <div className="pagination">
                <Link to={'/career'}><h1>{`<`}</h1></Link>
                <Link to={'/career'}><h1 style={{color:"gray"}}>{pageNumber-1}</h1></Link>
                <h1>{pageNumber}</h1>
                <h1 style={{color:"gray"}}>{`>`}</h1>
            </div>
            </div>
            
        </div>
    )
}

export default Career1