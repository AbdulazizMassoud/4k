import React, {createContext, useContext, useEffect, useState} from "react";
import {IRecentlySearchedContext, IRecentlySearchedItems, IRecentlySearchedProvider} from "./types";
import {getRecentlySearchItems} from "../../utils/recenltySearched";
import {SearchContext} from "../SearchContext";

const defaultValue = {
    recentlySearched: [],
    setRecentlySearched: () => {
    }
} as IRecentlySearchedContext;

export const RecentlySearchedContext = createContext<IRecentlySearchedContext>(defaultValue);

export const RecentlySearchedProvider: React.FC<IRecentlySearchedProvider> = ({children}) => {
    const [recentlySearched, setRecentlySearched] = useState<IRecentlySearchedItems[]>([]);
    const {search} = useContext(SearchContext);

    useEffect(()=>{
        const items = getRecentlySearchItems();
        setRecentlySearched(items.map(t => ({title: t})));
    }, [search]);

    return <RecentlySearchedContext.Provider value={{recentlySearched, setRecentlySearched}}>
        {children}
    </RecentlySearchedContext.Provider>

}