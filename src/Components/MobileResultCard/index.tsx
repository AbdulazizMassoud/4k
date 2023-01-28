import {Card, Center, Image, Text, Flex, Avatar, Link, Box, Spinner} from "@chakra-ui/react";
import * as React from "react";
import {cardSearchListItems} from "../../constants/searchList";
import {Web} from "../../Icons/Active/Web";
import {ReactElement} from "react";
import {css} from "@emotion/react";
import {IResultCardProps} from "../ResultCard/types";
import Video from "../../Icons/Video";
import HoverVideoPlayer from 'react-hover-video-player';

const MobileResultCard: React.FC<IResultCardProps> = ({link, image, title, domain, videoPreview}) => {
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
    const videoStyle = css`
        background-color: transparent;
        overflow: hidden;

    &  video {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    }
    `;

    const imgHeight = React.useMemo(() => {
        const item = cardSearchListItems.find(t => domain?.toLowerCase().includes(t.name));
        return item?.name === "tiktok" ? "381px" : "145px";
    }, []);
    return (
        <Card css={videoStyle} cursor="pointer" borderRadius="5px" width={"245px"}>
            {videoPreview ? <HoverVideoPlayer
                    videoSrc={videoPreview}
                    style={{
                        width: "100%",
                        height: imgHeight,
                        borderRadius: "5px",
                        zIndex: 0
                    }}
                    controls
                    controlsList="nodownload noplaybackrate nofullscreen"
                    loadingOverlay={<Flex overflow="hidden" justifyContent="center" mt="20px" mb="20px"
                    ><Spinner color="white" size='md'/></Flex>}
                    pausedOverlay={
                        <Image borderRadius="5px" width={"245px"} height={imgHeight}
                               src={image && image !== "" ? image : "/no_image_icon.png"}/>}
                /> :
                <Image borderRadius="5px" width={"245px"} height={imgHeight}
                       src={image && image !== "" ? image : "/no_image_icon.png"}/>
            }


            {videoPreview && <Box position="absolute" top="25px" right="10px">
                <Video width={18} height={18} color="#fff"/>
            </Box>}
            <Link width={"245px"} href={link} isExternal>

                <Flex position="relative" borderRadius="5px" bgColor="black" height={"65px"}>
                    <Avatar bgColor="transparent" position="absolute" left="10px" top={"-12px"}
                            icon={getIcon()} size={"xs"}/>

                    <Box p="20px 10px" width="100%">
                        <Text
                            title={title}
                            css={st}
                            fontWeight={300}
                            lineHeight={"14px"}
                            fontSize={"12px"}
                            color="white">{title}</Text>
                    </Box>
                </Flex>
            </Link>
        </Card>
    )
};
export default MobileResultCard;