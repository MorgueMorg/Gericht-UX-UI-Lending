import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import Themu from "../../components/Themu";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">    <Themu>Title/Name</Themu>     </h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        <Themu>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
          morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
          tellus{" "}
        </Themu>
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
