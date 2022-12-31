import * as React from "react";
import {IIconProps} from "../types";

export const Twitch: React.FC<IIconProps> =({width, height, color, id})=>{
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 23 26"
        >
            <path
    fill={color}
    d="M4.93 0L.282 4.643v16.714h5.575V26l4.646-4.643h3.717L22.584 13V0H4.929zm15.795 12.071l-3.716 3.715h-3.717l-3.252 3.25v-3.25H5.858V1.857h14.867v10.214z"
    />
            <path
    fill={color}
    d="M17.936 5.107h-1.858v5.572h1.858V5.107zM12.83 5.107h-1.86v5.572h1.86V5.107z"
    />
        </svg>
    );
};