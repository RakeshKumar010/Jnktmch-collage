import React from 'react'

const PathologySanc = ({ content }) => {
    return (
        <div className="siderfaculty_right_body">
            <h3 className='name_of_department_heading'>{content.heading}</h3>
            <p style={{ fontSize: "14px" }}>This are our Sanction Post in the {content.paragraph}</p>
            <table>
                <thead>
                    <tr>
                        <th>Designation</th>
                        <th>Sanction</th>
                        <th>Posted</th>
                        <th>vaccant</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Professor</td>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Associate Professor</td>
                        <td>3</td>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Assistant Professor</td>
                        <td>4</td>
                        <td>2</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Tutor</td>
                        <td>6</td>
                        <td>5</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>14</td>
                        <td>8</td>
                        <td>6</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PathologySanc