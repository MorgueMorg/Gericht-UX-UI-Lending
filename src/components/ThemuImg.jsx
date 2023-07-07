import React from "react";
import { images } from "../constants";


const Themu = ({src, alt, className, style_json, desc, test}) => {

    // console.log(test)

  return <img src={src} alt={alt} className={className} style ={style_json}/>;
};

export default Themu;
