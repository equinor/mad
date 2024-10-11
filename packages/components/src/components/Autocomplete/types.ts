import { ViewProps } from "react-native";

type AutocompleteTransformItemProp<T> = T extends string
    ? { transformItem?: (item: T) => string }
    : { transformItem: (item: T) => string };

export type GenericAutocompleteProps<T> = {
    options: T[];
} & AutocompleteTransformItemProp<T>;

export type TestProps = Pick<ViewProps, "testID"> & {
    clearButtonTestID?: string;
    displayOptionsButtonTestID?: string;
    menuItemsTestIDFn?: (index: number) => string;
};
