import {Card, Center, Image, Text, Flex, Avatar, Link, useTheme } from "@chakra-ui/react";
import * as React from "react";
import {TikTok} from "../../Icons/TitTok";
import { IResultCardProps } from "./types";
import {searchListItems} from "../../constants/searchList";
import {Web} from "../../Icons/Web";
import {ReactElement, ReactNode} from "react";

const ResultCard: React.FC<IResultCardProps> = ({link, image, title, domain})=>{
    const {colors} = useTheme();
    const getIcon = () =>{
        const iconColor = colors.gray[700];
        const web: ReactElement = <Web
            id="web"
            width={28}
            height={28}
            color={iconColor}/>

        const item = searchListItems.find(t=> domain.includes(t.name));
        return  item ? item.icon(iconColor): web;
    };
    return(
        <Link href={link} isExternal>
    <Card cursor="pointer" borderRadius="5px" width="237px">
        <Image borderRadius="5px" width="237px" height="130px" src={image} />
        <Flex position="relative" borderRadius="5px" bgColor="black" height="130px">
            <Avatar bgColor="white" position="absolute" left="10px" top="-16px"
                    icon={getIcon()} size="sm"/>

            <Center p="20px">
                <Text fontWeight={300} lineHeight="22px" fontSize="18px" color="white" >{title}</Text>
            </Center>
        </Flex>
    </Card>
</Link>
    )
};
export default ResultCard;