import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SuptdList1 = () => {
    const [pageNumber, setPageNumber] = useState(1)

    return (
        <div className='stafflist_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Hospital /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Suptd List (2)</strong></h3>
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
                            <td>11</td>
                            <td>Satyendra Kumar</td>
                            <td>O.T. Room Attendant</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Diwakar Kumar</td>
                            <td>O.T. Room Attendant</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Anil Kumar</td>
                            <td>Pharmasist</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Neha Kumari</td>
                            <td>Executive Assistant</td>
                            <td>Superintendent Office</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Sumit Raj</td>
                            <td>Executive Assistant</td>
                            <td>Superintendent Office</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Ratan Kumar</td>
                            <td>Executive Assistant</td>
                            <td>Superintendent Office</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Sohan Kumar</td>
                            <td>Executive Assistant</td>
                            <td>Central Store</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Sandip Kumar</td>
                            <td>Executive Assistant</td>
                            <td>Deputy Suptd. Office</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>Dileep Kumar Verma</td>
                            <td>Executive Assistant</td>
                            <td>Psychiatry</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='last_row_first_box'>20</td>
                            <td>Kundan Kumar</td>
                            <td>Executive Assistant</td>
                            <td>Superintendent Office</td>
                            <td>+91 –</td>
                            <td className='last_row_last_box'></td>
                        </tr>

                    </tbody>
                </table>

                <div className="pagination">
                    <Link to={'/suptd-list'}> <h1 style={{ color: "white" }}>{`<`}</h1></Link>
                    <Link to={'/suptd-list'}><h1 style={{ color: "gray" }}>{pageNumber-1}</h1></Link>
                    <Link to={'/suptd-list-1'}><h1>{pageNumber}</h1></Link>
                    <Link to={'/suptd-list-2'}> <h1 style={{ color: "gray" }}>{pageNumber + 1}</h1></Link>
                    <Link to={'/suptd-list-3'}> <h1 style={{ color: "gray" }}>{pageNumber + 2}</h1></Link>
                    <Link to={'/suptd-list-2'}><h1>{`>`}</h1></Link>
                </div>
            </div >
        </div>
    )
}

export default SuptdList1