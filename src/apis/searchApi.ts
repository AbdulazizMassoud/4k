import {getApi} from "../constants/apis";
import axios from "axios";
import {useState} from "react";

export interface ISearchResponse {
    title: string,
    videos: IVideoDetails[]
}
export interface ISearchQuery {
    qry: string,
    qry_filter: string,
    page: number,
    pagesize: number
}
export interface IVideoDetails {
    date: Date
    domain: string
    img?: string
    link: string
    pk: string
    title: string
}
export const searchApi = (query: ISearchQuery)=>{
  return  getApi<ISearchResponse, ISearchQuery>("search", query).then(res => res.data);
};