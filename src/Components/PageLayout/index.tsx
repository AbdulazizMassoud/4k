import * as React from "react";
import {IPageLayoutProps} from "./types";
import {Divider, Flex, VStack, Box} from "@chakra-ui/layout";
import {SearchBar} from "../SearchBar";
import TrendingList from "../TrendingList";
import RecentlySearchedList from "../RecentlySearchedList";
import {BrowserView, isMobile} from "react-device-detect";
import SearchList from "../SearchList";
import {css} from "@emotion/react";
import useScreenDimensions from "../../hooks/useScreenDimensions";

const PageLayout: React.FC<IPageLayoutProps> = ({children}) => {
    const searchBarStyle = css`
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1;
    `;
    const rightSideMenu = css`
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    `;
    const {smallScreen} = useScreenDimensions();

    return (
        <Flex gap="30px">
            <Box flex={8}>
                <Box pb={"20px"} bg="gray.700" css={searchBarStyle}>
                    <SearchBar/>
                    {(isMobile || smallScreen) &&
                    <Box mt={"20px"}>
                        <SearchList/>
                    </Box>
                    }
                </Box>
                {children}
            </Box>
            <BrowserView renderWithFragment>
                <Box flex={2}>
                    <Flex css={rightSideMenu} >
                        <Divider borderColor="gray.300" mr="20px" height="1000px" orientation='vertical'/>
                        <VStack  align="flex-start" spacing="18px">
                            <TrendingList/>
                            <Divider width="76%" borderColor="gray.300"/>
                            <RecentlySearchedList/>
                        </VStack>

                    </Flex>
                </Box>
            </BrowserView>
        </Flex>
    )
};
export default PageLayout