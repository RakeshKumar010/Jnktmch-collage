import './CopyRight.css'
import { Link } from 'react-router-dom'

const CopyRight = () => {
  return (
    <div className='copyright_main'>
        <p>Copyright © 2023 J.N.K.T. Madhepura</p>
        
        <div className="copyright_links">
        <Link to={'./privacy-statement'}>Privacy Statement</Link>
        <Link to={'./disclaimer'}>Disclaimer</Link>
        <Link to={'./linking-policy'}>Linking Policy</Link>
        <Link to={'./site-map'}>Site Map</Link>

        </div>
    </div>
  )
}

export default CopyRight