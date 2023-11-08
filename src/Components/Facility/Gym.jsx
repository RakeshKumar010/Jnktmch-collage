import BoyGymImg from '../../assets/WhatsApp Image 2023-07-13 at 6.55.43 PM.jpeg'
import './Facility.css'
import GirlGymImg from '../../assets/WhatsApp Image 2023-07-13 at 6.55.43 PM (2).jpeg'
import Img1 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.41 PM (1).jpeg'
import Img2 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.38 PM.jpeg'
import Img3 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.40 PM (1).jpeg'
import Img4 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.40 PM.jpeg'
import Img5 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.41 PM (1).jpeg'
import Img6 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.41 PM.jpeg'
import Img7 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.42 PM.jpeg'
import Img8 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.43 PM (1).jpeg'
import Img9 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.44 PM.jpeg'

const Gym = () => {
    return (
        <div className='gym_main'>
            <div className='hostel_main'>
                <div className="gallery_banner_div">
                    <h3 className='gallery_page_headiing'>Home / Facility /<strong className="about_college_route"> Gym</strong></h3>
                </div>
                <div className="gym_body">
                    <h1 className='gym_heading'>Gym</h1>
                    <div className="boys_gym_body">
                        <div className="boys_gym_left">
                            <img src={BoyGymImg} alt="boyGym" className='gym_main_img' />
                        </div>
                        <div className="boy_gym_right">
                            <main>
                                <section>
                                    <h2>Our Facilities</h2>
                                    <p>Our gym has a variety of facilities to help you reach your fitness goals. We have free weights, cardio equipment, and a variety of fitness classes designed specifically for boys.</p>
                                    <ul>
                                        <li>Free weights</li>
                                        <li>Cardio equipment</li>
                                        <li>Fitness classes</li>
                                        <li>Map of the gym</li>
                                    </ul>
                                </section>
                                <section>
                                    <h2>Our Hours</h2>
                                    <p>Our gym is open Monday through Friday from 6am to 10pm, and Saturday and Sunday from 8am to 8pm.</p>
                                </section>
                                <section>
                                    <h2>Memberships</h2>
                                    <p>We offer a variety of memberships to fit your needs. You can choose from a monthly, quarterly, or annual membership.</p>
                                    <a href="memberships.html">Learn more about our memberships</a>
                                </section>
                            </main>

                        </div>
                    </div>
                    <div className="boys_gym_body">
                        <div className="boys_gym_left">
                            <img src={GirlGymImg} alt="boyGym" className='gym_main_img' />
                        </div>
                        <div className="boy_gym_right">
                            <h1>About Us</h1>

                            <p>Girls Gym is a fitness facility dedicated to helping girls of all ages reach their fitness goals. We offer a variety of classes and programs, including strength training, cardio, and yoga. Our experienced trainers are passionate about helping girls reach their full potential, and we believe that fitness is an important part of a healthy lifestyle.</p>

                            <h2>Our Mission</h2>

                            <p>Our mission is to provide girls with a safe, supportive, and challenging environment where they can learn about fitness and healthy living. We believe that all girls deserve the opportunity to reach their full potential, and we are committed to helping them achieve their goals.</p>


                            <h2>Our Values</h2>

                            <ul>
                                <li><strong>Safety:</strong> We prioritize the safety of our members, and we have a strict safety policy in place.</li>
                                <li><strong>Support:</strong> We offer a supportive environment where girls can feel comfortable asking questions and getting help.</li>
                                <li><strong>Challenge:</strong> We believe that girls should be challenged to reach their full potential, and we offer a variety of classes and programs that are designed to do just that.</li>
                                <li><strong>Fun:</strong> We believe that fitness should be fun, and we create a fun and engaging atmosphere for our members.</li>
                            </ul>

                            <h2>Our Programs</h2>

                            <ul>
                                <li><strong>Strength training:</strong> Our strength training program is designed to help girls build muscle and strength.</li>
                                <li><strong>Cardio:</strong> Our cardio program is designed to help girls improve their cardiovascular health.</li>
                                <li><strong>Yoga:</strong> Our yoga program is designed to help girls improve their flexibility and balance.</li>
                                <li><strong>Personal training:</strong> We offer personal training for girls who want one-on-one attention from a certified trainer.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="gym_all_img">
                        <img src={Img1} alt="img1" className='gym_img1' />
                        <img src={Img2} alt="img1" className='gym_img1' />
                        <img src={Img3} alt="img1" className='gym_img1' />
                        <img src={Img4} alt="img1" className='gym_img1' />
                        <img src={Img5} alt="img1" className='gym_img1' />
                        <img src={Img6} alt="img1" className='gym_img1' />
                        <img src={Img7} alt="img1" className='gym_img1' />
                        <img src={Img8} alt="img1" className='gym_img1' />
                        <img src={Img9} alt="img1" className='gym_img1' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Gym