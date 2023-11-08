import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SuptdList3 = () => {
    const [pageNumber, setPageNumber] = useState(3)

    return (
        <div className='stafflist_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Hospital /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Suptd List (4)</strong></h3>
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
                            <td>31</td>
                            <td>Riya Sen</td>
                            <td>Executive Assistant</td>
                            <td>Superintendent Office</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td>Archana Kumari</td>
                            <td>Executive Assistant</td>
                            <td>Superintendent Office</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td>Priya Kumari</td>
                            <td>Executive Assistant</td>
                            <td>Superintendent Office</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='last_row_first_box'>34</td>
                            <td>Sakshi Kumari</td>
                            <td>Executive Assistant</td>
                            <td>Superintendent Office</td>
                            <td>+91 –</td>
                            <td className='last_row_last_box'></td>
                        </tr>
                    </tbody>
                </table>
             

                <div className="pagination">
                    <Link to={'/suptd-list-2'}> <h1 style={{ color: "white" }}>{`<`}</h1></Link>
                    <Link to={'/suptd-list'}><h1 style={{ color: "gray" }}>{pageNumber-3}</h1></Link>
                    <Link to={'/suptd-list-1'}><h1 style={{ color: "gray" }}>{pageNumber-2}</h1></Link>
                    <Link to={'/suptd-list-2'}><h1 style={{ color: "gray" }}>{pageNumber-1}</h1></Link>
                    <Link to={'/suptd-list-3'}><h1>{pageNumber}</h1></Link>
                   <h1 style={{ color: "gray" }}>{`>`}</h1>
                </div>
            </div >
        </div>
    )
}

export default SuptdList3