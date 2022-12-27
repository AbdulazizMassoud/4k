import {HStack, Text, useTheme, VStack} from "@chakra-ui/react";
import {Search} from "../../Icons/Search";
import RecentlySearchedItem from "../RecentlySearchedItem";
import * as React from "react";
import {useContext} from "react";
import { RecentlySearchedContext } from "../../contexts/RecentlySearchedContext";

const RecentlySearchedList: React.FC = () => {
    const {colors} = useTheme();
    const {recentlySearched} = useContext(RecentlySearchedContext);
    return(
        <VStack spacing="18px" minWidth="300px" align="flex-start">
            <HStack align="center">
                <Search width={24} height={24} color={colors.gray[300]}/>
                <Text fontSize="24px" lineHeight="40px" color="gray.300">recently searched</Text>
            </HStack>
            {
                recentlySearched.map(t=>(
                    <RecentlySearchedItem key={t.title} text={t.title}/>
                ))
            }
        </VStack>

    )
};
export default RecentlySearchedList