import { Link, Outlet } from 'react-router-dom'

const DepartmentSideBarPage = () => {
  return (
<>
    <ul className="department_side_bar">
      <li><Link to={'./home'}>Home</Link></li>
      <li ><Link to={'./sanction-post'}>Sanction Post</Link></li>
      <li><Link to={'./faculty'}>Faculty</Link></li>
      <li ><Link to={'./eduipments-lab'}>Eduipments Lab</Link></li>
      <li><Link to={'/department'}>Other Department</Link></li>
    </ul>
    <Outlet/>
    </>
  )
}

export default DepartmentSideBarPage