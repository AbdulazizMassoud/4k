import {TabList, TabPanel, TabPanels, Tabs, Tab, Text, HStack, useTheme} from "@chakra-ui/react";
import TrendingList from "../TrendingList";
import RecentlySearchedList from "../RecentlySearchedList";
import {default as React, useState} from "react";

const HomeTabs = () => {
    const [activeTab, setActiveTab] = useState("trending");
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
                    <Text color={activeTab === "recentlySearched" ?
                        "gray.50" :
                        "gray.300"}>🧐 recently searched</Text>
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