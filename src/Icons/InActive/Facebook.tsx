import * as React from "react";
import {IIconProps} from "../types";

export const Facebook: React.FC<IIconProps> =({width, height, color, id})=>{
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            id={id}
            viewBox="0 0 15 26"
        >
            <path
    fill={color}
    d="M14.024 14.665l.726-4.514H10.2V7.215c0-1.234.637-2.44 2.674-2.44h2.067V.93S13.061.628 11.268.628c-3.748 0-6.2 2.165-6.2 6.08v3.442H.904v4.515h4.164v10.92h5.126v-10.92h3.83z"
    />
        </svg>
    );
};