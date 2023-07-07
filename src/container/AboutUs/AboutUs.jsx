import React from "react";

// import { images } from "../../constants";
import "./AboutUs.css";
import ThemuText from "../../components/ThemuText";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={'assets/G.png'} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p className="p__opensans">
          <ThemuText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </ThemuText>
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img
          style={{
            width: "auto",
            height: "300px",
          }}
          src={'assets/themu_knife.png'}
          alt="about_knife"
        />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p className="p__opensans">
          <ThemuText>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </ThemuText>
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
