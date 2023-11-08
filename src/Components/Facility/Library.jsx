import './Facility.css'
import libraryImg from '../../assets/Yoga15.jpg'
import libraryImg1 from '../../assets/img_19.jpg'
import libraryImg2 from '../../assets/img_20.jpg'
import libraryImg3 from '../../assets/library_mag.jpg'
const Library = () => {
    return (
        <div className='library_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Facility /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Library</strong></h3>
            </div>
            <div className='library_body'>
                <div className="library_left_content">
                    <img src={libraryImg} alt="library_img" className='library_img' />
                    <table className='library_table_main'>
                        <tr>
                            <th>Department</th>
                            <th>Number of Books/Journals Available</th>
                        </tr>
                        <tr>
                            <td>Central Library  </td>
                            <td>5000</td>

                        </tr>
                        <tr>
                            <td>Total Journals (Indian)</td>
                            <td>103</td>
                        </tr>
                        <tr>
                            <td>Total Journals (Foreign)</td>
                            <td>430</td>
                        </tr>
                        <tr>
                            <td>Department Library</td>
                            <td>1825</td>
                        </tr>
                        <tr>
                            <td className='table_last_child1'>E- Library ( Total Computers)</td>
                            <td className='table_last_child2'>21</td>
                        </tr>
                    </table>

                </div>
                <div className="library_right_content">
                    <div className="library_header">
                        <h3 className='library_right_content_heading'>LIBRARY</h3>
                    </div>
                    <p className='library_right_content_para'>
                        On the authority of famous writer Sidney Sheldon, “Libraries store the energy that fuels the imagination.
                        They open up windows to the world and inspire us to explore and achieve and contribute to improving our quality of life.” <br /> <br />

                        The college Library is situated on the second & third floor of administrative Block. It is fully Air
                        -conditioned Hall with many latest trends facility. All the books, Journals & Furniture are available
                        into the college.Its contain 5000 books into the central library & 1825 books into the Department library.
                        There is also a facility o E-library, where students can be read the books/journals into digital form.
                        Total 21 computers are available into the E-Library Sections.
                        <br /> <br />
                        We have added more books & Journals into central & Department Library.Currently we are in the process
                        of recruitment for the Librarian, Assistant Librarian & Librarian assistant.
                    </p>
                    <h5 style={{ fontWeight: "bold", margin: "3vh 0" }}> E-Library Features</h5>

                    <ol className='library_points'>
                        <li>Libraries store the energy that fuels the imagination</li>
                        <li>It is fully Air
                            -conditioned Hall with many latest trends facility</li>
                        <li>Journals & Furniture are available
                            into the college</li>
                        <li>Total 21 computers are available into the E-Library Sections.</li>
                    </ol>
                    <div className="library_right_bottom_img">
                        <img src={libraryImg1} alt="library_image" className='library_image1' />
                        <img src={libraryImg3} alt="library_image" className='library_mag' />
                        <img src={libraryImg2} alt="library_image" className='library_image1' />
                    </div>
                </div>


            </div>
            <div className='library_contact_details'>
                <p>For more information about library related inquiry :-</p>
                <p>Email ID:– centrallibraryjnktmch@gmail.com</p>
                <p>Mob. No:- +91 – 9472807613</p>
            </div>
        </div>

    )
}

export default Library