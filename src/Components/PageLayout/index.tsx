import * as React from "react";
import {IPageLayoutProps} from "./types";
import {Divider, Flex, VStack, Box} from "@chakra-ui/layout";
import {SearchBar} from "../SearchBar";
import TrendingList from "../TrendingList";
import RecentlySearchedList from "../RecentlySearchedList";
import {BrowserView, MobileView} from "react-device-detect";
import SearchList from "../SearchList";

const PageLayout: React.FC<IPageLayoutProps> = ({children}) =>{
    return(
        <Flex gap="30px">
            <Box flex={8}>
                <SearchBar/>
                <MobileView renderWithFragment>
                    <Box mt={"20px"}>
                    <SearchList/>
                    </Box>
                </MobileView>

                {children}
            </Box>
            <BrowserView renderWithFragment>
            <Box flex={2}>
                <Flex height="100%">
                    <Divider borderColor="gray.300" mr="20px" height="100%" orientation='vertical' />
                    <VStack align="flex-start" spacing="18px">
                        <TrendingList />
                        <Divider width="76%" borderColor="gray.300" />
                        <RecentlySearchedList/>
                    </VStack>

                </Flex>
            </Box>
            </BrowserView>
        </Flex>
    )
};
export default PageLayout