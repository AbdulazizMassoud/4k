import * as React from "react";
import {IIconProps} from "./types";

export const Pinterest: React.FC<IIconProps> =({width, height, color, id})=>{
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            id={id}
            height={height}
            fill="none"
            viewBox="0 0 24 28"
        >
            <path
    fill={color}
    d="M14.085 20.537c-1.815-.13-2.579-.96-4.004-1.758-.633 3.06-1.378 6.027-3.147 8.042-.513.592-1.556.292-1.593-.463-.27-4.878 1.565-8.754 2.468-12.844-1.704-2.65.205-7.974 3.809-6.662 4.432 1.612-3.837 9.843 1.713 10.872 5.802 1.072 8.167-9.268 4.573-12.63C12.698.25 2.77 4.992 3.99 11.945c.233 1.32 1.434 1.93 1.285 3.233-.093.814-1.006 1.277-1.807.934-2.3-.994-3.017-3.164-2.905-5.924.205-5.265 5.14-8.96 10.095-9.466 6.267-.643 12.143 2.117 12.953 7.545.913 6.122-2.83 12.75-9.526 12.278v-.009z"
    />
        </svg>
    );};