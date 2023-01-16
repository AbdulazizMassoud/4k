import {HStack} from "@chakra-ui/layout";
import {Button, IconButton} from "@chakra-ui/button";
import * as React from "react";
import {Flex, useTheme} from "@chakra-ui/react";
import {useContext} from "react";
import {SearchContext} from "../../contexts/SearchContext";
import {filtersType} from "../../contexts/SearchContext/types";
import {isMobile} from "react-device-detect";
import {searchListItemsIcons} from "../../constants/searchList";
import useScreenDimensions from "../../hooks/useScreenDimensions";

export const SearchList: React.FC = () => {
    const {filter, setFilterType} = useContext(SearchContext);
    const {colors} = useTheme();
    const onClick = (filter: filtersType) => {
        setFilterType(filter);
    };
    const isActive = (currentItem: filtersType) => {
        return filter === currentItem
    };
    const {width} = useScreenDimensions();
    const listWidth = 420;
    const iconsSize = isMobile ? "sm" : undefined;
    const buttons = () => {
        return <>
            <Button onClick={() => onClick("all")}
                    id="all"
                    color={"gray.700"}
                    bgColor={isActive("all") ? "gray.50" : "gray.500"}
                    width={isMobile ? "24px" : "40px"}
                    height={isMobile ? "32px" : undefined}
                    borderRadius="33px">all</Button>

            {searchListItemsIcons.map(item => {
                const {name, activeIcon, inActiveIcon} = item;
                const isActiveIcon = isActive(name);
                return <IconButton
                    key={name}
                    onClick={() => onClick(name)}
                    size={iconsSize}
                    _hover={isActiveIcon ? {bg: "transparent"} : undefined}
                    isRound aria-label={name}
                    bgColor={isActiveIcon ? "transparent" : "gray.500"}
                    icon={isActiveIcon ? activeIcon : inActiveIcon(colors.gray[700])}
                />
            })}

        </>
    };
    const {smallScreen} = useScreenDimensions();

    return (
        <>
            {
                !isMobile ? <HStack justifyContent={smallScreen ? "space-between" : "flex-start"} spacing="14px"
                                    borderRadius="60">
                        {buttons()}
                    </HStack>
                    :
                    <Flex overflow="auto" sx={
                        {
                            "&::-webkit-scrollbar": {
                                display: "none"
                            }
                        }
                    } width={width - 60 < listWidth ? width - 60 : "100%"} gap="10px" justifyContent={width - 60 < listWidth ? "flex-start" : "center"}>
                        {buttons()}
                    </Flex>
            }
        </>

    )
};
export default SearchList;