import { useLanguage } from "../store/language"
import * as enDictionary from "./en.json"
import * as nbDictionary from "./nb.json"
import { CoreDictionary } from "./types";

export const useDictionary = (): CoreDictionary => {
    const {language} = useLanguage();
    switch (language.code) {
        case "no":
        case "nb":
            return withEnglishFallback(nbDictionary)
        default:
            return enDictionary
    }
}

/**
 * converts a dictionary to a dictionary with english fallback if some parts have not been translated to that language
 * @param dictionary 
 * @returns 
 */
const withEnglishFallback = (dictionary: object): CoreDictionary => ({...enDictionary, ...dictionary})