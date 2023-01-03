import {HStack, Text, useTheme, VStack} from "@chakra-ui/react";
import {Search} from "../../Icons/Search";
import RecentlySearchedItem from "../RecentlySearchedItem";
import * as React from "react";
import {useContext} from "react";
import { RecentlySearchedContext } from "../../contexts/RecentlySearchedContext";
import { IRecentlySearchedListProps } from "./types";

const RecentlySearchedList: React.FC<IRecentlySearchedListProps> = ({hideTitle}) => {
    const {colors} = useTheme();
    const {recentlySearched} = useContext(RecentlySearchedContext);
    return(
        <VStack minHeight="330px" spacing="18px" minWidth="300px" align="flex-start">
            {!hideTitle && <Text fontSize="24px" lineHeight="40px" color="gray.300">🧐 recently searched</Text>}
            {
                recentlySearched.map((t, i)=>(
                    <RecentlySearchedItem key={t.title + i} text={t.title}/>
                ))
            }
        </VStack>

    )
};
export default RecentlySearchedList