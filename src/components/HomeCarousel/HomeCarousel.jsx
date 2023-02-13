import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img_1 from "../../assets/carousel-img-1.jpg";
import img_2 from "../../assets/carousel-img-2.png";

const HomeCarousel = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={100}
            dynamicHeight={false}
            >
            <div>
                <img src={img_1} />
            </div>
            <div>
                <img src={img_2} />
            </div>
        </Carousel>
    )
}

export default HomeCarousel;