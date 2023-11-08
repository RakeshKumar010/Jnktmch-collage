import React from 'react'

const CentralLibrary = () => {
  return (
    <div className='committees_main'>
    <div className="gallery_banner_div">
      <h3 className='gallery_page_headiing'>Home / Committees /<strong className="about_college_route"> Central Library</strong></h3>
  </div>
    <div className='gradeList_main'>
            <h4 className='staff_list_heading'>Central Library Committee</h4>

        <table className='library_table_main gradeList_table_main'>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Name Of Persons</th>
                            <th>Designation</th>
                            <th>Conviction</th>
                            <th>Mobile No.</th>
                            <th>E-Mail ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dr. Manoj Kumar</td>
                            <td>Professor (P.S.M)</td>
                            <td>Member</td>
                            <td>+91-</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Dr. Gulam Tabrez</td>
                            <td>Assoc. Professor(Pathology)</td>
                            <td>Member</td>
                            <td>+91-</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Dr. Dinesh Kumar</td>
                            <td>Assoc. Professor (Pharmacology)</td>
                            <td>Member</td>
                            <td>+91-</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Dr. Prakash Kumar Mishra</td>
                            <td>Assistant Professor (Micro-Biology)</td>
                            <td>Member</td>
                            <td>+91-</td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>
    </div>
    </div>
  )
}

export default CentralLibrary