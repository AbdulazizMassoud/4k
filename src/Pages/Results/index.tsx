import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {useContext, useEffect} from "react";
import {SearchContext} from "../../contexts/SearchContext";
import ResultsList from "../../Components/ResultsList";
import {VStack} from "@chakra-ui/layout";

export const Results: React.FC = ()=>{
    const {search} = useParams<{search: string}>();
    const {search: contextSearch, setSearch, filter} = useContext(SearchContext);
    const nav = useNavigate();

    useEffect(()=>{
        if(search && (contextSearch !== search)){
            //if the use change the value from url
            setSearch(search);
        }
    },[search]);

    if(!search || search === ""){
        nav("/");
        return null;
    }

    return (
        <VStack key={contextSearch + filter} height="100%" width="100%" overflow="auto" align="flex-start">
            {contextSearch && <ResultsList/>}
        </VStack>


    )
};