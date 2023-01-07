import {Card, Center, Image, Text, Flex, Avatar, Link, Box} from "@chakra-ui/react";
import * as React from "react";
import {IResultCardProps} from "./types";
import {cardSearchListItems} from "../../constants/searchList";
import {Web} from "../../Icons/Active/Web";
import {ReactElement} from "react";
import {isMobile} from "react-device-detect";
import {css} from "@emotion/react";

const ResultCard: React.FC<IResultCardProps> = ({link, image, title, domain}) => {
    const getIcon = () => {
        const web: ReactElement = <Web
            width={32}
            height={32}
        />;

        const item = cardSearchListItems.find(t => domain?.toLowerCase().includes(t.name));
        return item ? item.icon : web;
    };
    const st = css`
    -webkit-line-clamp: 2;
     overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
           line-clamp: 2; 
   -webkit-box-orient: vertical;
   word-wrap: "unset";
    `;
    return (
        <Link href={link} isExternal>
            <Card cursor="pointer" borderRadius="5px" width={!isMobile ? "237px" : "155px"}>
                <Image borderRadius="5px" width={!isMobile ? "237px" : "155px"} height={!isMobile ? "130px" : "95px"}
                       src={image && image !== "" ? image : "/no_image_icon.png"}/>
                <Flex position="relative" borderRadius="5px" bgColor="black" height={!isMobile ? "90px" : "65px"}>
                    <Avatar bgColor="transparent" position="absolute" left="10px" top={isMobile ? "-12px" : "-16px"}
                            icon={getIcon()} size={isMobile ? "xs" : "sm"}/>

                    <Box p="20px 10px" width="100%">
                        <Text
                            title={title}
                            css={st}
                            fontWeight={300}
                            lineHeight={isMobile ? "14px" : "22px"}
                            fontSize={isMobile ? "12px" : "18px"}
                            color="white">{title}</Text>
                    </Box>
                </Flex>
            </Card>
        </Link>
    )
};
export default ResultCard;