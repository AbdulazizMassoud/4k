import * as React from "react";
import {Text, VStack, useTheme} from "@chakra-ui/react";
import {TrendingItem} from "../TrendingItem";
import {useContext} from "react";
import {TrendingContext} from "../../contexts/TrendingContext";

export const TrendingList: React.FC = () =>{
    const {colors} = useTheme();
    const {trending} = useContext(TrendingContext);
    return(
       <VStack spacing="18px" align="flex-start">
        <Text fontSize="24px" color="gray.300" lineHeight="40px">🔥 trending</Text>
           {trending.map((t, i)=> {
              return <TrendingItem key={t.topic} isFirstTrendingItem={i === 0} numberOfSearches={200000000}
                             title={t.topic} />
           })}
    </VStack>
    )
};
export default TrendingList;