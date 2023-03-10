import * as React from "react";
import {IIconProps} from "../types";

export const Youtube: React.FC<IIconProps> =({width, height, color, id})=>{
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            id={id}
            viewBox="0 0 26 22"
        >
            <path
    fill={color}
    d="M22.136 4.706c-.096-.374-.367-.657-.678-.744-.55-.155-3.227-.506-8.883-.506-5.657 0-8.332.352-8.887.506-.306.086-.578.368-.675.744-.137.533-.495 2.767-.495 6.292s.358 5.757.495 6.293c.096.373.367.656.677.741.553.156 3.228.508 8.884.508 5.657 0 8.333-.352 8.887-.506.306-.086.578-.369.675-.744.137-.534.495-2.772.495-6.292s-.358-5.757-.495-6.292zm2.435-.624c.574 2.24.574 6.916.574 6.916s0 4.676-.574 6.916c-.32 1.238-1.254 2.213-2.437 2.542-2.148.598-9.56.598-9.56.598s-7.407 0-9.56-.598c-1.187-.334-2.12-1.307-2.436-2.542-.574-2.24-.574-6.916-.574-6.916s0-4.676.574-6.916c.32-1.239 1.254-2.213 2.437-2.542C5.167.94 12.575.94 12.575.94s7.411 0 9.56.599c1.187.334 2.12 1.307 2.436 2.542zM10.06 15.398v-8.8l7.542 4.4-7.543 4.4z"
    />
        </svg>
    );};