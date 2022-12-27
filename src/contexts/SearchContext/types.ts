import React from "react";

export interface ISearchContext {
    search: string
    setSearch: (items: string) => void
    filter: filtersType
    setFilterType: (type: filtersType) => void
}

export interface ISearchProvider {
    children: React.ReactNode
}

export type filtersType = "all" | "tiktok" | "youtube" | "facebook" | "web" | "twitter" | "pinterest" | "instagram"