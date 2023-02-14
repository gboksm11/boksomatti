import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img_1 from "../../assets/carousel-img-1.jpg";
import img_2 from "../../assets/carousel-img-2.png";
import img_3 from "../../assets/carousel-img-3.jpg";
import img_4 from "../../assets/carousel-img-4.png";


const HomeCarousel = () => {
    return (
        <Carousel
            autoPlay={true}
            autoFocus={true}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={100}
            dynamicHeight={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            >
            <div>
                <img src={img_1} />
            </div>
            <div>
                <img src={img_2} />
            </div>

            <div>
                <img src={img_4} />
            </div>
        </Carousel>
    )
}

export default HomeCarousel;