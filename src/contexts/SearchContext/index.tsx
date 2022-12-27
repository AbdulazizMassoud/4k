import React, {createContext, useState} from "react";
import {filtersType, ISearchContext, ISearchProvider} from "./types";

const defaultValue: ISearchContext = {
    search: "",
    setSearch: ()=>{},
    filter: "all",
    setFilterType: ()=>{}
};
export const SearchContext = createContext<ISearchContext>(defaultValue);

export const SearchProvider: React.FC<ISearchProvider> = ({children}) => {
    const [search, setSearch] = useState<string>("");
    const [filter, setFilterType] = useState<filtersType>("all");
    return <SearchContext.Provider value={{search, setSearch, filter, setFilterType}}>
        {children}
    </SearchContext.Provider>

};