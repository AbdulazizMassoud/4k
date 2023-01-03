import * as React from "react";
import {Controller, useForm} from "react-hook-form";
import {Input} from "@chakra-ui/input";
import {useContext, useEffect} from "react";
import {SearchContext} from "../../contexts/SearchContext";
import {IFormDataProps} from "./types";
import {Box} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {pages} from "../../constants/pages";
import {isMobile} from "react-device-detect";

const SearchInput: React.FC = () => {
    const {search, setSearch} = useContext(SearchContext);
    const nav = useNavigate();
    const {control, handleSubmit, setValue} = useForm<IFormDataProps>({
        defaultValues: {
            search,
        }
    });
    useEffect(() => {
        setValue("search", search);
    }, [search]);

    const onSubmit = ({search}: IFormDataProps) => {
        if (!search)
            return;
        setSearch(search);
        nav(`${pages.results}/${search}`);
    };
    return (
        <Box width="100%">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="search"
                    control={control}
                    render={({field}) =>
                        <Input fontSize={isMobile ? "16px" : "20px"}
                               _placeholder={{color: 'gray.300'}}
                               color="gray.50" variant='unstyled' placeholder='type here' {...field} />
                    }
                />
            </form>
        </Box>

    )
};

export default SearchInput