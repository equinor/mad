import { useEffect } from "react";
import { useCoreStackNavigation } from "./useCoreStackNavigation"
import { CoreDictionary } from "../language/types";
import { useDictionary } from "../language/useDictionary";

export const useScreentitleFromDictionary = (pickFn: (dictionary: CoreDictionary) => string) => {
    const dictionary = useDictionary();
    useScreenTitle(pickFn(dictionary))
}  

const useScreenTitle = (title:string) => {
    const navigation = useCoreStackNavigation();
    
    useEffect(() => {
        navigation.setOptions({title})
    }, [title, navigation])
}