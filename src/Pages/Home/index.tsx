import { VStack } from "@chakra-ui/react";
import * as React from "react";
import {MobileView} from "react-device-detect";
import HomeTabs from "../../Components/HomeTabs";
import {useContext, useEffect} from "react";
import {SearchContext} from "../../contexts/SearchContext";

export const Home: React.FC = ()=>{
    const {setSearch} = useContext(SearchContext);
    useEffect(()=>{
        setSearch("");
    }, []);
    return (
        <VStack overflow="auto" align="flex-start">
            <MobileView renderWithFragment>
                <HomeTabs/>
            </MobileView>
        </VStack>
    )
};
export default Home;