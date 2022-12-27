import * as React from "react";
import {IRecentlySearchedItem} from "./types";
import {Text} from "@chakra-ui/layout";

export const RecentlySearchedItem: React.FC<IRecentlySearchedItem> = ({text}) =>{
   return(
       <Text title={text} noOfLines={1} fontSize="24px" lineHeight="40px" color="gray.50">
           {text}
       </Text>
   )
};
export default RecentlySearchedItem;