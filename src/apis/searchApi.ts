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
    date: Date
    domain: string
    img?: string
    link: string
    pk: string
    title: string
}
export const searchApi = (query: ISearchQuery)=>{
  return  getApi<ISearchResponse, ISearchQuery>("/results", query).then(res => res.data);
};