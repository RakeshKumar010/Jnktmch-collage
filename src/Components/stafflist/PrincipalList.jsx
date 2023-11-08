import React from 'react'
import { useState } from 'react'

const PrincipalList = () => {
    const [pageNumber, setPageNumber] = useState(0)

    return (
        <div className='stafflist_main'>
            <div className="gallery_banner_div">
                <h3 className='gallery_page_headiing'>Home / About /<strong style={{ color: "blue", fontSize: "1.2vw" }}> Principal List</strong></h3>
            </div>
            <div className="gradeList_main">
                <h4 className='staff_list_heading'>PRINCIPAL OFFICE STAFF LIST</h4>

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
                            <td>Dr.(Prof.) Bhupendra Kumar</td>
                            <td>Principal</td>
                            <td></td>
                            <td>+91–8102925091</td>
                            <td>jnktmchmadhepura@gmail.com</td>
                        </tr>
                
                        <tr>
                            <td>2</td>
                            <td>Sri Manikant Azad</td>
                            <td>Upper Division Clerk</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Sri Subhankar Das</td>
                            <td>X-Ray Technician</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Sri Bhavesh Kumar</td>
                            <td>X-Ray Technician</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Sri Ravindra Kumar Nath</td>
                            <td>Lab Technician</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Md. Samiullah</td>
                            <td>Lab Technician</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Sri Basant Kumat Jha</td>
                            <td>Lab Technician</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Uday Kumar Singh</td>
                            <td>Executive Asst.</td>
                            <td>Principal Office</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>9</td>
                            <td>Aryan Kumar</td>
                            <td>Executive Asst.</td>
                            <td>Principal Office</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Prakash Kumar</td>
                            <td>Executive Asst.</td>
                            <td>Admission</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Madhumita Kumari</td>
                            <td>Executive Asst.</td>
                            <td>Physiology</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Rajnish Kumar</td>
                            <td>Executive Asst.</td>
                            <td>Store</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Mukesh Kumar</td>
                            <td>Executive Asst.</td>
                            <td>Campus Incharge</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Guriya Kumari</td>
                            <td>Executive Asst.</td>
                            <td>Orthopaedics</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Madhu Kumari</td>
                            <td>Executive Asst.</td>
                            <td>Radiology</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Soni Kumari</td>
                            <td>Executive Asst.</td>
                            <td>Paediatrics</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Anand Kumar</td>
                            <td>Executive Assistant</td>
                            <td>Anatomy</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Rahul Rohit</td>
                            <td>Executive Assistant</td>
                            <td>Central Library</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>Anoj Kumar</td>
                            <td>Dark Room Assistant</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>Sunil Kumar</td>
                            <td>Executive Assistant</td>
                            <td>Medicine</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>Vishal Kumr Bablu</td>
                            <td>Executive Assistant</td>
                            <td>F.M.T</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>Shankar Kumar Mehta</td>
                            <td>Executive Assistant</td>
                            <td>Biochemistry</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>Anil Kumar Raj</td>
                            <td>Executive Assistant</td>
                            <td>Microbiology</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>Sudama Kumari</td>
                            <td>Executive Assistant</td>
                            <td>F.M.T</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>Ranjit Kumar Don</td>
                            <td>Executive Assistant</td>
                            <td>Principal office</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>Smita Kumari</td>
                            <td>Executive Assistant</td>
                            <td>Dentistry</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>Pooja Kumari</td>
                            <td>Executive Assistant</td>
                            <td>Anaesthesia</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>Sintu Kumar Suman</td>
                            <td>Executive Assistant</td>
                            <td>Pharmacology</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>Vijay Kumar</td>
                            <td>Executive Assistant</td>
                            <td>P.S.M</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td>Pallavi Kumari</td>
                            <td>Executive Assistant</td>
                            <td>OBST & Gynae</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td>Nisha Kumari</td>
                            <td>Executive Assistant</td>
                            <td>Pharmacology Department</td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td>Umesh Prasad</td>
                            <td>Office Attendent</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td>Vijay Kumar Jha</td>
                            <td>Office Attendent</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>Gajendra prasad Yadav</td>
                            <td>Office Attendent</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>35</td>
                            <td>Soni Kumari</td>
                            <td>Office Attendent</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td>Sawan Kumar</td>
                            <td>Office Attendent</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>37</td>
                            <td>Md. Hasnain Ali</td>
                            <td>Office Attendent</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>38</td>
                            <td>Ranjan Kumar</td>
                            <td>Office Attendent</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>39</td>
                            <td>Ranvijay Kumar</td>
                            <td>Hall Attendant</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>40</td>
                            <td>Subhash Kumar Yadav</td>
                            <td>Hall Attendant</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>41</td>
                            <td>Khushbu Kumari</td>
                            <td>Hall Attendant</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>42</td>
                            <td>Kundan Kumar</td>
                            <td>Hall Attendant</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>43</td>
                            <td>Suman Kumar Sah</td>
                            <td>Hall Attendant</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>44</td>
                            <td>Amardip Kumar</td>
                            <td>E.C.G Technician</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>45</td>
                            <td>Vikram Kumar</td>
                            <td>Dark Room Assistant</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>46</td>
                            <td>Kalpna Kumari</td>
                            <td>Dark Room Assistant</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>47</td>
                            <td>Ravina Kumari</td>
                            <td>Dark Room Assistant</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>48</td>
                            <td>Jeewachh Ram</td>
                            <td>Dark Room Assistant</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>49</td>
                            <td>Anoj Kumar</td>
                            <td>Dark Room Assistant</td>
                            <td></td>
                            <td>+91 –</td>
                            <td></td>
                        </tr>



                    </tbody>
                </table>
                <div className="pagination">
                    <h1>{`<`}</h1>
                    <h1>{pageNumber}</h1>
                    <h1>{`>`}</h1>
                </div>
            </div >
        </div>
    )
}

export default PrincipalList