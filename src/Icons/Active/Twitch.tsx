import * as React from "react";
import {IIconProps} from "../types";

export const Twitch: React.FC<IIconProps> =({width, height, color, id})=>{
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 40 40"
        >
            <circle cx="19.975" cy="19.884" r="19.884" fill="#8348EE"/>
            <path
    fill="#fff"
    d="M13.468 8l-4.646 4.643v16.714h5.575V34l4.646-4.643h3.717L31.123 21V8H13.468zm15.796 12.071l-3.716 3.715H21.83l-3.252 3.25v-3.25h-4.182V9.857h14.867v10.214z"
    />
            <path
    fill="#fff"
    d="M26.476 13.107h-1.859v5.572h1.859v-5.572zM21.368 13.107H19.51v5.572h1.858v-5.572z"
    />
        </svg>
    );
};