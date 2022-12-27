import * as React from "react";
import {IIconProps} from "./types";

export const TikTok: React.FC<IIconProps> =({width, height, color, id})=>{
   return (
       <svg
           xmlns="http://www.w3.org/2000/svg"
           width={width}
           height={height}
           fill="none"
           id={id}
           viewBox="0 0 21 24"
       >
           <path
    fill={color}
    fillRule="evenodd"
    d="M10.065 8.469v3.755H7.948c-2.002 0-3.625 1.678-3.625 3.747 0 2.07 1.623 3.747 3.625 3.747s3.625-1.678 3.625-3.747V.285h3.934l4.765 5.131-2.838 2.816-1.927-2.074v9.813c0 4.315-3.384 7.813-7.559 7.813-4.175 0-7.56-3.498-7.56-7.813 0-4.315 3.385-7.813 7.56-7.813h2.117v.31z"
    clipRule="evenodd"
    />
       </svg>
   );
};