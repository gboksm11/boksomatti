import './Contact.css';
import CustomMap from '../components/Map/CustomMap';

const Contact = () => {

    const location = {
        address: '4959 Abdul Rahman Ibn Shuqran, Al Malaz، 6466, Riyadh 12627, Saudi Arabia',
        lat: 24.66880466474661,
        lng: 46.72871742409013
    }

    return(
        <div className="contact-container">

            <div className="main-panel">

                <div className="get-in-touch">
                    <p className='panel-title'>Get In Touch</p>
                    <div className='get-in-touch-content'>
                        <p className='get-in-touch-text'>Our team is here to assist you with all your needs and guide you every step of the way.</p>
                        <p className='tel'>Tel: 011 477 8518 | 011 476 1181</p>
                        <p className='tel'>Mobile: 050 414 0221 | 050 414 0225</p>
                        <p className='tel'>Email: bkstm@boksomatti.com</p>
                        <p className='tel'>Fax: 011 477 7836</p>
                    </div>
                </div>

            </div>

            <div className='main-panel'>
                <div className="find-us">
                        <p className='panel-title'>Find Us</p>
                        <div className='map-wrapper'>
                            <div className='location-content'>
                                <p className='location-text'>Riyadh Office: </p>
                                <p className='location-text'>4959 عبدالرحمن بن شقران، الملز الرياض 12627 6466 </p>
                                <p className='location-text'> Abdul Rahman Ibn Shuqran, 6466, Al Malaz,</p>
                                <p className='location-text'> Riyadh 12627, Saudi Arabia</p>
                            </div>
                            <CustomMap location={location} zoomLevel={5}></CustomMap>
                        </div>

                </div>
            </div>







            <div className="contact-form">

            </div>

        </div>
    )
}

export default Contact;