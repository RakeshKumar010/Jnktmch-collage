import { useEffect } from 'react'
import './Contact.css'

const Contact = () => {
    useEffect(()=>{
        console.log(window.performance);
    })
    return (
        <div className='contact_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home /<strong className="about_college_route"> Contact-Us</strong></h3>
            </div>
            <div className="contact_body">
                <h2 className="contact_body_heading">
                    GET IN TOUCH
                </h2>
                <div className="contact_form_container">
                    <div className="contact_form_left">
                        <h4 className='contact_us_heading'>Address</h4>
                        <p className='contact_us_heading3'>JNKTMCH Madhepura</p>
                        <p>Jan Nayak Karpoori Thakur Medical College & Hospital</p>
                        <p>   Village – Jajhat Sabila, Singeshswar road</p>
                        <p>   Madhepura – 852128 BIHAR, INDIA</p>

                        <p className='contact_us_heading3'>Office Phone <span style={{ fontSize: "10px" }}> (Call timing from 10am to 6pm) </span>:-</p>
                        <p>  +91 8102925093 <small>( For Offical Purpose)</small></p>
                        <p>  +91 8102925092 <small>( For College Students )</small></p>
                        <p className='contact_us_heading3'>Email :-</p>

                        <p><strong>  Principal Mail ID :- </strong>jnktmchmadhepura@gmail.com </p>

                        <p><strong> Superintendent Mail ID :- </strong>suptd.jnktmch@gmail.com</p>
                    </div>
                    <div className="contact_form_right">
                        <h4 className='contact_us_heading' style={{ textAlign: "center" }}>Contact Us</h4>
                        <form className="contact_form">
                            <div className="comment-form-author">
                                <label for="author" className='contact_us_heading3'>Name <span>*</span></label> <br />
                                <input type="text" required="required" size="30" value="" name="author" className='contact_form_input' />
                            </div>
                            <div className="comment-form-email">
                                <label for="email" className='contact_us_heading3' >Email <span >*</span></label> <br />
                                <input type="email" required="required" aria-required="true" value="" name="email" className='contact_form_input' />
                            </div>
                            <div className="comment-form-url">
                                <label for="subject" className='contact_us_heading3'>Subject</label> <br />
                                <input type="text" name="subject" className='contact_form_input' />
                            </div>
                            <div className="comment-form-comment">
                                <label for="comment" className='contact_us_heading3'>Message</label> <br />
                                <textarea required="required" aria-required="true" rows="5" cols="45" name="comment"></textarea>
                            </div>
                            <div className="form-submit" style={{ textAlign: "center" }}>
                                <input type="submit" value="Send Message"  name="submit" className='contact_form_submit' />
                            </div>
                        </form>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Contact