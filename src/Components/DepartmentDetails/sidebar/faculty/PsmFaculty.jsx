import React from 'react'

const PsmFaculty = ({ content }) => {
    return (
        <div className="siderfaculty_right_body">
            <h3 className='siderfaculty_right_heading'>{content.heading}</h3>
            <p style={{ fontSize: "14px" }}>This are our faculty Members in the {content.paragraph}</p>
            <table>
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Doctor's Name</th>
                        <th>Designation</th>
                        <th>Mobile No.</th>
                        <th>E-Mail ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Dr.Manoj Kumar</td>
                        <td>Professor & H.O.D</td>
                        <td>+91-9006608836</td>
                        <td>dr.mkumar01@gmail.com</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Dr.Kashif Sahnawaz</td>
                        <td>Assistant Prof.</td>
                        <td>+91-9234874192</td>
                        <td>kashif.shahnawaz98@gmail.com</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Dr.Priyambada Priyadarshi</td>
                        <td>Tutor</td>
                        <td>+91-9934250051</td>
                        <td>drpriyambada@gmail.com</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Dr.Ratnesh Kumar</td>
                        <td>Tutor</td>
                        <td>+91-9386623587</td>
                        <td>ratnesh2k2@gmail.com</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Dr.Soni Priyanka</td>
                        <td>Tutor</td>
                        <td>+91-7992442756</td>
                        <td>dr.sonipriyanka.dmch@gmail.com</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Dr.Brajesh Kr. Shahu</td>
                        <td>Medical Officer(UHTC)</td>
                        <td>+91-7631526832</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>7.</td>
                        <td>Dr.Paritosh Kumar</td>
                        <td>Medical Officer(RHTC)</td>
                        <td>+91-8340698294</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>8.</td>
                        <td>Dr.Balmukund Kumar</td>
                        <td>Medical Officer(RHTC)</td>
                        <td>+91-7903576870</td>
                        <td>balmukundkr3211nul@gmail.com</td>
                    </tr>
                    <tr>
                        <td>9.</td>
                        <td>Dr.Vivek Vishal</td>
                        <td>Medical Officer(RHTC)</td>
                        <td>+91-</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>10.</td>
                        <td>Dr.Ravi Kumar</td>
                        <td>Medical Officer</td>
                        <td>+91-9166645197</td>
                        <td>ravi.12346kumar@gmail.com</td>
                    </tr>
                    <tr>
                        <td>11.</td>
                        <td>Dr.Punita Kumari</td>
                        <td>Lady Medical Officer</td>
                        <td>+91-6363598569</td>
                        <td>drpunitak@gmail.com</td>
                    </tr>

                    <tr>
                        <td>12.</td>
                        <td>Dr.Annu Kumari</td>
                        <td>Lady Medical Officer(UHTC)</td>
                        <td>+91-7991146421</td>
                        <td>annukumari14433@gmail.com</td>
                    </tr>
                    <tr>
                        <td>13.</td>
                        <td>Dr.Naina Kumari</td>
                        <td>Lady Medical Officer(RHTC)</td>
                        <td>+91-8169190856</td>
                        <td>nainanains10@gmail.com</td>
                    </tr>
                    <tr>
                        <td>14.</td>
                        <td>Dr.Preeti Priya</td>
                        <td>Lady Medical Officer(RHTC)</td>
                        <td>+91-8298398747</td>
                        <td>preetipriya06@gmail.com</td>
                    </tr>
                    <tr>
                        <td>15.</td>
                        <td>Dr.Saraswati Suman</td>
                        <td>Lady Medical Officer(RHTC)</td>
                        <td>+91-8210109920</td>
                        <td>sumansati940@gmail.com</td>
                    </tr>






                </tbody>
            </table>
        </div>
    )
}

export default PsmFaculty