import { Settings } from "luxon";
import en from "./en.json";
import no from "./no.json";

export type DictionaryObject = typeof en;

const dictionaries: Record<string, DictionaryObject> = {
  en,
  no,
};

let language = "";
export function setLanguage(languageCode : string){
  Settings.defaultLocale = languageCode;
  language = languageCode;
}

export function getLanguage(){
  return language;
}

export function dictionary(key: keyof DictionaryObject) {
  if(!language){
    return key;
  }
  const str = dictionaries[language][key];
  return str || key;

}
