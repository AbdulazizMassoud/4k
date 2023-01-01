import * as React from "react";
import {HStack, Box} from '@chakra-ui/react'
import {Logo} from "../../Icons/InActive/Logo";
import {useTheme} from "@chakra-ui/react";
import SearchList from "../SearchList";
import SearchInput from "../SearchInput";
import {BrowserView, isMobile} from "react-device-detect";
import { useNavigate } from "react-router-dom";
import {pages} from "../../constants/pages";


export const SearchBar: React.FC = () =>{
 const theme = useTheme();
 const nav = useNavigate();
 const onClick=()=>{
 nav(pages.home);
 };

 const iconSize = isMobile ? 24 : 32;
  return (
      <HStack pl={25} pr={25} height={isMobile ? "32px" : "63px"} bgColor="gray.600" borderRadius="60">
          <Box cursor="pointer" onClick={onClick}>
              <Logo width={iconSize} height={iconSize} color={theme.colors.black}/>
          </Box>
          <SearchInput />
        <BrowserView renderWithFragment>
        <SearchList/>
        </BrowserView>
      </HStack>
  )  ;
};