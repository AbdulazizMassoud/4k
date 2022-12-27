import {HStack} from "@chakra-ui/layout";
import {Button, IconButton} from "@chakra-ui/button";
import {TikTok} from "../../Icons/TitTok";
import {Instagram} from "../../Icons/Instagram";
import {Youtube} from "../../Icons/Youtube";
import {Web} from "../../Icons/Web";
import {Facebook} from "../../Icons/Facebook";
import {Pinterest} from "../../Icons/Pinterest";
import {Twitter} from "../../Icons/Twitter";
import * as React from "react";
import { useTheme } from "@chakra-ui/react";
import {useContext} from "react";
import {SearchContext} from "../../contexts/SearchContext";
import {MouseEventHandler} from "react";
import {filtersType} from "../../contexts/SearchContext/types";

export const SearchList: React.FC = ()=>{
    const theme = useTheme();
    const {filter, setFilterType} = useContext(SearchContext);
    const onClick = (filter: filtersType) =>{
        setFilterType(filter);
    };
     const getColor = (currentItem: filtersType)=>{
        return filter === currentItem ? "gray.50" : "gray.500";
     }
return (

    <HStack spacing="18px" borderRadius="60">

        <Button onClick={()=> onClick("all")} id="all" color={"gray.700"} bgColor={getColor("all")} width={71} borderRadius="33">all</Button>

        <IconButton onClick={()=> onClick("tiktok")} bgColor={getColor("tiktok")} isRound aria-label='tiktok' icon={<TikTok
            width={21}
            height={24}
            color={theme.colors.gray[700]}/>
        } />
        <IconButton onClick={()=> onClick("instagram")}  bgColor={getColor("instagram")} isRound aria-label='instagram' icon={<Instagram
            width={25}
            height={25}
            color={theme.colors.gray[700]}/>
        } />
        <IconButton onClick={()=> onClick("youtube")} bgColor={getColor("youtube")} isRound aria-label='youtube' icon={<Youtube
            width={25}
            height={20}
            color={theme.colors.gray[700]}/>
        } />
        <IconButton onClick={()=> onClick("web")} bgColor={getColor("web")} isRound aria-label='web' icon={<Web
            id="web"
            width={28}
            height={28}
            color={theme.colors.gray[700]}/>
        } />
        <IconButton onClick={()=> onClick("facebook")} bgColor={getColor("facebook")} isRound aria-label='facebook' icon={<Facebook
            width={15}
            height={26}
            color={theme.colors.gray[700]}/>
        } />
        <IconButton onClick={()=> onClick("pinterest")} bgColor={getColor("pinterest")} isRound aria-label='pinterest' icon={<Pinterest
            width={24}
            height={28}
            color={theme.colors.gray[700]}/>
        } />
        <IconButton onClick={()=> onClick("twitter")} bgColor={getColor("twitter")} isRound aria-label='twitter' icon={<Twitter
            width={28}
            height={23}
            color={theme.colors.gray[700]}/>
        } />




    </HStack>

)
};
export default SearchList;