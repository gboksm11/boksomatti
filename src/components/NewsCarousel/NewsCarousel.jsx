import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import big5 from '../../assets/big5.png';
import logo_gray from "../../assets/logo-gray.png";
import collab from "../../assets/collab.png";

const NewsCarousel = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={100}
            dynamicHeight={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            >
            <div>
                <img src={collab} />
                <div className="subtitle-container">
                    <p className="news-subtitle"> We are delighted to announce our participation in The Big Saudi 5</p>
                </div>
            </div>

            <div>
                <img src={collab} />
                <div className="subtitle-container">
                    <p className="news-subtitle"> We are sdelighted to announce our participation in The Big Saudi 5</p>
                </div>
            </div>

            

        </Carousel>
    )
}

export default NewsCarousel;