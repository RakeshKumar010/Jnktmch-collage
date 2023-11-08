
const AllSanctionPost = ({content}) => {
    return (
        <div className="siderfaculty_right_body">
             <h3 className='name_of_department_heading'>{content.heading}</h3>
            <p style={{ fontSize: "14px" }}>This are our Senction Post in the {content.paragraph}</p>
            <table>
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Post</th>
                        <th>Sanction</th>
                        <th>Fill</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Professor</td>
                        <td>2</td>
                        <td>5</td>

                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Associate Professor</td>
                        <td>3</td>
                        <td>7</td>

                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Assistant Professor</td>
                        <td>1</td>
                        <td>2</td>

                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Tutor</td>
                        <td>5</td>
                        <td>3</td>

                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Statistician</td>
                        <td>4</td>
                        <td>6</td>

                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Epidemio. cum Lect</td>
                        <td>6</td>
                        <td>3</td>

                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>Lady Medical Officer</td>
                        <td>2</td>
                        <td>3</td>

                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default AllSanctionPost