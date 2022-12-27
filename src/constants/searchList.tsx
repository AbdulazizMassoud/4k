import {TikTok} from "../Icons/TitTok";
import * as React from "react";
import {Instagram} from "../Icons/Instagram";
import {IconButton} from "@chakra-ui/button";
import {Youtube} from "../Icons/Youtube";
import {Web} from "../Icons/Web";
import {Facebook} from "../Icons/Facebook";
import {Pinterest} from "../Icons/Pinterest";
import {Twitter} from "../Icons/Twitter";
import {filtersType} from "../contexts/SearchContext/types";
import {ReactElement, ReactNode} from "react";
export interface ISearchItems {
    name: filtersType
    icon: (color: string) => ReactElement
}
export const searchListItems: ISearchItems[] = [{
    name: "tiktok",
    icon: (color) => <TikTok
        width={21}
        height={24}
        color={color}/>
},
    {
        name: "instagram",
        icon: (color) => <Instagram
            width={28}
            height={25}
            color={color}/>
    },
    {
        name: "youtube",
        icon: (color) => <Youtube
            width={25}
            height={20}
            color={color}/>
    },
    {
        name: "facebook",
        icon: (color) => <Facebook
            width={15}
            height={26}
            color={color}/>

    },
    {
        name: "pinterest",
        icon: (color) => <Pinterest
            width={24}
            height={28}
            color={color}/>

    },
    {
        name: "twitter",
        icon: (color) => <Twitter
            width={28}
            height={23}
            color={color}/>
    },
];