import { Autocomplete as _Autocomplete } from "./Autocomplete";
import { MultiselectAutocomplete as MultiselectAutocomplete } from "./MultiselectAutocomplete";

type AutocompleteFamily = typeof _Autocomplete & {
    Multiselect: typeof MultiselectAutocomplete;
};

const Autocomplete = _Autocomplete as AutocompleteFamily;
Autocomplete.Multiselect = MultiselectAutocomplete;

export { Autocomplete };
