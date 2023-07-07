import React from "react";

import { SubHeading } from "../../components";
// import { images } from "../../constants";
import ThemuText from "../../components/ThemuText";
import ThemuImg from "../../components/ThemuImg";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/* <SubHeading title="Chase the new flavour" /> */}
      <h1 className="app__header-h1">    <ThemuText>Title/Name</ThemuText>     </h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        <ThemuText>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
          morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
          tellus{" "}
        </ThemuText>
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <ThemuImg src={ 'assets/themu_welcome.png' } alt="header_img" desc = ""/>
    </div>
  </div>
);

export default Header;
