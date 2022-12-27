import * as React from "react";
import {Controller, useForm} from "react-hook-form";
import {Input} from "@chakra-ui/input";
import {useContext, useEffect} from "react";
import {SearchContext} from "../../contexts/SearchContext";
import {IFormDataProps} from "./types";
import { Box } from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {pages} from "../../constants/pages";
const SearchInput: React.FC = () =>{
    const {search, setSearch} = useContext(SearchContext);
    const nav = useNavigate();
    const { control, handleSubmit, setValue } = useForm<IFormDataProps>({
        defaultValues: {
            search,
        }
    });
    useEffect(()=>{
        search && setValue("search", search);
    }, [search]);

const onSubmit = ({search}: IFormDataProps)=>{
    setSearch(search);
    nav(`${pages.results}/${search}`);
};
    return(
        <Box width="100%">
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="search"
                control={control}
                render={({ field }) =>  <Input fontSize={20}  _placeholder={{ color: 'gray.300' }}
                                                    color="gray.50" variant='unstyled' placeholder='type here' {...field} />
                }
            />
        </form>
        </Box>

    )
};

export default SearchInput