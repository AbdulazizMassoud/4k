import {IIconProps} from "../types";

export const Vimeo: React.FC<IIconProps> = ({width, height}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 41 40"
        >
            <circle cx="20.502" cy="19.885" r="19.885" fill="#19B7EA"/>
            <path
    fill="#fff"
    d="M29.882 9.944c-3.686-.112-6.183 1.855-7.487 5.91.674-.264 1.326-.397 1.963-.397 1.344 0 1.937.72 1.782 2.16-.077.874-.673 2.143-1.782 3.81-1.112 1.669-1.94 2.5-2.493 2.5-.718 0-1.37-1.29-1.963-3.865-.198-.758-.556-2.69-1.068-5.797-.482-2.88-1.749-4.226-3.807-4.037-.873.077-2.176.835-3.918 2.273a324.647 324.647 0 01-3.867 3.3l1.249 1.532c1.189-.796 1.885-1.192 2.076-1.192.914 0 1.764 1.364 2.56 4.09.71 2.503 1.428 5.004 2.143 7.5 1.064 2.73 2.375 4.094 3.918 4.094 2.497 0 5.55-2.234 9.15-6.706 3.485-4.282 5.285-7.652 5.407-10.118.158-3.293-1.13-4.98-3.863-5.057z"
    />
        </svg>
    );
};