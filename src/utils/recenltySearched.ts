export const setRecentlySearchItems = (searchedValue: string) =>{
    let items = getRecentlySearchItems();

    if(items.includes(searchedValue)){
        items = items.filter(s=> s !== searchedValue);
    }
    items = [searchedValue, ...items];
    localStorage.setItem("4k_recently_searched", JSON.stringify(items));
};

export const getRecentlySearchItems = (): string[] =>{
    const items = localStorage.getItem("4k_recently_searched");
    const array  = items ? JSON.parse(items) as string[] : [];
    return array.slice(0, 5);
};