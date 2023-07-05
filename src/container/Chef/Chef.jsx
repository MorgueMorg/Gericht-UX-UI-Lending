import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";
import Themu from "../../components/Themu";


const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      {/* <SubHeading title="Chef's word" /> */}
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            <Themu>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</Themu>
          </p>
        </div>
        <p className="p__opensans">
          <Themu>
            {" "}
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
            Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
            lectus eu. Congue iaculis integer curabitur semper sit nunc.{" "}
          </Themu>
        </p>
      </div>

      <div className="app__chef-sign">
        <p><Themu>Kevin Luo</Themu></p>
        <p className="p__opensans"><Themu>Chef & Founder</Themu></p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
