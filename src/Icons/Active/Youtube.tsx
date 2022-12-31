import * as React from "react";
import {IIconProps} from "../types";

export const Youtube: React.FC<IIconProps> =({width, height, color, id})=>{
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 41 40"
        >
            <path
    fill="red"
    d="M20.67 39.77C9.706 39.77.79 30.846.79 19.881.79 8.917 9.705 0 20.67 0c10.965 0 19.882 8.917 19.882 19.881 0 10.965-8.917 19.882-19.882 19.882v.007z"
    />
            <path
    fill="#fff"
    d="M32.574 16.865a5.108 5.108 0 00-5.107-5.107H14.23a5.108 5.108 0 00-5.107 5.107v6.207a5.108 5.108 0 005.107 5.107h13.244a5.108 5.108 0 005.107-5.107v-6.207h-.007zm-8.356 3.417l-5.282 2.899c-.233.124-.437-.044-.437-.306V16.93c0-.262.211-.43.445-.298l5.318 3.052c.233.131.196.474-.044.605v-.008z"
    />
        </svg>
    );};