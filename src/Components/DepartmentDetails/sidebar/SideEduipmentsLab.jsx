import { useState } from 'react'
import { useParams } from 'react-router-dom'
import anaesthesiology_lab from  '../../../assets/Department-2/anaESTHETIA DEPT/2023_07_26 2_16 PM Office Lens_page-0001.jpg'
import dentistry_lab  from  '../../../assets/dentistry_lab.jpg'
import DepartmentDetails from '../DepartmentDetails'
import img_anatomy from '../../../assets/Department-2/anatomy/IMG-20230724-WA0012.jpg'
const SideEduipmentsLab = () => {
    const params = useParams()
    const [anaesthesiology, setAnaesthesiology] = useState(params.department_name == 'anaesthesiology')
    const [anatomy, setAnatomy] = useState(params.department_name == 'anatomy')
    const [biochemistry, setBiochemistry] = useState(params.department_name == 'biochemistry')
    const [dentistry, setDentistry] = useState(params.department_name == 'dentistry')
    const [dermatology, setDermatology] = useState(params.department_name == 'dermatology')
    const [emergency, setEmergency] = useState(params.department_name == 'emergency')
    const [forensic, setForensic] = useState(params.department_name == 'forensic')
    const [generalmedicine, setGeneralmedicine] = useState(params.department_name == 'generalmedicine')
    const [generalsurgery, setGeneralsurgery] = useState(params.department_name == 'generalsurgery')
    const [microbiology, setMicrobiology] = useState(params.department_name == 'microbiology')
    const [obsy, setObsy] = useState(params.department_name == 'obsy')
    const [ophthalmology, setOphthalmology] = useState(params.department_name == 'ophthalmology')
    const [orthopedics, setOrthopedics] = useState(params.department_name == 'orthopedics')
    const [otorhino, setotorhino] = useState(params.department_name == 'otorhino')
    const [pediatrics, setPediatrics] = useState(params.department_name == 'pediatrics')
    const [pathology, setPathology] = useState(params.department_name == 'pathology')
    const [pharmacology, setpharmacology] = useState(params.department_name == 'pharmacology')
    const [psychiatry, setPsychiatry] = useState(params.department_name == 'psychiatry')
    const [physiology, setPhysiology] = useState(params.department_name == 'physiology')
    const [radiology, setrRadiology] = useState(params.department_name == 'radiology')
    const [psm, setpsm] = useState(params.department_name == 'psm')
    const [respiratory, setRespiratory] = useState(params.department_name == 'respiratory')
    const [pmr, setPmr] = useState(params.department_name == 'pmr')
    return (

        <div className='Side_eduipments_lab_main'>
            {anaesthesiology ? <>  <DepartmentDetails content={{
                heading: "Anaesthesiology Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: anaesthesiology_lab
            }} mession={[]}/> </> : ''}
            {anatomy ? <>  <DepartmentDetails content={{
                heading: "Anatomy Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: img_anatomy
            }} mession={[]}/> </> : ''}
            {biochemistry ? <>  <DepartmentDetails content={{
                heading: "Bio-Chemistry Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc:'..'
            }} mession={[]} /> </> : ''}
            {dentistry ? <>  <DepartmentDetails content={{
                heading: "Dentistry Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: dentistry_lab
            }} mession={[]}/> </> : ''}
            {dermatology ? <>  <DepartmentDetails content={{
                heading: "Dermatology & Venereology Department (Skin) ",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}
            {emergency ? <>  <DepartmentDetails content={{
                heading: "Emergency Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]} /> </> : ''}
            {forensic ? <>  <DepartmentDetails content={{
                heading: "Forensic Department (F.M.T)",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}
            {generalmedicine ? <>  <DepartmentDetails content={{
                heading: "General Medicine Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}
            {generalsurgery ? <>  <DepartmentDetails content={{
                heading: "General Surgery Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}
            {microbiology ? <>  <DepartmentDetails content={{
                heading: "Micro-Biology Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}
            {obsy ? <>  <DepartmentDetails content={{
                heading: "Obsy. & Gyane. Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}
            {ophthalmology ? <>  <DepartmentDetails content={{
                heading: "Ophthalmology Department (EYE)",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}
            {orthopedics ? <>  <DepartmentDetails content={{
                heading: "Orthopedics Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}
            {otorhino ? <>  <DepartmentDetails content={{
                heading: "Oto-Rhino-Laryngology (ENT) Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}
            {pediatrics ? <>  <DepartmentDetails content={{
                heading: "Pediatrics Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}
            {pathology ? <>  <DepartmentDetails content={{
                heading: "Pathology Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]} /> </> : ''}
            {pharmacology ? <>  <DepartmentDetails content={{
                heading: "Pharmacology Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}
            {pathology ? <>  <DepartmentDetails content={{
                heading: "Pathology Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]} /> </> : ''}
            {psychiatry ? <>  <DepartmentDetails content={{
                heading: "Psychiatry Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}
            {physiology ? <>  <DepartmentDetails content={{
                heading: "Physiology Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}
            {psm ? <>  <DepartmentDetails content={{
                heading: "P.S.M ( Community Medicine )",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}
            {radiology ? <>  <DepartmentDetails content={{
                heading: "Radiology Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}

            


            
            {respiratory ? <>  <DepartmentDetails content={{
                heading: "Respiratory & Tuberculosis (TB) Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}


            {pmr ? <>  <DepartmentDetails content={{
                heading: "Physical Medicine & Rehabitation Department",
                paragraph: "Our hospital boasts a modern and well-equipped infrastructure designed to support a wide range of medical specialties and services. From cutting-edge diagnostic equipment to advanced surgical suites, we have invested in the latest medical technologies to enhance accuracy, efficiency, and patient comfort.",
                imgSrc: '..'
            }} mession={[]}/> </> : ''}



        </div>

        
    )
}

export default SideEduipmentsLab