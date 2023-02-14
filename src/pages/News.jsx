import { AnimationOnScroll } from 'react-animation-on-scroll';
import NewsCarousel from '../components/NewsCarousel/NewsCarousel';
import './news.css'
import collab from "../assets/collab.png";


const News = () => {
    return(
        <div className='news-container'>
            <div className='news-carousel-container'>
                <img src={collab} className="news-img" />
                <p className="news-subtitle"> We are delighted to announce our participation in The Big Saudi 5 2023.<br/>
                                              We are excited to share what we have in store this year, and are <br/>
                                              looking forward to connecting and collaborating with members of <br/>
                                              the construction industry.</p>
                {/* <NewsCarousel/> */}
            </div>

        </div>
    )
}

export default News;