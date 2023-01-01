import {getApi} from "../constants/apis";
import {ITrendingItems} from "../contexts/TrendingContext/types";

export interface ISearchResponse {
    data: ITrendingItems[]
    success: boolean
}
export const getTrendingTopics = ()=>{
    return  getApi<ISearchResponse>("/trending/").then(res => res.data);
};