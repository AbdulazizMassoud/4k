import {getApi} from "../constants/apis";

export interface ISearchResponse {
    title: string,
    videos: IVideoDetails[]
    total_records: number
}
export interface ISearchQuery {
    qry: string,
    qry_filter: string,
    page: number,
    pagesize: number
}
export interface IVideoDetails {
    datePublished: Date
    publisher: string
    thumbnail ?: string
    url: string
    pk: string
    title: string
    description: string
}
export const searchApi = (query: ISearchQuery)=>{
  return  getApi<ISearchResponse, ISearchQuery>("/results", query).then(res => res.data);
};