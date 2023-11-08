import React from 'react'
import { useParams } from 'react-router-dom'
import DepartmentDetails from '../DepartmentDetails/DepartmentDetails'
import img from '../../assets/hod/WhatsApp Image 2023-07-12 at 8.42.38 PM (1).jpeg'
import img_physiology from '../../assets/hod/WhatsApp Image 2023-07-12 at 8.42.49 PM.jpeg'
import img_pharmacology from '../../assets/hod/WhatsApp Image 2023-07-12 at 8.42.52 PM.jpeg'
import img_anatomy_hod from '../../assets/hod/img_anatomy_hod.jpg'
import img_emergency from '../../assets/Department-2/emergency/emergency-12.jpg'
import img_biochemistry from '../../assets/hod/WhatsApp Image 2023-07-12 at 8.42.57 PM.jpeg'
import img_microbiology from '../../assets/Department-2/micro biology/WhatsApp Image 2023-07-12 at 8.42.38 PM.jpeg'
import img_pathology from '../../assets/Department-2/pathology/IMG-20230724-WA0002.jpg'
import img_anaesthesiology from '../../assets/Department-2/anaESTHETIA DEPT/2023_07_26 2_16 PM Office Lens_page-0004.jpg'
import img_psm from '../../assets/hod/WhatsApp Image 2023-07-12 at 8.43.01 PM.jpeg'
import img_obsy from '../../assets/obsyHod.jpg'
import { useState } from 'react'
import DepartmentBannerPage from '../DepartmentDetails/DepartmentBannerPage'
import DepartmentSideBarPage from '../DepartmentDetails/sidebar/DepartmentSideBarPage'
import AllPageRap from './AllPageRap'
import DENTISTRY_img from '../../assets/Department-2/DENTISTRY DEPT/DENTISTRY HOD.jpg'
import opthalmology_img from '../../assets/Department-2/opthalmology dept/WhatsApp Image 2023-07-26 at 13.17.26.jpg'
// import img from 
const SpecialDepartment = () => {
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
    <>

      {anaesthesiology ? <>
        <div className='department_details_main'>

          <DepartmentDetails content={{
            heading: "Anaesthesiology Department",
            paragraph: "The anesthesiology department is a medical specialty that provides anesthesia, critical care medicine, pain medicine, and perioperative care to patients before, during, and after surgery. Anesthesiologists are physicians who have completed at least four years of medical school and four years of residency training in anesthesiology.",
            imgSrc: img_anaesthesiology,
            hodname:"Dr. Nagina Choudhary"
          }}
           mession={["Make the perioperative anaesthetic journey of the patient safe, comfortable and pain free",
            "Share a healthy and a professional relationship with the medical and paramedical staff for the prompt and efficient delivery of patient care.",
            "To nurture the resident doctors to make them efficient and competent Anaesthesiologist"]} 
            paraStyle={"department_details_hod_img_p"}
/>  
            </div>
      </> : ''}

      {biochemistry ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Bio-Chemistry Department",
            paragraph: "The Department of Biochemistry is a diverse group of scientists, trainees, and staff dedicated to discovering the basic mechanisms of biological processes through fundamental research and disseminating that knowledge via education and service to our community. It helps to understand the chemical aspects of different biological processes such as digestion, respiration, reproduction, excretion, the behaviour of hormones, contraction, and relaxation of muscles, and many more.",
            imgSrc: img_biochemistry,
            hodname:"Dr. Sishir Kumar Suman",
          }} mession={["Excellent Health care Education and Service System for Community Development.", "It plays a vital role in health and nutrition."]}
          paraStyle={"department_details_hod_img_p"} />  </div>
          
      </> : ''}

      {anatomy ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Anatomy Department",
            paragraph: "Anatomy Departments Provide an environment for exceptional research among faculty members, students and research scholar. The main responsibilites of departments are below mentaion.",
            imgSrc: img_anatomy_hod,
            hodname:"Dr ",
          }} mession={["To provide a strong foundation for new entrants by teaching basic sciences.",
            "This department provides the training to  PG & Ph.D. students for highest educational standards.",
            "Research attitude in UG students and faculty members which could be of service to humanity.",
            "Provide an environment for exceptional research among faculty members, students and research scholar."]} 
            paraStyle={"department_details_hod_img_p"}/>  </div>
      </> : ''}

      {dentistry ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Dentistry Department",
            paragraph: "Dentistry is a branch of medicine that is involved in the study, diagnosis, prevention, and treatment of diseases, disorders and conditions of the oral cavity, commonly in the dentition but also the oral mucosa, and of adjacent and related structures and tissues, particularly in the maxillofacial (jaw and facial) area.",
            imgSrc: DENTISTRY_img,
            hodname:"Dr. Ahtesham Anwar"
          }} mession={["To Provide oral health guidance and instruction to patients and carrying out preventative and restorative care.",
          "Dentist  treat a variety of diseases affecting not only the teeth but the gums and the mouth as a whole"]} 
          paraStyle={"department_details_hod_img_p"}/>    </div>
      </> : ''}

      {dermatology ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Dermatology & Venereology Department (Skin) ",
            paragraph: "Dermatologists treat patients with a wide variety of skin, hair and nail conditions. For those seeking specialization, they can choose to specialize in one or all of the following four main branches: dermatopathology, paediatrics dermatology, &  cosmetic dermatology.",
            hodname:"Dr."
          }} mession={["•	Analyze the results from diagnostic skin tests",
          "Provide treatments based on tests.",
          "Recommend treatments.",
          "Inform on different treatment options and solutions.",
          "Advice on skin health tips and best practices.",
          "Recommend appropriate products."]}
          paraStyle={"department_details_hod_img_p"} /> </div>
      </> : ''}

      {emergency ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Emergency Department",
            paragraph: "An emergency department, also known as an accident and emergency department, emergency room, emergency ward or casualty department, is a medical treatment facility specializing in emergency medicine, the acute care of patients who present without prior appointment; either by their own means or by that of an ambulance. serious injuries and life-threatening emergencies only. It is also known as the emergency department or casualty. Life-threatening emergencies are different for adults and children.",
            imgSrc: img_emergency,
            hodname:"Dr.Md.Tarik"
          }} mession={["24 hours service",
          "	At least one physician experienced in emergency care on call in the ER.",
          "Internal medicine coverage for senior or senior-level residents for medical, surgical, orthopedic, obstetric-gynecologic, pediatric, and anesthesiology services."]}
          paraStyle={"department_details_hod_img_p"} /></div>
      </> : ''}

      {forensic ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Forensic Department (F.M.T)",
            paragraph: "Forensic Department’s  scientists examine and analyze evidence from crime scenes and elsewhere to develop objective findings that can assist in the investigation and prosecution of perpetrators of crime or absolve an innocent person from suspicion.",
            imgSrc: img,
            hodname:"Dr."
          }} mession={["Collecting trace evidence from scenes of crime or accidents and recording findings.",
          "Analysing samples such as hair, body fluids, glass, paint and drugs in the laboratory."]} 
          paraStyle={"department_details_hod_img_p"}/> </div>
      </> : ''}

      {generalmedicine ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "General Medicine Department",
            paragraph: "General Medicine deals with almost all range of both acute and chronic diseases including fever, asthma, heart disease, liver problems, hypertension, neurological problems, and other ailments. OPD id directly involve with the General Medicine department. After the examination of the Patients, its provided the medicine facility to the Patients.",
            hodname:"	Dr.Krishna Prashad"
          }} mession={["Deals with the prevention, diagnosis and the non-surgical treatments of diseases that are related to the internal organs."]}
          paraStyle={"department_details_hod_img_p"} /> </div>
      </> : ''}

      {generalsurgery ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "General Surgery Department",
            paragraph: "General surgery, as the name denotes, encompasses a broad spectrum of operative procedures with regard to the diagnosis and treatment of injuries and diseases in any region of the body. Its scope of interest includes the skin, breasts, abdomen, peripheral vasculature, and head and neck, among other areas.",
            hodname:"Dr.Ganesh Kumar"
          }} mession={["Open surgery - an 'open' surgery means the cutting of skin and tissues so that the surgeon has a full view of the structures or organs involved.",
          "Minimally invasive surgery - minimally invasive surgery is any technique involved in surgery that does not require a large incision."]} 
          paraStyle={"department_details_hod_img_p"}/> </div>
      </> : ''}

      {microbiology ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Microbiology Department",
            paragraph: "The microbiology department is a medical specialty that provides anesthesia, critical care medicine, pain medicine, and perioperative care to patients before, during, and after surgery. Anesthesiologists are physicians who have completed at least four years of medical school and four years of residency training in anesthesiology.",
            imgSrc: img_microbiology,
            hodname:"Dr.Kanhaiya Jha"
          }} mession={[]} 
          paraStyle={"department_details_hod_img_p"}/> </div>
      </> : ''}

      {obsy ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Obsy. & Gyane. Department",
            paragraph: "The obsy department is a medical specialty that provides anesthesia, critical care medicine, pain medicine, and perioperative care to patients before, during, and after surgery. Anesthesiologists are physicians who have completed at least four years of medical school and four years of residency training in anesthesiology.",
            imgSrc: img_obsy,
            hodname:"Dr.Kamlini"
          }} mession={[]} 
          paraStyle={"department_details_hod_img_p"}/> </div>
      </> : ''}

      {ophthalmology ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Ophthalmology Department (EYE)",
            paragraph: "Ophthalmology department is the area of medicine and surgery concerned with the eye and its relationship with the brain. Ophthalmologists are the only practitioners medically trained to diagnose and treat all eye and visual problems including vision services (glasses and contacts) and provide treatment and prevention of medical disorders of the eye including surgery.",
            imgSrc: opthalmology_img,
            hodname:"Dr.Bhupendra Prashad"
          }} mession={[]} 
          paraStyle={"department_details_hod_img_p"}/> </div>
      </> : ''}

      {orthopedics ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Orthopedics Department",
            paragraph: "Trauma and orthopaedic (T&O) surgeons diagnose and treat conditions of the musculoskeletal system including bones and joints and structures that enable movement Orthopedic surgeons are doctors who specialize in the musculoskeletal system - the bones, joints, ligaments, tendons, and muscles that are so essential to movement and everyday life. ",
            imgSrc:"",
            hodname:"Dr.Deepak Kumar"


          }} mession={[]}
          paraStyle={"department_details_hod_img_p"} /> </div>
      </> : ''}

      {otorhino ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Oto-Rhino-Laryngology (ENT) Department",
            paragraph: "This department  specialisation in the examination of disorders of the ear or nose or throat. ENT is the Synonyms of  OTO-RHINO-LARYNGOLOG .  ",
            hodname:"Dr.Jitendra Kumar"
          }} mession={[]} 
          paraStyle={"department_details_hod_img_p"}/> </div>
      </> : ''}

      {pediatrics ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Pediatrics Department",
            paragraph: "The pediatrics department is a medical specialty that provides anesthesia, critical care medicine, pain medicine, and perioperative care to patients before, during, and after surgery. Anesthesiologists are physicians who have completed at least four years of medical school and four years of residency training in anesthesiology.",
            hodname:"Dr.Vipin Kumar Verma"
          }} mession={[]} 
          paraStyle={"department_details_hod_img_p"}/>  </div>
      </> : ''}

      {pmr ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Physical Medicine & Rehabitation Department",
            paragraph: "The Physical Medicine & Rehabitation Department is a medical specialty that provides anesthesia, critical care medicine, pain medicine, and perioperative care to patients before, during, and after surgery. Anesthesiologists are physicians who have completed at least four years of medical school and four years of residency training in anesthesiology.",
            hodname:"Dr."
          }} mession={[]} 
          paraStyle={"department_details_hod_img_p"}/>  </div>
      </> : ''}

      {pathology ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Pathology Department",
            paragraph: "The pathology department is a medical specialty that provides anesthesia, critical care medicine, pain medicine, and perioperative care to patients before, during, and after surgery. Anesthesiologists are physicians who have completed at least four years of medical school and four years of residency training in anesthesiology.",
            imgSrc: img_pathology,
            hodname:"Dr.Ghulam Tabraiz"
          }} mession={[]} 
          paraStyle={"department_details_hod_img_p"}/>  </div>
      </> : ''}






      {pharmacology ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Pharmacology Department",
            paragraph: "The pharmacology department is a medical specialty that provides anesthesia, critical care medicine, pain medicine, and perioperative care to patients before, during, and after surgery. Anesthesiologists are physicians who have completed at least four years of medical school and four years of residency training in anesthesiology.",
            imgSrc: img_pharmacology,
            hodname:"Dr.Dinesh Kumar"
          }} mession={[]} 
          paraStyle={"department_details_hod_img_p"}/> </div>
      </> : ''}

      {psychiatry ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Psychiatry Department",
            paragraph: "The psychiatry department is a medical specialty that provides anesthesia, critical care medicine, pain medicine, and perioperative care to patients before, during, and after surgery. Anesthesiologists are physicians who have completed at least four years of medical school and four years of residency training in anesthesiology.",
            hodname:"Dr.Satish Kumar Sinha"
          }} mession={[]} 
          paraStyle={"department_details_hod_img_p"}/> </div>
      </> : ''}





      {physiology ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Physiology Department",
            paragraph: `The Department of Physiology is an important branch of medical science that deals with the study of
            the functions and mechanisms of the human body. Physiology helps to understand how the body
            works, how it responds to various stimuli, and how it maintains homeostasis. Physiology also
            provides the basis for understanding the pathophysiology of diseases and disorders, and for
            developing effective treatments and interventions.
            The Department of Physiology in J.N.K.T. Medical colleges, Madhepura, is responsible for teaching
            physiology to various undergraduate students of medicine, nursing, and allied health sciences. The
            department also conducts research in various fields of physiology, such as autonomic neuroscience,
            biological ageing, psychophysiology, medical education, cognitive function, exercise physiology,
            which provides advance knowledge in physiology and helps students to understand the structure and
            function of the cells and organ physiology, etc . The department has well-equipped laboratories for
            conducting experiments on human and animal subjects, as well as for performing hematological,
            clinical tests and research activities. The department also has a library, a seminar room, and a
            museum for displaying physiological specimens and models.`,
            imgSrc: img_physiology,
            hodname:"Dr.Gitanjali Kumari 	"
          }} mession={[]}
          paraStyle={"department_details_hod_img_p"} /> </div>
      </> : ''}

      {radiology ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Radiology Department",
            paragraph: "The radiology department is a medical specialty that provides anesthesia, critical care medicine, pain medicine, and perioperative care to patients before, during, and after surgery. Anesthesiologists are physicians who have completed at least four years of medical school and four years of residency training in anesthesiology.",
            hodname:"Dr.Dinesh Kumar"
          }} mession={[]} 
          paraStyle={"department_details_hod_img_p"}/> </div>
      </> : ''}





      {psm ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "P.S.M ( Community Medicine )",
            paragraph: "The psm department is a medical specialty that provides anesthesia, critical care medicine, pain medicine, and perioperative care to patients before, during, and after surgery. Anesthesiologists are physicians who have completed at least four years of medical school and four years of residency training in anesthesiology.",
            imgSrc: img_psm,
            hodname:"Dr.Manoj Kumar"
          }} mession={[]} 
          paraStyle={"department_details_hod_img_p"}/> </div>
      </> : ''}

      {respiratory ? <>
        <div className='department_details_main'>
          <DepartmentDetails content={{
            heading: "Respiratory & Tuberculosis (TB) Department",
            paragraph: "The respiratory department is a medical specialty that provides anesthesia, critical care medicine, pain medicine, and perioperative care to patients before, during, and after surgery. Anesthesiologists are physicians who have completed at least four years of medical school and four years of residency training in anesthesiology.",
            imgSrc: '..',
            hodname:"Dr."

          }} mession={[]} 
          paraStyle={"department_details_hod_img_p"}/> </div>
      </> : ''}

     

    </>
  )
}

export default SpecialDepartment


