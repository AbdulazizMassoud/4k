import {Box, Center, Flex, Spinner} from "@chakra-ui/react";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {IResultCardProps} from "../ResultCard/types";
import ResultCard from "../ResultCard";
import {getResults} from "../../constants/mockdata";
import InfiniteScroll from "react-infinite-scroll-component";

const ResultsList: React.FC = () => {
    const [page, setPage] = useState(0);
    const [items, setItems] = useState<IResultCardProps[]>([]);
    const [initialLoad, setInitialLoad] = useState(true);
    useEffect(() => {
        const load = async () => {
            await loadFunction();
            setInitialLoad(false);
        };
        initialLoad && load()
    }, []);
    const loadFunction = async () => {

        const res = await getResults();
        setItems([...items, ...res as IResultCardProps[]]);
        setPage(page + 1);
    };
    return ( initialLoad ?
            <Flex justifyContent="center" alignItems="center" width="100%" height="100%">
                <Spinner color="white" size="xl"></Spinner>
            </Flex>

            :
        <InfiniteScroll
            dataLength={items.length} //This is important field to render the next data
            next={loadFunction}
            hasMore={items.length < 40}
            loader={<Flex overflow="hidden" justifyContent="center" mt="20px" mb="20px"
            ><Spinner  color="white" size='md'/></Flex>
            }
        >
            <Flex mt="20px" gap={10} flexWrap="wrap" justifyContent="flex-start">
                {items.length > 0 && items.map((t, i) => <ResultCard key={t.title + i} domain={t.domain} image={t.image}
                                                                     link={t.link} title={t.title}/>)}
            </Flex>

        </InfiniteScroll>

    )
};
export default ResultsList;