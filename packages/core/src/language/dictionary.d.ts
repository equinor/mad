import en from "./en.json";
export type DictionaryObject = typeof en;
export declare function setLanguage(languageCode: string): void;
export declare function getLanguage(): string;
export declare function dictionary(key: keyof DictionaryObject): string;
