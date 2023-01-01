import {Card, Center, Image, Text, Flex, Avatar, Link, useTheme } from "@chakra-ui/react";
import * as React from "react";
import { IResultCardProps } from "./types";
import {cardSearchListItems} from "../../constants/searchList";
import {Web} from "../../Icons/Active/Web";
import {ReactElement} from "react";
import { isMobile } from "react-device-detect";

const ResultCard: React.FC<IResultCardProps> = ({link, image, title, domain})=>{
    const getIcon = () =>{
        const web: ReactElement = <Web
            width={32}
            height={32}
            />;

        const item = cardSearchListItems.find(t=> domain.includes(t.name));
        return  item ? item.icon: web;
    };
    return(
        <Link href={link} isExternal>
    <Card cursor="pointer" borderRadius="5px" width={!isMobile ? "237px" : "140px"}>
        <Image borderRadius="5px" width={!isMobile ? "237px" : "140px"} height={!isMobile ? "130px" : "95px"}
               src={image && image !== "" ? image : "/no_image_icon.png"} />
        <Flex position="relative" borderRadius="5px" bgColor="black" height={!isMobile ? "130px" : "95px"}>
            <Avatar bgColor="transparent" position="absolute" left="10px" top={isMobile ? "-12px" : "-16px"}
                    icon={getIcon()} size={isMobile ? "xs" : "sm"}/>

            <Center p="20px">
                <Text wordBreak="break-all" fontWeight={300} lineHeight={isMobile ? "14px" : "22px"}
                      fontSize={isMobile ? "12px" : "18px"}
                      color="white" >{title}</Text>
            </Center>
        </Flex>
    </Card>
</Link>
    )
};
export default ResultCard;