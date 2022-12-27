import React from "react";

export interface ITrendingContext {
    trending: ITrendingItems[]
}
export interface ITrendingItems {
    topic: string
    videos: any[]
}
export interface ITrendingProvider {
    children: React.ReactNode
}