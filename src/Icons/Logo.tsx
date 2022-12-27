import * as React from "react";
import {IIconProps} from "./types";

export const Logo: React.FC<IIconProps> =({width, height, color, id})=>{
   return (
       <svg
           xmlns="http://www.w3.org/2000/svg"
           width={width}
           height={height}
           fill="none"
           id={id}
           viewBox="0 0 32 32"
       >
           <path fill={color} d="M16 0l16 32H0L16 0z"/>
       </svg>
   );
};