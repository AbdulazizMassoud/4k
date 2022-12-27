import * as React from "react";
import {ITrendingItemProps} from "./types";
import {Text, VStack} from "@chakra-ui/layout";
import { Link as RLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import {pages} from "../../constants/pages";

export const TrendingItem: React.FC<ITrendingItemProps> = ({numberOfSearches, title, isFirstTrendingItem})=>{
return (
<VStack spacing={0} align="flex-start">
    <Text fontSize={isFirstTrendingItem ? "20px" : "18px"} lineHeight="40px" color="gray.300">
        {numberOfSearches.toLocaleString("en-US")} searches
    </Text>
    <Link as={RLink} to={`${pages.results}/${title}`}>
    <Text title={title} noOfLines={1} fontSize="24px" lineHeight="40px" color="gray.50">
        {title}
    </Text>
    </Link>
</VStack>
)
};