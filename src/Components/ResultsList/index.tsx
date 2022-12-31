import {Flex, Image, Spinner} from "@chakra-ui/react";
import * as React from "react";
import {useContext, useEffect, useRef, useState} from "react";
import ResultCard from "../ResultCard";
import InfiniteScroll from "react-infinite-scroll-component";
import {SearchContext} from "../../contexts/SearchContext";
import {ISearchQuery, IVideoDetails, searchApi} from "../../apis/searchApi";

const ResultsList: React.FC = () => {

    const [page, setPage] = useState(0);
    const [items, setItems] = useState<IVideoDetails[]>([]);
    const [initialLoad, setInitialLoad] = useState(true);
    const {search, filter} = useContext(SearchContext);
    const [isEmpty, setIsEmpty] = useState(false);

    const query: ISearchQuery = {
        qry: search,
        qry_filter: filter,
        page,
        pagesize: 20
    };

    const [apiQuery, setApiQuery] = useState("");

    useEffect(()=>{
        setIsEmpty(false)
    }, [search]);

    useEffect(() => {
        const load = async () => {
            await loadFunction();
            setInitialLoad(false);
        };
        initialLoad && load()
    }, []);
    const loadFunction = async () => {
        try{
            console.log(apiQuery, JSON.stringify(query));
            if(JSON.stringify(query) === apiQuery){
                return;
            }
            setApiQuery(JSON.stringify(query));
            const res = await searchApi(query);
            setIsEmpty(res.videos.length === 0);
            setItems([...items, ...res.videos]);
            setPage(page + 1);

        }catch (e) {
            setIsEmpty(true);
            // @ts-ignore
            console.log("error", e.response.data);
        }
    };
    if(isEmpty){
      return   <Flex width="100%" overflow="hidden" justifyContent="center" mt="20px" mb="20px">
          <Image borderRadius="5px"  src="/no_results.png" />
      </Flex>

    }
    return ( initialLoad ?
            <Flex justifyContent="center" alignItems="center" width="100%" height="100%">
                <Spinner color="white" size="xl"/>
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
            <Flex mt="20px" gap={10} flexWrap="wrap" justifyContent="space-evenly">
                {items.length > 0 && items.map((t, i) =>
                    <ResultCard key={t.title + i} domain={t.domain} image={t.img}
                                                                     link={t.link} title={t.title} />)}
            </Flex>

        </InfiniteScroll>

    )
};
export default ResultsList;