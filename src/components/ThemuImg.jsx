import React from "react";
import { images } from "../constants";


const Themu = (src, alt, className, desc) => {

    console.log(src.src)

  return <img src={src.src} alt={src.alt} className={className} />;
};

export default Themu;
