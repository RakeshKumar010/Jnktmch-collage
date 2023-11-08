import { useState } from 'react'
import { useParams } from 'react-router-dom'
import AllFacultyTable from './AllFacultyTable'
import AnatomyFacultyTable from './faculty/AnatomyFacultyTable'
import BiochemistryFaculty from './faculty/BiochemistryFaculty'
import DentistryFaculty from './faculty/DentistryFaculty'
import DermatologyFaculty from './faculty/DermatologyFaculty'
import EmergencyFaculty from './faculty/EmergencyFaculty'
import ForensicFaculty from './faculty/ForensicFaculty'
import GeneralMedicineFaculty from './faculty/GeneralMedicineFaculty'
import GeneralSurgeryFaculty from './faculty/GeneralSurgeryFaculty'
import MicrobiologyFaculty from './faculty/MicrobiologyFaculty'
import ObsyFaculty from './faculty/ObsyFaculty'
import OphthalmologyFaculty from './faculty/OphthalmologyFaculty'
import OrthopedicsFaculty from './faculty/OrthopedicsFaculty'
import OtoRhinoFaculty from './faculty/OtoRhinoFaculty'
import PathologyFaculty from './faculty/PathologyFaculty'
import PediatricsFaculty from './faculty/PediatricsFaculty'
import PharmacologyFaculty from './faculty/PharmacologyFaculty'
import PhysiologyFaculty from './faculty/PhysiologyFaculty'
import PmrFaculty from './faculty/PmrFaculty'
import PsmFaculty from './faculty/PsmFaculty'
import PsychiatryFaculty from './faculty/PsychiatryFaculty'
import RadiologyFaculty from './faculty/RadiologyFaculty'
import RespiratoryFaculty from './faculty/RespiratoryFaculty'

import './Sidebar.css'

const SideFaculty = () => {

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

            {anaesthesiology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <AllFacultyTable content={{ heading: "Anaesthesiology Department" ,paragraph:"Anaesthesiology Department"}} />
                </div>
            </div></> : ''}

            {anatomy ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <AnatomyFacultyTable content={{ heading: "Anatomy Department",paragraph:"Anatomy Department" }} />
                </div>
            </div></> : ''}

            {biochemistry ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <BiochemistryFaculty content={{ heading: "Bio-Chemistry Department",paragraph:"Biochemistry Department" }} />
                </div>
            </div></> : ''}

            {dentistry ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <DentistryFaculty content={{ heading: "Dentistry Department",paragraph:"Dentistry Department" }} />
                </div>
            </div></> : ''}

            {dermatology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <DermatologyFaculty content={{ heading: "Dermatology & Venereology Department (Skin)",paragraph:"Dermatology Department" }} />
                </div>
            </div></> : ''}

            {emergency ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <EmergencyFaculty content={{ heading: "Emergency Department",paragraph:"Emergency Department" }} />
                </div>
            </div></> : ''}

            {forensic ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <ForensicFaculty content={{ heading: "Forensic Department (F.M.T)",paragraph:"Forensic Department" }} />
                </div>
            </div></> : ''}

            {generalmedicine ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <GeneralMedicineFaculty content={{ heading: "General Medicine Department",paragraph:"General Medicine Department" }} />
                </div>
            </div></> : ''}

            {generalsurgery ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <GeneralSurgeryFaculty content={{ heading: "General Surgery Department",paragraph:"General Surgery Department" }} />
                </div>
            </div></> : ''}

            {microbiology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <MicrobiologyFaculty content={{ heading: "Micro-Biology Department",paragraph:"Microbiology Department" }} />
                </div>
            </div></> : ''}

            {obsy ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <ObsyFaculty content={{ heading: "Obsy. & Gyane. Department",paragraph:"Obsy & Gyane Department" }} />
                </div>
            </div></> : ''}

            {ophthalmology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <OphthalmologyFaculty content={{ heading: "Ophthalmology Department (EYE)",paragraph:"Ophthalmology Department" }} />
                </div>
            </div></> : ''}

            {orthopedics ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <OrthopedicsFaculty content={{ heading: "Orthopedics Department",paragraph:"Orthopedics Department" }} />
                </div>
            </div></> : ''}

            {otorhino ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <OtoRhinoFaculty content={{ heading: "Oto-Rhino-Laryngology (ENT) Department",paragraph:"OTO-RHINO-LARYNGOLOGY (ENT) DEPARTMENT" }} />
                </div>
            </div></> : ''}
            {pediatrics ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <PediatricsFaculty content={{ heading: "Pediatrics Department",paragraph:"Pediatrics Department" }} />
                </div>
            </div></> : ''}
            {pathology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <PathologyFaculty content={{ heading: "Pathology Department" ,paragraph:"Pathology Department"}} />
                </div>
            </div></> : ''}
            {pharmacology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <PharmacologyFaculty content={{ heading: "Pharmacology Department",paragraph:"Pharmacology Department" }} />
                </div>
            </div></> : ''}
            {psychiatry ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <PsychiatryFaculty content={{ heading: "Psychiatry Department",paragraph:"Psychiatry Department" }} />
                </div>
            </div></> : ''}
            {physiology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <PhysiologyFaculty content={{ heading: "Physiology Department" ,paragraph:"Physiology Department"}} />
                </div>
            </div></> : ''}
            {radiology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <RadiologyFaculty content={{ heading: "Radiology Department",paragraph:"Radiology Department" }} />
                </div>
            </div></> : ''}
            {psm ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <PsmFaculty content={{ heading: "P.S.M ( Community Medicine )" ,paragraph:"P.S.M Department"}} />
                </div>
            </div></> : ''}
            {respiratory ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <RespiratoryFaculty content={{ heading: "Respiratory & Tuberculosis (TB) Department Respiratory Department" ,paragraph:"Respiratory Department"}} />
                </div>
            </div></> : ''}
            {pmr ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <PmrFaculty content={{ heading: "Physical Medicine & Rehabitation Department" ,paragraph:"P.M.R Department"}} />
                </div>
            </div></> : ''}



        </>
    )
}

export default SideFaculty