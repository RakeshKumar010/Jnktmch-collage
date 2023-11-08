import React from 'react'

const PrincipalSanc = ({content}) => {
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
                        <td>Principal</td>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PrincipalSanc