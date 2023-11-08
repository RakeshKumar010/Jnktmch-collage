import './About.css'
import Principal from '../../assets/principal.jpg'
const AboutPrincipalDesk = () => {
    return (
        <div className='about_college_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / About /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Principal Desk</strong></h3>

            </div>
            <div className='about_college_body'>
                <div className='about_college_img'>
                    <img src={Principal} alt="principal" className='about_college_principal' />
                </div>
                <h1 className="principal_desk_span">Principal Desk</h1>
                <p className='about_college_para'> Dear Students,<br /> <br />

                It is with great pleasure and enthusiasm that I address you as the Principal of Jannayak Karpoori Thakur Medical College. I extend a warm welcome to our previous year’s students & heartfelt greeting to those who have recently joined our institution. Together, we will continue to foster a culture of excellence, compassion, & innovation in medical education and healthcare. This college has been a symbol of medical excellence and service to the community. As we move forward, I am committed to building legacy of this college, ensuring that our college remains at the forefront of medical education and research. My vision for this College is to create an environment that nurtures intellectual curiosity, critical thinking, and promotes lifelong learning. <br /> <br /> <br />Our primary focus will be to provide you with the knowledge, skills, and values necessary to become competent and compassionate healthcare professionals. To achieve this vision, we will emphasize a student-cantered approach to education. Our faculty members will engage with you through interactive teaching methods, encouraging active participation, and facilitating a deeper understanding of medical concepts. The art of medicine lies not only in the application of scientific knowledge but also in the ability to connect with patients on a human level. We will encourage you to develop strong communication skills, cultivate a deep sense of empathy, and embrace cultural diversity to provide holistic care to all individuals. <br /> <br /><br />

                    J.N.K.T. Medical College will also continue to invest in research and innovation. We believe that advancing medical knowledge and technology is essential for the betterment of healthcare. Always our aim is to contribute the development of medical breakthroughs that will have a last long impact on patient care.

                    <br /> <br />
                    <span>With warm regards,</span>
                    <br /> <br />



                </p>
                <div className='about_college_lest_div'>
                    <p className='about_college_lest_text'>
                        Dr. (Prof.) Bhupendra Kumar<br /> <br />
                        Principal, &nbsp;   J.N.K.T.M.C.H, Medhepura
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AboutPrincipalDesk