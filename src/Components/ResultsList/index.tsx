import {Box, Flex, Image, Spinner} from "@chakra-ui/react";
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import ResultCard from "../ResultCard";
import InfiniteScroll from "react-infinite-scroll-component";
import {SearchContext} from "../../contexts/SearchContext";
import {ISearchQuery, IVideoDetails, searchApi} from "../../apis/searchApi";
import { isMobile } from "react-device-detect";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {css} from "@emotion/react";
import MobileResultCard from "../MobileResultCard";

const ResultsList: React.FC = () => {

    const [page, setPage] = useState(1);
    const [items, setItems] = useState<IVideoDetails[]>([]);
    const [initialLoad, setInitialLoad] = useState(true);
    const {search, filter} = useContext(SearchContext);
    const [isEmpty, setIsEmpty] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);

    const query: ISearchQuery = {
        qry: search,
        qry_filter: filter,
        page,
        pagesize: 20
    };
    const wrapperStyle = css`
    width: 100%;
    .list-of-videos > div { 
     width: 100% !important;
     align-items: center;
     }
    `;

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
            if(JSON.stringify(query) === apiQuery){
                return;
            }
            setApiQuery(JSON.stringify(query));
            const res = await searchApi(query);
            const allItems = [...items, ...res.videos];
            setTotalRecords(res.total_records);
            setIsEmpty(allItems.length === 0);
            setItems(allItems);
            setPage(page + 1);
        }catch (e) {
            setIsEmpty(true);
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
        <Box width="100%">
        <InfiniteScroll
            dataLength={items.length} //This is important field to render the next data
            next={loadFunction}
            hasMore={items.length < totalRecords}
            loader={<Flex overflow="hidden" justifyContent="center" mt="20px" mb="20px"
            ><Spinner  color="white" size='md'/></Flex>
            }
        >
            <Box css={wrapperStyle} width="100%" mt={!isMobile ? "20px" : 0}>

                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 650: 2, 1250: 3, 1525: 4, 1821: 5}}
                >
                    <Masonry gutter="30px" className="list-of-videos"  style={{width: "auto"}}>
                {items.length > 0 && items.map((t, i) =>{
                    if(isMobile)
                        return <MobileResultCard  key={t.title + i}
                                                  videoPreview={t.motionThumbnail}
                                                  domain={t.publisher} image={t.thumbnail}
                                            link={t.url} title={t.title} />
                   return <ResultCard  key={t.title + i}
                                       videoPreview={t.motionThumbnail}
                                       domain={t.publisher} image={t.thumbnail}
                                                                     link={t.url} title={t.title} />
                })
                }
                    </Masonry>
                </ResponsiveMasonry>

            </Box>

        </InfiniteScroll>
        </Box>

    )
};
export default ResultsList;