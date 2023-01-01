import React, {createContext, useEffect, useState} from "react";
import {ITrendingContext, ITrendingItems, ITrendingProvider} from "./types";
import {staticTrendingTopics} from "./constants";

const defaultValue = {trending: []} as ITrendingContext;
export const TrendingContext = createContext<ITrendingContext>(defaultValue);

export const TrendingProvider: React.FC<ITrendingProvider> = ({children}) => {
    const [trending, setTrending] = useState<ITrendingItems[]>(staticTrendingTopics);

    return <TrendingContext.Provider value={{trending}}>
        {children}
    </TrendingContext.Provider>

}