import * as React from "react";
import {HStack, Button, Input, IconButton, Box} from '@chakra-ui/react'
import {Logo} from "../../Icons/Logo";
import {useTheme} from "@chakra-ui/react";
import SearchList from "../SearchList";
import SearchInput from "../SearchInput";
import {BrowserView} from "react-device-detect";


export const SearchBar: React.FC = () =>{
 const theme = useTheme();
  return (
      <HStack pl={25} pr={25} height={63} bgColor="gray.600" borderRadius="60">
          <Box>
              <Logo width={32} height={32} color={theme.colors.black}/>
          </Box>
          <SearchInput />
        <BrowserView renderWithFragment>
        <SearchList/>
        </BrowserView>
      </HStack>
  )  ;
};