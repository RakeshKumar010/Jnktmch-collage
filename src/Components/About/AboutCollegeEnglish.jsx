import React from 'react'
import { Link } from 'react-router-dom'

const AboutCollegeEnglish = () => {
    return (
        <div className='about_college_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / About / <strong className="about_college_route"> About College</strong></h3>

            </div>
            <div className='about_college_body'>
                <Link to={'../about-college'}> <button className='language_change_btn'>Read In Hindi Click Here</button></Link>

                <p >  <center>  <strong className='about_college_heading english_heading_about_college'>About College</strong> <br /><br /></center> </p>
                <ul className='about_college_ul about_english_ul'>
                    <li>Jannayak Karpoori Thakur Medical College and Hospital, Madhepura is located near Jajhat, Sabaila, Singheshwar Road NH-106 in Madhepura District of Bihar State.</li> <br />
                    <li>Roadways and railways are available to reach here. Its nearest railway station is Dauram Madhepura, which is about 5 km away and the nearest airport is Darbhanga Airport,
                        which is about 115 km away.</li> <br />
                    <li>Its area is spread over 25 acres of land. 68 percent of its land is greenfield.</li> <br />
                    <li>Earlier the name of this medical college was Government Medical College, Madhepura, which was renamed as Jannayak Karpuri Thakur Medical College and Hospital,
                        Madhepura vide departmental resolution number-326(10) dated 01.06.2015.</li> <br />
                    <li>The foundation stone of this medical college was laid on 16.03.2008, which has been constructed by L & T Construction.
                    </li> <br />
                    <li>It provides a facility of 500 beds in the hospital, in which all the beds have oxygen facilities.</li> <br />
                    <li>ICU, ICCU, NICU, PICU, SICU facility is available here.</li> <br />
                    <li>It has been constructed keeping in mind the facilities equipped with modern technology, which provides state-of-the-art health facilities free of cost to the people of Madhepura,
                        Supaul and Saharsa districts of Koshi region.
                    </li> <br />
                    <li>All types of blood test facilities are available free of cost to the patients here.</li> <br />
                    <li>The hospital service in this institute was inaugurated by Hon'ble Chief Minister, Shri Nitish Kumar on 07.03.2020.</li> <br />
                    <li>The first batch of 100 MBBS students were enrolled in this medical college in 2020. At present MBBS students have been enrolled in three batches.</li> <br />
                    <li>Here MBBS students have facilities to play GYM, Indoor Stadium, Basket Ball, Badminton, Volleyball, Billiards, Football, Caram Board.</li> <br />
                    <li>Here in the college, Anatomy, Physiology, Biochemistry, Pathology, Microbiology, Pharmacology, F.M.T. and P.A.S.M. and Department of Orthopedics,
                        General Surgery, General Medicine, Gynecology and Obstetrics, Eye, Skin Disease, Psychiatry, Pediatrics, Dental Disease, Anesthesia Department, T.B. Chest Disease, Radiology, P.A.M.R.</li> <br />
                    <li>Blood bank facility is started in this medical college from 21.09.2022.
                    </li> <br />
                    <li>Cancer screening and kidney dialysis and C.T Scan facilities are available here.</li> <br />
                    <li>Inside this medical college campus, a building has been constructed for the study of B.Sc Nursing, in which studies will start in the near future.
                    </li> <br />
                    <li>Here Medicals Books & Journals of latest publication are available in Central Library.</li> <br />
                    <li>Here Modal OAT0 and Wi-Fi (1GBPS) facility is available in the entire campus.</li> <br />
                    <li>The rooms in all the buildings of this medical college and hospital are air-conditioned.</li> <br />
                    <li>Physiotherapy and Occupational Therapy facility of 20 beds is available in this hospital.</li> <br />
                </ul>
            </div>
        </div>
    )
}

export default AboutCollegeEnglish