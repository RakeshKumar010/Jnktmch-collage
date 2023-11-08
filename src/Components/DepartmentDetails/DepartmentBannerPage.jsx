import DepartmentBanner from '../../assets/Department_Banner.jpg'
import DepartmentSideBarPage from './sidebar/DepartmentSideBarPage'

const DepartmentBannerPage = () => {
    return (
        <div className='department_details_container'>
            <div className='department_banner_div'>
                <img src={DepartmentBanner} alt="department_banner" className='department_banner' />
                <h3 className='department_page_headiing'>Home / <strong style={{ color: "black" }}>Department</strong></h3>
            </div>
            <div className='department_details_main'>
            <DepartmentSideBarPage />
            </div>
        </div>
    )
}

export default DepartmentBannerPage