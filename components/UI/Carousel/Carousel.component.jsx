import React from "react";
import css from "./Carousel.module.css";
import bannerWhole from "../../../resources/images/bannerWhole.png";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import img1 from "../../../resources/images/universities/1.jpg";
import img2 from "../../../resources/images/universities/2.jpg";
import img3 from "../../../resources/images/universities/3.jpg";
import img4 from "../../../resources/images/universities/4.jpg";
import img5 from "../../../resources/images/universities/5.jpg";
import Image from "next/image";

const Carousel = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <>
      <div className={css.slideShow}>
        <div className={css.slideShowFrame}>
          <div className={css.frame}>
            <Image src={bannerWhole} alt="bannerPicture" />
          </div>
          <div className={css.content}>
            <AutoplaySlider
              play={true}
              cancelOnInteraction={false}
              interval={2000}
              style={{ width: "90%" }}
            >
              <div>
                <Image src={img1} alt="carousel-img1" />
              </div>
              <div>
                <Image src={img2} alt="carousel-img2" />
              </div>
              <div>
                <Image src={img3} alt="carousel-img3" />
              </div>
              <div>
                <Image src={img4} alt="carousel-img4" />
              </div>
              <div>
                <Image src={img5} alt="carousel-img5" />
              </div>
            </AutoplaySlider>
          </div>
        </div>
      </div>
      <div className={css.carousel}></div>
    </>
  );
};

export default Carousel;
