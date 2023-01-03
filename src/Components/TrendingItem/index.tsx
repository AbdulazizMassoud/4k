import * as React from "react";
import {ITrendingItemProps} from "./types";
import {Text, VStack} from "@chakra-ui/layout";
import { Link as RLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import {pages} from "../../constants/pages";
import {isMobile} from "react-device-detect";

export const TrendingItem: React.FC<ITrendingItemProps> = ({numberOfSearches, title, isFirstTrendingItem})=>{
return (
<VStack spacing={0} align="flex-start">
    <Link as={RLink} cursor="pointer" to={`${pages.results}/${title}`}>
    <Text title={title} noOfLines={1} fontSize={isMobile? "18px" : "20px"} lineHeight="40px" color="gray.50">
        {title}
    </Text>
    </Link>
</VStack>
)
};