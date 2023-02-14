import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import BlackButton from "../components/BlackButton/BlackButton";
import Footer from "../components/Footer/Footer";
import './home.css';
import { useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import juni_img from '../assets/juniper-logo.PNG';
import geo_img from '../assets/geoslam-logo.webp';
import sok_img from '../assets/sokkia-logo.webp';
import logo_alone from '../assets/logo-site-img.png';
import gray_logo from '../assets/logo-gray.png';
import gen_surveying from '../assets/gen-surveying.jpg';
import theodolite from '../assets/theodolite.jpg';
import uav from '../assets/uav.jpg';


const Home = () => {

    useEffect(() => {

    })

    return(
        <>
            <div className="home-container">
                <div className="carousel-container">
                    <HomeCarousel/>
                </div>

                {/* <p className="home-title">Precision Measured, Results Guaranteed</p> */}
            </div>

            <div className="cards-container">
                <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    delay={1}>
                        <Link to={'/about'}>
                            <div className="who-we-are-init">
                                <p className="home-title">Who We Are</p>
                                {/* <img className="logo-alone" source={gray_logo}></img> */}
                                <p className="home-subtitle-init">Boksomatti for Surveying Instruments co. specializes in the distribution and technical
                                    service of measurement solutions for surveying, mapping and GIS, civil engineering,
                                    industrial measurement, and construction applications in Saudi Arabia.</p>
                            </div>
                        </Link>

                </AnimationOnScroll>

                <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    delay={1}>
                    <div className="who-we-are">
                        <p className="home-title">"Precision Measured<br/> Results Guaranteed"</p>
                        <p className="home-subtitle">Get to know our partners in achieving the highest surveying standards.</p>
                        <div className="partners-container">
                            <div className="img-wrapper">
                                <img className="juniper-img" onClick={() => {window.open('https://junipersys.com/')}} src={juni_img}></img>
                            </div>

                            <div className="img-wrapper">
                                <img className="geo-img" onClick={() => {window.open('https://geoslam.com/')}} src={geo_img}></img>
                            </div>

                            <div className="img-wrapper">
                                <img className="sok-img" onClick={() => {window.open('https://sokkia.com/')}} src={sok_img}></img>     
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>


                <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    delay={1}>
                    <Link to={'/products'}>
                        <div className="who-we-are">
                            <p className="home-title">Your Perfect Solution, Right Here</p>
                            <p className="home-subtitle">Browse our different surveying categories and find what you need.</p>
                            <div className="partners-container">
                                <div className="browsing-categ">
                                    <p className="browsing-label">General Surveying</p>
                                    <img className="browsing-img" src={gen_surveying}></img>
                                    <BlackButton label='Coming Soon'/>
                                </div>

                                <div className="browsing-categ">
                                    <p className="browsing-label">Digital Theodolites</p>
                                    <img className="browsing-img" src={theodolite}></img>
                                    <BlackButton label='Coming Soon'/>
                                </div>

                                <div className="browsing-categ">
                                    <p className="browsing-label">UAVs</p>
                                    <img className="browsing-img" src={uav}></img>
                                    <BlackButton label='Coming Soon'/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </AnimationOnScroll>
            </div>
        </>

    )
}

export default Home;