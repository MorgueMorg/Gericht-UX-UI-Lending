import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
// import { images } from "../../constants";
import "./Gallery.css";
import ThemuText from "../../components/ThemuText";
import ThemuImg from "../../components/ThemuImg";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          <ThemuText>
            This text is about the photo gallery dolor sit amet, consectetur
            adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque
            egestas mu.
          </ThemuText>
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        {/* <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div> */}
        <div className="app__gallery-images_container" ref={scrollRef}>
          <div className="app__gallery-images_card flex__center">
            <ThemuImg src={"assets/gallery01.png"} alt="gallery_image" />
            <BsInstagram className="gallery__image-icon" />
          </div>
          <div className="app__gallery-images_card flex__center">
            <ThemuImg src={"assets/gallery02.png"} alt="gallery_image" />
            <BsInstagram className="gallery__image-icon" />
          </div>
          <div className="app__gallery-images_card flex__center">
            <ThemuImg src={"assets/gallery03.png"} alt="gallery_image" />
            <BsInstagram className="gallery__image-icon" />
          </div>
          <div className="app__gallery-images_card flex__center">
            <ThemuImg src={"assets/gallery04.png"} alt="gallery_image" />
            <BsInstagram className="gallery__image-icon" />
          </div>
        </div>

        {/* <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Gallery;
