import {HStack} from "@chakra-ui/layout";
import {Button, IconButton} from "@chakra-ui/button";
import * as React from "react";
import {Flex, useTheme} from "@chakra-ui/react";
import {useContext} from "react";
import {SearchContext} from "../../contexts/SearchContext";
import {filtersType} from "../../contexts/SearchContext/types";
import {isMobile} from "react-device-detect";
import {searchListItemsIcons} from "../../constants/searchList";

export const SearchList: React.FC = () => {
    const {filter, setFilterType} = useContext(SearchContext);
    const {colors} = useTheme();
    const onClick = (filter: filtersType) => {
        setFilterType(filter);
    };
    const isActive = (currentItem: filtersType) => {
        return filter === currentItem
    };
    const iconsSize = isMobile ? "sm" : undefined;
    const buttons = () => {
        const size = isMobile ? 24 : 41;
        return <>


            <Button onClick={() => onClick("all")}
                    id="all"
                    color={"gray.700"}
                    bgColor={isActive("all") ? "gray.50" : "gray.500"}
                    width={isMobile ? 43 : 71}
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
    return (
        <>
            {
                !isMobile ? <HStack spacing="18px" borderRadius="60">
                        {buttons()}
                    </HStack>
                    :
                    <Flex flexWrap="wrap" gap="10px" justifyContent="flex-start">
                        {buttons()}
                    </Flex>
            }
        </>

    )
};
export default SearchList;