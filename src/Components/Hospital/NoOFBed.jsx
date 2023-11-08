import './Hospital.css'
import Img1 from '../../assets/WhatsApp Image 2023-07-13 at 6.55.47 PM.jpeg'
import Img2 from '../../assets/collegegallery17.jpg'

const NoOFBed = () => {
   return (
      <div className='no_of_bed_main'>
         <div className="gallery_banner_div">
            <h3 className='gallery_page_headiing'>Home / Hospital /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Number Of Bed</strong></h3>
         </div>
         <div className='no_of_bed_container'>
         <header>
            <h2>No. of Bed</h2>
         </header>
         <div className="no_of_bed_body">
            <p>Total No. Of Beds in the Hospital are 500. <br /><br />

               All Beds are fully equipped with modern equipment & Instruments in hospital Campus. <br /><br />

               Total No. of Beds outside the Campus ( in Sadar Hospital) are 80. <br /><br />

               Beds Status in the Department wise are mentioned as:

            </p>

            <div className="no_of_bed_footer">
               <img src={Img1} alt="img1" className='no_fo_bed_img1' />
               <img src={Img2} alt="img1" className='no_fo_bed_img1' />

            </div>


         </div>
         <table className='notice_page_table no_of_bed_table'>
            <tr>
               <th>SN.</th>
               <th>Department</th>
               <th>Ward No.</th>
               <th>Bed Required</th>
               <th>Total Beds Available</th>
            </tr>
            <tr>
               <td>1</td>
               <td>Gen. Medicine</td>
               <td>8</td>
               <td>72</td>
               <td>120</td>
            </tr>
            <tr>
               <td>2</td>
               <td>Pediatrics</td>
               <td>5</td>
               <td>34</td>
               <td>60</td>
            </tr>
            <tr>
               <td>3</td>
               <td>TB & Respiratory Medicine	</td>
               <td>1</td>
               <td>8</td>
               <td>20</td>
            </tr>
            <tr>
               <td>4</td>
               <td>Psychiatry</td>
               <td>1</td>
               <td>8</td>
               <td>10</td>
            </tr>
            <tr>
               <td>5</td>
               <td>Dermatology</td>
               <td>1</td>
               <td>8</td>
               <td>10</td>
            </tr>
            <tr>
               <td>6</td>
               <td>Gen. Surgery</td>
               <td>8</td>
               <td>90</td>
               <td>120</td>
            </tr>
            <tr>
               <td>7</td>
               <td>Orthopedics</td>
               <td>4</td>
               <td>30</td>
               <td>60</td>
            </tr>
            <tr>
               <td>8</td>
               <td>Ophthamology</td>
               <td>1</td>
               <td>10</td>
               <td>20</td>
            </tr>
            <tr>
               <td>9</td>
               <td>E.N.T.</td>
               <td>1</td>
               <td>10</td>
               <td>20</td>
            </tr>
            <tr>
               <td>10</td>
               <td>OBS & GYN</td>
               <td>6</td>
               <td>40</td>
               <td>60</td>
            </tr>
            <tr>
               <td>11</td>
               <td>ICCU</td>
               <td></td>
               <td>5</td>
               <td>5</td>
            </tr>
            <tr>
               <td>12</td>
               <td>ICU</td>
               <td></td>
               <td>5</td>
               <td>5</td>
            </tr>
            <tr>
               <td>13</td>
               <td>SICU</td>
               <td></td>
               <td>5</td>
               <td>6</td>
            </tr>
            <tr>
               <td>14</td>
               <td>NICU/PICU</td>
               <td></td>
               <td>5</td>
               <td>6</td>
            </tr>

         </table>
</div>
      </div>
   )
}

export default NoOFBed