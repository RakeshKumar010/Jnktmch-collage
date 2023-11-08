import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SuptdList = () => {
    const [pageNumber, setPageNumber] = useState(0)

    return (
        <div className='stafflist_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Hospital /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Suptd List (1)</strong></h3>
            </div>
            <div className="gradeList_main">
                <h4 className='staff_list_heading'>SUPTD OFFICE STAFF LIST</h4>

                <table className='library_table_main gradeList_table_main'>
                    <thead>
                        <tr className='gradeList_table_header'>
                            <th>SL.</th>
                            <th>Name of Staff</th>
                            <th>Designation</th>
                            <th>Allocated Dept.</th>
                            <th>Mobile No.</th>
                            <th>E-Mail ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dr. Malti Kumari</td>
                            <td>Superintendent</td>
                            <td></td>
                            <td>+9 –9471860033</td>
                            <td>suptd.jnktmch@gmail.com</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Dr. Krishna Prasad Thakur</td>
                            <td>Deputy superintendent</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Prabhash Kumar</td>
                            <td>X-Ray Technician</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Santosh Kumar</td>
                            <td>X-Ray Technician</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Md. Shakil Ahmed</td>
                            <td>X-Ray Technician</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Vivek Kumar</td>
                            <td>X-Ray Technician</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Amrata Porwal</td>
                            <td>X-Ray Technician</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>DeepPrabha Kumari</td>
                            <td>X-Ray Technician</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Neha Gupta</td>
                            <td>Physiotherapist</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td className='last_row_first_box'>10</td>
                            <td>Jayant Kumar</td>
                            <td>E.C.G Technician</td>
                            <td></td>
                            <td>+91 –</td>
                            <td className='last_row_last_box'></td>
                        </tr>

                    </tbody>
                </table>
                <div className="pagination">
                    <h1 style={{color:"gray"}}>{`<`}</h1>
                    <h1>{pageNumber}</h1>
                    <Link to={'/suptd-list-1'}> <h1 style={{color:"gray"}}>{pageNumber+1}</h1></Link>
                    <Link to={'/suptd-list-2'}> <h1 style={{color:"gray"}}>{pageNumber+2}</h1></Link>
                    <Link to={'/suptd-list-3'}> <h1 style={{color:"gray"}}>{pageNumber+3}</h1></Link>
                    <Link to={'/suptd-list-1'}><h1>{`>`}</h1></Link>
                </div>
            </div >
        </div>
    )
}

export default SuptdList