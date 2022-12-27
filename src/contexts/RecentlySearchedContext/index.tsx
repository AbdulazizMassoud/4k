import React, {createContext, useEffect, useState} from "react";
import {IRecentlySearchedContext, IRecentlySearchedItems, IRecentlySearchedProvider} from "./types";

const defaultValue = {
    recentlySearched: [],
    setRecentlySearched: ()=>{}
} as IRecentlySearchedContext;

export const RecentlySearchedContext = createContext<IRecentlySearchedContext>(defaultValue);

export const RecentlySearchedProvider: React.FC<IRecentlySearchedProvider> = ({children}) => {
    const [recentlySearched, setRecentlySearched] = useState<IRecentlySearchedItems[]>([]);
    useEffect(()=>{
        const a = {
            title: "top fifa 2022 players ",
        };
        setRecentlySearched([a, a, a, a, a])
    }, []);
    return <RecentlySearchedContext.Provider value={{recentlySearched, setRecentlySearched}}>
        {children}
    </RecentlySearchedContext.Provider>

}