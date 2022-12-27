import React, {createContext, useEffect, useState} from "react";
import {ITrendingContext, ITrendingItems, ITrendingProvider} from "./types";

const defaultValue = {trending: []} as ITrendingContext;
export const TrendingContext = createContext<ITrendingContext>(defaultValue);

export const TrendingProvider: React.FC<ITrendingProvider> = ({children}) => {
    const [trending, setTrending] = useState<ITrendingItems[]>([]);
    useEffect(()=>{
        const a = {
            topic: "top fifa 2022 players",
            videos: []
        };
        setTrending([a, a, a, a, a])
    }, []);
    return <TrendingContext.Provider value={{trending}}>
        {children}
    </TrendingContext.Provider>

}