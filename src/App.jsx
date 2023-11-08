import React from 'react'
import './App.css'
import Footer from './Components/footer/Footer'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/home/Home'
import DepartmentPage from './Components/departmentPage/DepartmentPage'
import GalleryPage from './Components/gallerypage/GalleryPage'
import Contact from './Components/contact/Contact'
import SpecialDepartment from './Components/specialdepartment/SpecialDepartment'
import AboutCollege from './Components/About/AboutCollege'
import Library from './Components/Facility/Library'
import Hostel from './Components/Facility/Hostel'
import Canteen from './Components/Facility/Canteen'
import Theaters from './Components/Facility/Theaters'
import Laboratory from './Components/Facility/Laboratory'
import NoticePage from './Components/Information/NoticePage'
import TenderPage from './Components/Information/TenderPage'
import Gym from './Components/Facility/Gym'
import NoOFBed from './Components/Hospital/NoOFBed'
import Admisssion from './Components/Academic/Admisssion'
import SideFaculty from './Components/DepartmentDetails/sidebar/SideFaculty'
import GradeList from './Components/stafflist/GradeList'
import PrincipalList from './Components/stafflist/PrincipalList'
import SuptdList from './Components/stafflist/SuptdList'
import AboutPrincipalDesk from './Components/About/AboutPrincipalDesk'
import Superintendent from './Components/home/Superintendent'
import OPD from './Components/Hospital/OPD'
import SuptdList1 from './Components/stafflist/SuptdList1'
import SuptdList2 from './Components/stafflist/SuptdList2'
import SuptdList3 from './Components/stafflist/SuptdList3'
import AntiRagging from './Components/committees/AntiRagging'
import CollegeCouncil from './Components/committees/CollegeCouncil'
import GenderHarassment from './Components/committees/GenderHarassment'
import Ethics from './Components/committees/Ethics'
import PharmaVigilance from './Components/committees/PharmaVigilance'
import MedicalEducation from './Components/committees/MedicalEducation'
import Curriculum from './Components/committees/Curriculum'
import CentralLibrary from './Components/committees/CentralLibrary'
import Career from './Components/Career/Career'
import Career1 from './Components/Career/Career1'
import StaffQuater from './Components/Facility/StaffQuater'
import MyDocument from './Components/Information/MyDocument'
import AboutCollegeEnglish from './Components/About/AboutCollegeEnglish'
import AdministrativeBlock from './Components/About/AdministrativeBlock'
import Campus from './Components/Hospital/Campus'
import Syllabus from './Components/Academic/Syllabus'
import Publications from './Components/Academic/Publications'
import ExminationResult from './Components/Academic/ExminationResult'
import CollegeRoutine from './Components/Academic/CollegeRoutine'
import NewsEvent from './Components/Information/NewsEvent'
import Circulers from './Components/Information/Circulers'
import SideSanctionPost from './Components/DepartmentDetails/sidebar/SideSanctionPost'
import CopyRight from './Components/copyright/CopyRight'
import NewsDetails from './Components/Information/NewsDetails'
import NewsBanner from './assets/10592457-6e74-4c09-815f-646a03d42112.jpg'
import NewsBanner1 from './assets/f1b69f3d-62c4-4d5a-89dc-e130123e4c49.jpg'
import SideEduipmentsLab from './Components/DepartmentDetails/sidebar/SideEduipmentsLab'
import FeeStructure from './Components/Academic/FeeStructure'
import DepartmentBannerPage from './Components/DepartmentDetails/DepartmentBannerPage'
import Biomedical from './Components/committees/Biomedical'

const App = () => {
  return (
    <div className='app_main'>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/department' element={<DepartmentPage />} />
          <Route path='/library' element={<Library />} />
          <Route path='/about-college' element={<AboutCollege />} />
          <Route path='/exmination-result' element={<ExminationResult />} />
          <Route path='/hostel' element={<Hostel />} />
          <Route path='/residence' element={<StaffQuater />} />
          <Route path='/college-routine' element={<CollegeRoutine />} />
          <Route path='/circulers' element={<Circulers />} />
          <Route path='/gym' element={<Gym />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/canteen' element={<Canteen />} />
          <Route path='/syllabus' element={<Syllabus />} />
          <Route path='/theaters' element={<Theaters />} />
          <Route path='/tender' element={<TenderPage />} />
          <Route path='/news-event' element={<NewsEvent />} />
          <Route path='/news-event/news-details-1' element={<NewsDetails img={{src:NewsBanner}} />} />
          <Route path='/news-event/news-details-2' element={<NewsDetails img={{src:NewsBanner1}} />} />
          <Route path='/notice' element={<NoticePage />} />
          <Route path='/career' element={<Career />} />
          <Route path='/laboratory' element={<Laboratory />} />
          <Route path='/department/:department_name' element={<DepartmentBannerPage />}>
            <Route path='home' element={<SpecialDepartment />  } />
            <Route path='faculty' element={<SideFaculty />} />
            <Route path='sanction-post' element={<SideSanctionPost />} />
            <Route path='eduipments-lab' element={<SideEduipmentsLab />} />
          </Route>
          <Route path='/no-of-bed' element={<NoOFBed />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admission' element={<Admisssion />} />
          <Route path='/fee-structure' element={<FeeStructure />} />
          <Route path='/grade' element={<GradeList />} />
          <Route path='/principal' element={<PrincipalList />} />
          <Route path='/principal-desk' element={<AboutPrincipalDesk />} />
          <Route path='/suptd-list' element={<SuptdList />} />
          <Route path='/suptd-list-1' element={<SuptdList1 />} />
          <Route path='/suptd-list-2' element={<SuptdList2 />} />
          <Route path='/suptd-list-3' element={<SuptdList3 />} />
          <Route path='/opd' element={<OPD />} />
          <Route path='/superintendent-desk' element={<Superintendent />} />
          <Route path='/biomedical' element={<Biomedical />} />
          <Route path='/anti-ragging' element={<AntiRagging />} />
          <Route path='/college-council' element={<CollegeCouncil />} />
          <Route path='/gender-harassment' element={<GenderHarassment />} />
          <Route path='/ethics' element={<Ethics />} />
          <Route path='/pharma-vigilance' element={<PharmaVigilance />} />
          <Route path='/medical-education' element={<MedicalEducation />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/career1' element={<Career1 />} />
          <Route path='/central-library' element={<CentralLibrary />} />
          <Route path='/about-college-english' element={<AboutCollegeEnglish />} />
          <Route path='/administrative-block' element={<AdministrativeBlock />} />
          <Route path='/notice/view-doc' element={<MyDocument/>} />
          <Route path='/campus' element={<Campus/>} />
        </Routes>
        <Footer />
        <CopyRight/>
      </BrowserRouter>




    </div>
  )
}

export default App