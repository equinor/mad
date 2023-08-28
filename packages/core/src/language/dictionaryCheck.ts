import * as en from "./en.json";
import * as no from "./no.json";

/**
 * ADD NEW LANGUAGES HERE. The test will compare
 * all languages in this array to the first language in the array
 */
const languages = [
  { dictionary: en, name: "English" },
  { dictionary: no, name: "Norwegian" },
];

let warning = "";
const primaryLanguage = languages[0];
const keys = Object.keys(primaryLanguage.dictionary);
languages
  .filter((_, index) => index !== 0)
  .forEach((language) => {
    keys.forEach((key) => {
      if (!language.dictionary[key])
        warning += `"${key}" is missing from the ${language.name} language and will default to english\n`;
    });
  });

if (warning) {
  // The weird characters are for adding colors to the log
  warning = `\x1b[31mWARNING:\n\x1b[33m${warning}\x1b[0m`;
  // eslint-disable-next-line no-console
  console.warn(warning);
}
