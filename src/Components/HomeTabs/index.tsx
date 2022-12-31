import {TabList, TabPanel, TabPanels, Tabs, Tab, Text, HStack, useTheme} from "@chakra-ui/react";
import TrendingList from "../TrendingList";
import RecentlySearchedList from "../RecentlySearchedList";
import {default as React, useState} from "react";
import {Search} from "../../Icons/Search";

const HomeTabs = () => {
    const [activeTab, setActiveTab] = useState("trending");
    const {colors} = useTheme()
    return (
        <Tabs mt={"20px"} variant="unstyled">
            <TabList>
                <Tab
                    onClick={() => {
                        setActiveTab("trending")
                    }}>
                    <Text color={activeTab === "trending"
                        ? "gray.50" :
                        "gray.300"}>🔥 trending</Text>
                </Tab>
                <Tab onClick={() => {
                    setActiveTab("recentlySearched")
                }}>
                    <HStack align="center">
                        <Search width={18} height={18} color={colors.gray[300]}/>
                        <Text color={activeTab === "recentlySearched" ?
                            "gray.50" :
                            "gray.300"}>recently searched</Text>
                    </HStack>
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <TrendingList hideTitle/>
                </TabPanel>
                <TabPanel>
                    <RecentlySearchedList hideTitle/>
                </TabPanel>

            </TabPanels>
        </Tabs>
    )
};
export default HomeTabs