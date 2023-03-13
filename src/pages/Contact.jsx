import './Contact.css';
import CustomMap from '../components/Map/CustomMap';

const Contact = () => {

    const riyadhLocation = {
        address: '4959 Abdul Rahman Ibn Shuqran, Al Malaz، 6466, Riyadh 12627, Saudi Arabia',
        lat: 24.66880466474661,
        lng: 46.72871742409013
    }

    const khobarLocation = {
        address: '',
        lat: 26.28367396581399,
        lng: 50.19017981095387, 
    }

    const jeddahLocation = {
        address: '',
        lat: 21.539664,
        lng: 39.191978
    }

    return(
        <div className="contact-container">

            <div className="main-panel">

                <div className="get-in-touch">
                    <p className='panel-title'>Get In Touch</p>
                    <div className='get-in-touch-content'>
                        <p className='get-in-touch-text'>Our team is here to assist you with all your needs and guide you every step of the way.</p>
                        <div className='branch-tel-wrapper'>
                            <p className='tel'>Riyadh Head Office:</p>
                            <p className='tel'>Tel 1: 011 477 8518</p>
                            <p className='tel'>Tel 2: 011 476 1181</p>
                            <p className='tel'>Fax: 011 477 7836</p>                    
                            <p className='tel'>Mobile 1: 050 414 0221</p>
                            <p className='tel'>Mobile 2: 050 414 0225</p>
                            <p className='tel'>Email: bkstm@boksomatti.com</p>
                        </div>

                        <div className='branch-tel-wrapper'>
                            <p className='tel'>Jeddah Branch:</p>
                            <p className='tel'>Tel: 012 672 2546</p>
                            <p className='tel'>Fax: 012 672 2546</p>                    
                            <p className='tel'>Mobile: 050 541 1964</p>
                            <p className='tel'>Email: sokkia_jeddah@yahoo.com</p>
                        </div>

                        <div className='branch-tel-wrapper'>
                            <p className='tel'>Khobar Branch:</p>
                            <p className='tel'>Tel: 013 889 7498</p>
                            <p className='tel'>Fax: 013 898 3320</p>                    
                            <p className='tel'>Email: sokkiakbr@gmail.com</p>
                        </div>

                    </div>
                </div>

            </div>

            <div className='main-panel'>
                <div className="find-us">
                        <p className='panel-title'>Find Us</p>
                        <div className='map-wrapper'>
                            <div className='location-content'>
                                <div className='location-text-wrapper'>
                                    <p className='location-text'>Riyadh Office: </p>
                                    <p className='location-text'>4959, Abdul Rahman Ibn Shuqran </p>
                                    <p className='location-text'> Al Malaz, Riyadh 12627 - 6466</p>
                                </div>

                                {/* <p className='location-text'> Riyadh 12627, Saudi Arabia</p> */}
                                <div className='google-map-wrapper'>
                                    <CustomMap location={riyadhLocation} zoomLevel={5}></CustomMap>      
                                 </div>
                            </div>
                        </div>

                        <div className='map-seperator'></div>

                        <div className='map-wrapper'>
                            <div className='location-content'>
                                <div className='location-text-wrapper'>
                                    <p className='location-text'>Khobar Branch: </p>
                                    <p className='location-text'>Intersection of Makkah Al Mukarramah St. with 4th St. </p>
                                    <p className='location-text'> Al-Thuqbah, Khobar</p>
                                </div>

                                {/* <p className='location-text'> Riyadh 12627, Saudi Arabia</p> */}
                                <div className='google-map-wrapper'>
                                    <CustomMap location={khobarLocation} zoomLevel={5}></CustomMap>      
                                 </div>
                            </div>
                        </div>

                        <div className='map-seperator'></div>

                        <div className='map-wrapper'>
                            <div className='location-content'>
                                <div className='location-text-wrapper'>
                                    <p className='location-text'>Jeddah Branch: </p>
                                    <p className='location-text'>Al-Andalus Plaza, 16 King Fahd Br Road </p>
                                    <p className='location-text'> Mishrifah, Jeddah 21544</p>
                                </div>

                                {/* <p className='location-text'> Riyadh 12627, Saudi Arabia</p> */}
                                <div className='google-map-wrapper'>
                                    <CustomMap location={jeddahLocation} zoomLevel={5}></CustomMap>      
                                 </div>
                            </div>
                        </div>
                </div>
            </div>







            <div className="contact-form">

            </div>

        </div>
    )
}

export default Contact;