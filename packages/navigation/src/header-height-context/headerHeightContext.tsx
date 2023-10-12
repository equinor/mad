import React, {
    PropsWithChildren,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { useHeaderHeight as useReactNavigationHeaderHeight } from "@react-navigation/elements";

const HeaderHeightContext = createContext<{
    height: number;
    setHeight?: (h: (height: number) => number) => void;
}>({
    height: 0,
});
/**
 * A header height provider that let's you provide the height of the header to components ABOVE React Navigation in the hiearchy.
 * Useful if you want something to float above all other content, but not block the header.
 */
export const HeaderHeightProvider = ({ children }: PropsWithChildren) => {
    const [height, setHeight] = useState(0);

    const contextValues = useMemo(() => ({ height, setHeight }), [height]);
    return (
        <HeaderHeightContext.Provider value={contextValues}>
            {children}
        </HeaderHeightContext.Provider>
    );
};

/**
 * Get the header height
 * @returns {number} header height
 */
export const useHeaderHeight = () => {
    const context = useContext(HeaderHeightContext);
    return context.height;
};

/**
 * Used within mad navigation to provide the header height
 */
export const HeightSender = () => {
    const headerHeight = useReactNavigationHeaderHeight();
    const { setHeight } = useContext(HeaderHeightContext);
    useEffect(() => {
        setHeight?.(() => headerHeight);
        // eslint-disable-next-line react-hooks/exhaustive-deps -- we only want this to run when header height changes
    }, [headerHeight]);

    return null;
};
