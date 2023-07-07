import React from "react";
import { images } from "../constants";


const Themu = ({src, alt, className, style_json_string, desc, test}) => {

  console.log(style_json_string)

  style_json_string? style_json_string = style_json_string : style_json_string = '{}';

  return <img src={src} alt={alt} className={className} style ={JSON.parse(style_json_string)}/>;
};

export default Themu;
