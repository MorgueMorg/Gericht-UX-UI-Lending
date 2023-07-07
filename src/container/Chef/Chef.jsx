import React from "react";

import { SubHeading } from "../../components";
// import { images } from "../../constants";
import "./Chef.css";
import ThemuText from "../../components/ThemuText";


const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={'assets/themu_chef.png'} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      {/* <SubHeading title="Chef's word" /> */}
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={'assets/quote.png'} alt="quote_image" />
          <p className="p__opensans">
            <ThemuText>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</ThemuText>
          </p>
        </div>
        <p className="p__opensans">
          <ThemuText>
            {" "}
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
            Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
            lectus eu. Congue iaculis integer curabitur semper sit nunc.{" "}
          </ThemuText>
        </p>
      </div>

      <div className="app__chef-sign">
        <p><ThemuText>Kevin Luo</ThemuText></p>
        <p className="p__opensans"><ThemuText>Chef & Founder</ThemuText></p>
        <img src={'assets/sign.png'} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
