import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import {isMobile} from "react-device-detect";
import Home from "./Pages/Home";
import theme from "./Styles/Theme";
import AppRoute from "./Routing";
import {TrendingProvider} from "./contexts/TrendingContext";
import {RecentlySearchedProvider} from "./contexts/RecentlySearchedContext";
import {SearchProvider} from "./contexts/SearchContext";


function App() {
    return (

        <ChakraProvider theme={theme}>
            <TrendingProvider>
                <RecentlySearchedProvider>
                    <SearchProvider>
                        <AppRoute/>
                    </SearchProvider>
                </RecentlySearchedProvider>
            </TrendingProvider>
        </ChakraProvider>
    );
}

export default App;
