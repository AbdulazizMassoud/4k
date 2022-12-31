import React from 'react';
import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./Styles/Theme";
import AppRoute from "./Routing";
import {TrendingProvider} from "./contexts/TrendingContext";
import {RecentlySearchedProvider} from "./contexts/RecentlySearchedContext";
import {SearchProvider} from "./contexts/SearchContext";
import axios from "axios";

axios.defaults.baseURL = "http://66.94.104.110:8010/";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";


function App() {
    return (

        <ChakraProvider theme={theme}>
            <SearchProvider>
            <TrendingProvider>
                <RecentlySearchedProvider>
                        <AppRoute/>
                </RecentlySearchedProvider>
        </TrendingProvider>
            </SearchProvider>
        </ChakraProvider>
    );
}

export default App;
