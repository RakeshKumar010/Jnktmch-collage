import { Link } from 'react-router-dom'
import ANAESTHESIOLOGY_DEPARTMENT from '../../../assets/img_10.jpg'
import ANATOMY_DEPARTMENT from '../../../assets/img_11.jpg'
import BIO_CHEMISTRY_DEPARTMENT from '../../../assets/img_12.jpg'
import DENTISTRY_DEPARTMENT from '../../../assets/img_13.jpg'
import FORENSIC_DEPARTMENT from '../../../assets/img_14.png'
import EMERGENCY_DEPARTMENT from '../../../assets/img_15.jpg'
import './HomeDepartment.css'
const Department = () => {
    return (
        <div className='department_main'>
            <h4 className='department_heading'>DEPARTMENT</h4>
            <p className='department_para'>There are total twenty three departments in the college. All the departments are actively function with all facilities i.e lab equipments, teaching faculty & others.</p>
            <div className="department_item">
                <div className="department_img_div ANAESTHESIOLOGY_DEPARTMENT">
                    <Link to={'./department/anaesthesiology'}>
                        <img src={ANAESTHESIOLOGY_DEPARTMENT} className="department_img" alt="department_img" />
                    </Link>
                </div>


                <div className="department_img_div ANATOMY_DEPARTMENT">
                    <Link to={'./department/anatomy'}>
                        <img src={ANATOMY_DEPARTMENT} className="department_img" alt="department_img" />
                    </Link>
                </div>

                <div className="department_img_div BIO_CHEMISTRY_DEPARTMENT">
                    <Link to={'./department/biochemistry'}>
                        <img src={BIO_CHEMISTRY_DEPARTMENT} className="department_img" alt="department_img" />
                    </Link>
                </div>
                <div className="department_img_div DENTISTRY_DEPARTMENT">
                    <Link to={'./department/dentistry'}>
                        <img src={DENTISTRY_DEPARTMENT} className="department_img" alt="department_img" />
                    </Link>
                </div>
                <div className="department_img_div FORENSIC_DEPARTMENT">
                    <Link to={'./department/forensic'}>
                        <img src={FORENSIC_DEPARTMENT} className="department_img" alt="department_img" />
                    </Link>
                </div>
                <div className="department_img_div EMERGENCY_DEPARTMENT">
                    <Link to={'./department/emergency'}>
                        <img src={EMERGENCY_DEPARTMENT} className="department_img" alt="department_img" />
                    </Link>
                </div>
            </div>
            <Link to={'./department'} className="department_btn">View All</Link>

        </div>
    )
}

export default Department