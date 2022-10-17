import { SliderInfoContainer } from "./styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { images } from "../../utils/sliderInfo";

function SliderInfo() {
  return (
    <SliderInfoContainer>
      <Carousel showArrows={true} autoPlay>
        {images.map((value) => {
          return (
            <div key={value.src}>
              <img src={value.src} />
            </div>
          );
        })}
      </Carousel>
    </SliderInfoContainer>
  );
}

export { SliderInfo };
