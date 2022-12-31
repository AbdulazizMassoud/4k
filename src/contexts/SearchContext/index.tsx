import React, {createContext, useState} from "react";
import {filtersType, ISearchContext, ISearchProvider} from "./types";
import {setRecentlySearchItems} from "../../utils/recenltySearched";
import { useParams } from "react-router-dom";

const defaultValue: ISearchContext = {
    search: "",
    setSearch: ()=>{},
    filter: "all",
    setFilterType: ()=>{}
};
export const SearchContext = createContext<ISearchContext>(defaultValue);

export const SearchProvider: React.FC<ISearchProvider> = ({children}) => {
    const {search: paramSearch} = useParams<{search: string}>();
    const [search, setSearch] = useState<string>(paramSearch? paramSearch : "");
    const [filter, setFilterType] = useState<filtersType>("all");
    const onSearch = (value: string)=>{
        if(value !== search && !!value && value !== ""){
            setRecentlySearchItems(value);
        }

        setSearch(value)
    };
    return <SearchContext.Provider value={{search, setSearch: onSearch, filter, setFilterType}}>
        {children}
    </SearchContext.Provider>

};