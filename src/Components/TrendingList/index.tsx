import * as React from "react";
import {Text, VStack} from "@chakra-ui/react";
import {TrendingItem} from "../TrendingItem";
import {useContext} from "react";
import {TrendingContext} from "../../contexts/TrendingContext";
import { ITrendingListProps } from "./types";

export const TrendingList: React.FC<ITrendingListProps> = ({hideTitle}) =>{
    const {trending} = useContext(TrendingContext);
    return(
       <VStack minHeight={"410px"} spacing="14px" align="flex-start">
           {!hideTitle && <Text fontSize="24px" color="gray.300" lineHeight="40px">🔥 trending</Text>}
           {trending?.map((t, i)=> {
              return <TrendingItem key={t.topic + i} isFirstTrendingItem={i === 0} numberOfSearches={t.numberOfSearches}
                             title={t.topic} />
           })}
    </VStack>
    )
};
export default TrendingList;