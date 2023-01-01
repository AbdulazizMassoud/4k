import React, {createContext, useEffect, useState} from "react";
import {ITrendingContext, ITrendingItems, ITrendingProvider} from "./types";
import {staticTrendingTopics} from "./constants";
import {getTrendingTopics} from "../../apis/getTrendingTopics";

const defaultValue = {trending: []} as ITrendingContext;
export const TrendingContext = createContext<ITrendingContext>(defaultValue);

export const TrendingProvider: React.FC<ITrendingProvider> = ({children}) => {
    const [trending, setTrending] = useState<ITrendingItems[]>([]);
    useEffect(()=>{
        getTrendingTopics().then(res=> {
            if(!res.success)
                throw "";
            setTrending(res.data);
        }).catch(err => {
            setTrending(staticTrendingTopics)
        });
    },[]);
    return <TrendingContext.Provider value={{trending}}>
        {children}
    </TrendingContext.Provider>

}