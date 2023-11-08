import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SuptdList2 = () => {
    const [pageNumber, setPageNumber] = useState(2)

    return (
        <div className='stafflist_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / Hospital /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Suptd List (3)</strong></h3>
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
                            <td>21</td>
                            <td>Sukhsen Kumar Suraj</td>
                            <td>Executive Assistant</td>
                            <td>Control Room</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>Mukesh Kumar Milan</td>
                            <td>Executive Assistant</td>
                            <td>Superintendent Office</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>Ashok Kumar Paswan</td>
                            <td>Executive Assistant</td>
                            <td>Superintendent Office</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>Ashish Kumar</td>
                            <td>Executive Assistant</td>
                            <td>Superintendent Office</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>Amrendra Kumar</td>
                            <td>Executive Assistant</td>
                            <td>Central Store</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>Anand Raj</td>
                            <td>Executive Assistant</td>
                            <td>Pathology</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>Vivek Kumar</td>
                            <td>Executive Assistant</td>
                            <td>Bio-Chemistry</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>Anupriya Raj</td>
                            <td>Executive Assistant</td>
                            <td>Skin &V.D</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>Bulbul Kumari</td>
                            <td>Executive Assistant</td>
                            <td>Ophthalmology</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='last_row_first_box'>30</td>
                            <td>Nidhi Kumari</td>
                            <td>Executive Assistant</td>
                            <td>Surgery</td>
                            <td>+91 –</td>
                            <td className='last_row_last_box'></td>
                        </tr>

                    </tbody>
                </table>
       

                <div className="pagination">
                    <Link to={'/suptd-list-1'}> <h1 style={{ color: "white" }}>{`<`}</h1></Link>
                    <Link to={'/suptd-list'}><h1 style={{ color: "gray" }}>{pageNumber-2}</h1></Link>
                    <Link to={'/suptd-list-1'}><h1 style={{ color: "gray" }}>{pageNumber-1}</h1></Link>
                    <Link to={'/suptd-list-2'}><h1>{pageNumber}</h1></Link>
                    <Link to={'/suptd-list-3'}> <h1 style={{ color: "gray" }}>{pageNumber + 1}</h1></Link>
                    <Link to={'/suptd-list-3'}><h1>{`>`}</h1></Link>
                </div>
            </div >
        </div>
    )
}

export default SuptdList2