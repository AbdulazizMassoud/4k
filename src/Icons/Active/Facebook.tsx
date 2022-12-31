import * as React from "react";
import {IIconProps} from "../types";

export const Facebook: React.FC<IIconProps> =({width, height, color, id})=>{
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 41 40"
        >
            <path
    fill="#3C5A99"
    d="M20.207 39.77C9.241 39.77.322 30.851.322 19.885.322 8.919 9.241 0 20.207 0c10.966 0 19.885 8.919 19.885 19.885 0 10.966-8.918 19.885-19.885 19.885z"
    />
            <path
    fill="#fff"
    fillRule="evenodd"
    d="M17.089 19.98v11.527c0 .167.131.298.299.298h4.277a.296.296 0 00.299-.298V19.79h3.104a.3.3 0 00.298-.277l.3-3.527a.303.303 0 00-.3-.328h-3.402v-2.506c0-.59.473-1.064 1.063-1.064h2.39a.296.296 0 00.3-.299V8.263a.296.296 0 00-.3-.3h-4.044a4.295 4.295 0 00-4.291 4.293v3.402h-2.143a.295.295 0 00-.298.3v3.526c0 .167.13.299.298.299h2.143v.19l.007.006z"
    clipRule="evenodd"
    />
        </svg>

    );
};