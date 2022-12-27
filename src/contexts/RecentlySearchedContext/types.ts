import React from "react";

export interface IRecentlySearchedContext {
    recentlySearched: IRecentlySearchedItems[]
    setRecentlySearched: (items: IRecentlySearchedItems[]) => void
}
export interface IRecentlySearchedItems {
    title: string
}
export interface IRecentlySearchedProvider {
    children: React.ReactNode
}