const useScreenDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const smallScreen =  width < 1300;
    const largeScreen =  width > 1300;

    return {width, height, smallScreen, largeScreen} as const;
};
export default useScreenDimensions;