import { Autocomplete as _Autocomplete } from "./Autocomplete";
import { MultiSelectAutocomplete } from "./MultiSelectAutocomplete";

type AutocompleteFamily = typeof _Autocomplete & {
    MultiSelect: typeof MultiSelectAutocomplete;
};

const Autocomplete = _Autocomplete as AutocompleteFamily;
Autocomplete.MultiSelect = MultiSelectAutocomplete;

export { Autocomplete };
