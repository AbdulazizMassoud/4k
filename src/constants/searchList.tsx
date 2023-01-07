import * as React from "react";
import {TikTok} from "../Icons/Active/TitTok";
import {Instagram} from "../Icons/Active/Instagram";
import {Youtube} from "../Icons/Active/Youtube";
import {Facebook} from "../Icons/Active/Facebook";
import {Pinterest} from "../Icons/Active/Pinterest";
import {Twitter} from "../Icons/Active/Twitter";
import {Twitch} from "../Icons/Active/Twitch";
import {Vimeo} from "../Icons/Active/Vimeo";

//
import {TikTok as InActiveTikTok} from "../Icons/InActive/TitTok";
import {Instagram as InActiveInstagram} from "../Icons/InActive/Instagram";
import {Youtube as InActiveYoutube} from "../Icons/InActive/Youtube";
import {Facebook as InActiveFacebook} from "../Icons/InActive/Facebook";
import {Twitch as InActiveTwitch} from "../Icons/InActive/Twitch";
import {Web as InActiveWeb} from "../Icons/InActive/Web";
import {Pinterest as InActivePinterest} from "../Icons/InActive/Pinterest";
import {Twitter as InActiveTwitter} from "../Icons/InActive/Twitter";
import {Vimeo as InActiveVimeo} from "../Icons/InActive/Vimeo";

import {filtersType} from "../contexts/SearchContext/types";
import {ReactElement, ReactNode} from "react";
import {Web} from "../Icons/Active/Web";
import {isMobile} from "react-device-detect";
export interface ISearchItems {
    name: filtersType
    icon: ReactElement
}
export interface ISearchListIcons {
    name: filtersType,
    activeIcon: ReactElement
    inActiveIcon: (color: string)=> ReactElement
}
export const cardSearchListItems: ISearchItems[] = [{
    name: "tiktok",
    icon: <TikTok
        width={32}
        height={32}
        />
},
    {
        name: "instagram",
        icon: <Instagram
            width={32}
            height={32}
            />
    },
    {
        name: "twitch",
        icon: <Twitch
            width={32}
            height={32}
            />
    },
    {
        name: "youtube",
        icon: <Youtube
            width={32}
            height={32}
            />
    },
    {
        name: "facebook",
        icon: <Facebook
            width={32}
            height={32}
            />

    },
    {
        name: "pinterest",
        icon: <Pinterest
            width={32}
            height={32}
            />

    },
    {
        name: "twitter",
        icon: <Twitter
            width={32}
            height={32}
            />
    },
    {
        name: "vimeo",
        icon: <Vimeo
            width={32}
            height={32}
        />,
    }
];
export const searchListItemsIcons: ISearchListIcons[] = [
    {
        name: "tiktok",
        activeIcon: <TikTok
            width={isMobile ? 32 : 40}
            height={isMobile ? 32 : 40}

        />,
        inActiveIcon: (color)=> <InActiveTikTok
            width={21}
            height={24}
            color={color}
        />

    },
    {
        name: "instagram",
        activeIcon: <Instagram
            width={isMobile ? 32 : 40}
            height={isMobile ? 32 : 40}
        />,
        inActiveIcon:(color)=> <InActiveInstagram
            width={28}
            height={25}
            color={color}
        />

    },
    {
        name: "web",
        activeIcon: <Web
            width={isMobile ? 32 : 40}
            height={isMobile ? 32 : 40}
        />,
        inActiveIcon: (color)=> <InActiveWeb
            width={28}
            height={28}
            color={color}
        />

    },
    {
        name: "pinterest",
        activeIcon: <Pinterest
            width={isMobile ? 32 : 40}
            height={isMobile ? 32 : 40}
        />,
        inActiveIcon:(color)=> <InActivePinterest
            width={24}
            height={28}
            color={color}
        />


    },
    {
        name: "facebook",
        activeIcon: <Facebook
            width={isMobile ? 32 : 40}
            height={isMobile ? 32 : 40}
        />,
        inActiveIcon:(color)=> <InActiveFacebook
            width={15}
            height={26}
            color={color}
        />


    },
    {
        name: "vimeo",
        activeIcon: <Vimeo
            width={isMobile ? 32 : 40}
            height={isMobile ? 32 : 40}
        />,
        inActiveIcon:(color)=> <InActiveVimeo
            width={23}
            height={27}
            color={color}
        />


    },
    {
        name: "youtube",
        activeIcon: <Youtube
            width={isMobile ? 32 : 40}
            height={isMobile ? 32 : 40}
        />,
        inActiveIcon: (color)=> <InActiveYoutube
            width={26}
            height={22}
            color={color}
        />

    },
    {
        name: "twitter",
        activeIcon: <Twitter
            width={isMobile ? 32 : 40}
            height={isMobile ? 32 : 40}
        />,
        inActiveIcon: (color)=> <InActiveTwitter
            width={28}
            height={23}
            color={color}
        />

    },
    {
        name: "twitch",
        activeIcon: <Twitch
            width={isMobile ? 32 : 40}
            height={isMobile ? 32 : 40}
        />,
        inActiveIcon: (color)=> <InActiveTwitch
            width={23}
            height={26}
            color={color}
        />

    }
];