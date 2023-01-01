import React from 'react';
import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./Styles/Theme";
import AppRoute from "./Routing";
import {TrendingProvider} from "./contexts/TrendingContext";
import {RecentlySearchedProvider} from "./contexts/RecentlySearchedContext";
import {SearchProvider} from "./contexts/SearchContext";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

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
