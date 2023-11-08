import { useState } from 'react'
import { useParams } from 'react-router-dom'
import AnaesthesiaSanc from './sanction/AnaesthesiaSanc.jsx'
import Anatonysanc from './sanction/Anatonysanc.jsx'
import BiochemistrySanc from './sanction/BiochemistrySanc.jsx'
import DentistrySanc from './sanction/DentistrySanc.jsx'
import DermatologySanc from './sanction/DermatologySanc.jsx'
import EmergencySanc from './sanction/EmergencySanc.jsx'
import ForensicSanc from './sanction/ForensicSanc.jsx'
import GeneralmedicineSanc from './sanction/GeneralmedicineSanc.jsx'
import GeneralsurgerySanc from './sanction/GeneralsurgerySanc.jsx'
import MicrobiologySanc from './sanction/MicrobiologySanc.jsx'
import ObsySanc from './sanction/ObsySanc.jsx'
import OphthalmologySanc from './sanction/OphthalmologySanc.jsx'
import OrthopedicsSanc from './sanction/OrthopedicsSanc.jsx'
import OtorhinoSanc from './sanction/OtorhinoSanc.jsx'
import PathologySanc from './sanction/PathologySanc.jsx'
import PediatricsSanc from './sanction/PediatricsSanc.jsx'
import PhamalogSanc from './sanction/PhamalogSanc.jsx'
import PhysiologySanc from './sanction/PhysiologySanc.jsx'
import PsmSanc from './sanction/PsmSanc.jsx'
import PsychiatrySanc from './sanction/PsychiatrySanc.jsx'
import RadiologySanc from './sanction/RadiologySanc.jsx'
import RespiratorySanc from './sanction/RespiratorySanc.jsx'
import PmrSanc from './sanction/PmrSanc.jsx'



import './Sidebar.css'

const SideSanctionPost =  () => {

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
                    <AnaesthesiaSanc content={{ heading: "Anaesthesiology Department" ,paragraph:"Anaesthesiology Department"}} />
                </div>
            </div></> : ''}

            {anatomy ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <Anatonysanc content={{ heading: "Anatomy Department",paragraph:"Anatomy Department" }} />
                </div>
            </div></> : ''}

            {biochemistry ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <BiochemistrySanc content={{ heading: "Bio-Chemistry Department",paragraph:"Biochemistry Department" }} />
                </div>
            </div></> : ''}

            {dentistry ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <DentistrySanc content={{ heading: "Dentistry Department",paragraph:"Dentistry Department" }} />
                </div>
            </div></> : ''}

            {dermatology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <DermatologySanc content={{ heading: "Dermatology & Venereology Department (Skin)",paragraph:"Dermatology Department" }} />
                </div>
            </div></> : ''}

            {emergency ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <EmergencySanc content={{ heading: "Emergency Department",paragraph:"Emergency Department" }} />
                </div>
            </div></> : ''}

            {forensic ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <ForensicSanc content={{ heading: "Forensic Department (F.M.T)",paragraph:"Forensic Department" }} />
                </div>
            </div></> : ''}

            {generalmedicine ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <GeneralmedicineSanc content={{ heading: "General Medicine Department",paragraph:"General Medicine Department" }} />
                </div>
            </div></> : ''}

            {generalsurgery ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <GeneralsurgerySanc content={{ heading: "General Surgery Department",paragraph:"General Surgery Department" }} />
                </div>
            </div></> : ''}

            {microbiology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <MicrobiologySanc content={{ heading: "Micro-Biology Department",paragraph:"Microbiology Department" }} />
                </div>
            </div></> : ''}

            {obsy ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <ObsySanc content={{ heading: "Obsy. & Gyane. Department",paragraph:"Obsy & Gyane Department" }} />
                </div>
            </div></> : ''}

            {ophthalmology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <OphthalmologySanc content={{ heading: "Ophthalmology Department (EYE)",paragraph:"Ophthalmology Department" }} />
                </div>
            </div></> : ''}

            {orthopedics ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <OrthopedicsSanc content={{ heading: "Orthopedics Department",paragraph:"Orthopedics Department" }} />
                </div>
            </div></> : ''}

            {otorhino ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <OtorhinoSanc content={{ heading: "Oto-Rhino-Laryngology (ENT) Department",paragraph:"Otorhino Department" }} />
                </div>
            </div></> : ''}
            {pediatrics ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <PediatricsSanc content={{ heading: "Pediatrics Department",paragraph:"Pediatrics Department" }} />
                </div>
            </div></> : ''}
            {pathology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <PathologySanc content={{ heading: "Pathology Department" ,paragraph:"Pathology Department"}} />
                </div>
            </div></> : ''}
            {pharmacology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <PhamalogSanc content={{ heading: "Pharmacology Department",paragraph:"Pharmacology Department" }} />
                </div>
            </div></> : ''}
            {psychiatry ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <PsychiatrySanc content={{ heading: "Psychiatry Department",paragraph:"Psychiatry Department" }} />
                </div>
            </div></> : ''}
            {physiology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <PhysiologySanc content={{ heading: "Physiology Department" ,paragraph:"Physiology Department"}} />
                </div>
            </div></> : ''}
            {radiology ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <RadiologySanc content={{ heading: "Radiology Department",paragraph:"Radiology Department" }} />
                </div>
            </div></> : ''}
            {psm ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <PsmSanc content={{ heading: "P.S.M ( Community Medicine )" ,paragraph:"P.S.M Department"}} />
                </div>
            </div></> : ''}
            {respiratory ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <RespiratorySanc content={{ heading: "Respiratory & Tuberculosis (TB) Department" ,paragraph:"Respiratory Department"}} />
                </div>
            </div></> : ''}
            {pmr ? <> <div className='sidefaculty_main'>
                <div className="sidefaculty_body">
                    <PmrSanc content={{ heading: "Physical Medicine & Rehabitation Department" ,paragraph:"P.M.R Department"}} />
                </div>
            </div></> : ''}

        </>
    )
}

export default SideSanctionPost