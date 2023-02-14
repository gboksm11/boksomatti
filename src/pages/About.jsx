import logo_gray from "../assets/logo-gray.png";
import './About.css';

const About = () => {
    return(
        <div className="about-container">
            <img className="about-logo" src={logo_gray}></img>
            <p className="about-text">Boksomatti for Surveying Instruments co. specializes in the distribution and technical
                service of measurement solutions for surveying, mapping and GIS, civil engineering,
                industrial measurement, and construction applications in Saudi Arabia.
                Established in Riyadh during 1991, the company developed its activities with
                branches in Jeddah and Khobar offering sales and support services to clients and
                projects all over the kingdom.
            </p>

            <p className="about-text">Today, the company represents SOKKIA –Topcon co. who is a Japanese
                multinational company and a world leader in manufacturing optical and electronic
                instruments for positioning and surveying.
            </p>

            <p className="about-text">With a vision to providing leading edge technology to satisfy increasing demand of
                professional customers, the company’s main concern is to adopt high quality
                standards that meets customers’ expectations.
            </p>
        </div>
    )
}

export default About;