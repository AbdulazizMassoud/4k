import * as React from "react";
import {IRecentlySearchedItem} from "./types";
import {Link, Text} from "@chakra-ui/layout";
import {Link as RLink} from "react-router-dom";
import {pages} from "../../constants/pages";
import { isMobile } from "react-device-detect";

export const RecentlySearchedItem: React.FC<IRecentlySearchedItem> = ({text}) =>{
   return(
       <Link as={RLink} cursor="pointer"  to={`${pages.results}/${text}`}>
           <Text title={text}  noOfLines={1} fontSize={isMobile? "18px" : "20px"} lineHeight={"40px"} color="gray.50">
           {text}
       </Text>
       </Link>
   )
};
export default RecentlySearchedItem;