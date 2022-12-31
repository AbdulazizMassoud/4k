import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import queryString from "query-string";


export const getApi = <Response, Query = null>
(url: string, query?: Query, config?: object) =>{
    let newUrl = url;
    if(query){
        newUrl = `${newUrl}?${queryString.stringify(query)}`;

    }
    return axios.get<Response, AxiosResponse<Response, object>, object>(newUrl, config);
};
export const deleteApi = <Response, Query = null>
(url: string, query?: Query, config?: object) =>{
    let newUrl = url;
    if(query){
        newUrl = `${newUrl}?${queryString.stringify(query)}`;
    }
    return axios.delete<Response, AxiosResponse<Response, object>, object>(newUrl, config);
};

export const postApi = <Data, Response, Query = null>
(url: string, data: Data, query?: Query, config?: AxiosRequestConfig<Data>) =>{
    let newUrl = url;
    if(query){
        newUrl = `${newUrl}?${queryString.stringify(query)}`;
    }
    return axios.post<Response, AxiosResponse<Response, Data>, Data>(newUrl, data, config);
};

export const putApi = <Data, Response, Query = null>
(url: string, data: Data, query?: Query, config?: object) =>{
    let newUrl = url;
    if(query){
        newUrl = `${newUrl}?${queryString.stringify(query)}`;
    }
    return axios.put<Response, AxiosResponse<Response, Data>, Data>(newUrl, data, config);
};
