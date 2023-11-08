import { Link } from 'react-router-dom'
import NewBtn from '../../assets/new_btn.jpg'

const Notification = () => {
    return (
        <div className='notification_main'>

            <h3 className='noti_header'>NOTICE</h3>
            <div className="notification_container">

                <Link to={'./notice'} className="notification_list notice_link">
                    <p>स्नातक पाठ्यक्रम में नामांकन हेतु नामांकन एवं अन्य शुल्क का निर्धारण किया गया है|  Date :- 21/07/2023 <img src={NewBtn} alt="" style={{width:"8%"}}/>  </p>
                    <p>FMG छात्र / छात्राओं के लिए MEDICAL INTERNSHIP करने हेतु सूचना | </p>
                    <p>PIL (CASE NO - CWJC-7338/2022) FILLED AS ON DATED 11TH MAY 2022</p>
                    <p>MACHINE क्रय करने से सम्बंधित कोटेशन अपरिहार्य कारणों से दिनांक 09/02/22 से 11/02/22 को बढ़ा दी गयी है ।</p>

                </Link>

                <Link to={'./notice'} className="view_all_route">View All</Link>

            </div>


        </div>
    )
}

export default Notification