import feeNotice from '../../noticeDoc/Fee Structure(2) 28-Jul-2023 16-50-48(2).pdf'
// Fee Structure(2) 28-Jul-2023 16-50-48(2)
const FeeStructure = () => {
  return (
    <div className='no_of_bed_main'>
    <div className="gallery_banner_div">
        <h3 className='gallery_page_headiing'>Home / Academics /<strong className="about_college_route" > Fee Structure</strong></h3>
    </div>
    <header>
        <h2>Fee Structure</h2>
    </header>
    <div className="no_of_bed_body admission_body fee_structure_body">
        <div className='fee_structure_text_container'>
            <p> The Fee structure are realized at time of admission for MBBS Course academic
                 year 2023-24 in jannayak Karpoori Thakur Medical College, Madhepura as per 
                 the details given below.

            </p>
            <div className='notification_regarding_download_btn'>
            <p style={{margin:"0",
        width:"fit-content"
        }}>Notification Regarding Fee Structure </p>
            <a href={feeNotice}
                        
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="notice_dow_btn fee_notification_download_btn" style={{padding:"0.3vw 1vw"}}>View</button>
                        </a>
            </div>
            
        </div>
        <table className='notice_page_table admission_page_table fee_structure_table' style={{textAlign:"center"}}>
            <tr>
                <th className='fee_slno'>Sl.No.</th>
                <th>Particulars</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td className='fee_slno'>01</td>
                <td>Admission Fee</td>
                <td>1000/-</td>
            </tr>
            <tr>
                <td className='fee_slno'>02</td>
                <td>Tuition Fee</td>
                <td>9000/-</td>

            </tr>
            <tr>
                <td className='fee_slno'>03</td>
                <td>Hostel Fee</td>
                <td>12000/-</td>
            </tr>
            <tr>
                <td className='fee_slno'>04</td>
                <td>Caution Money</td>
                <td>10000/-</td>
            </tr>
            <tr>
                <td className='fee_slno'>05</td>
                <td>Electricity Charge</td>
                <td>1200/-</td>
            </tr>
            <tr>
                <td className='fee_slno'>06</td>
                <td>Magazine Society</td>
                <td>500/-</td>
            </tr>
            <tr>
                <td className='fee_slno'>07</td>
                <td>College Activity</td>
                <td>2000/-</td>
            </tr>
            <tr>
                <td className='fee_slno'>08</td>
                <td>Students welfare Fund</td>
                <td>5000/-</td>
            </tr>
            <tr>
                <td className='fee_slno'>09</td>
                <td>Student Union Fund</td>
                <td>100/-</td>
                
            </tr>
            <tr>
                <td className='fee_slno'></td>
                <td>Total</td>
                <td>40800/-</td>
                
            </tr>

        </table>
    </div>
</div>
  )
}

export default FeeStructure