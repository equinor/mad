import * as SecureStore from "expo-secure-store";

// Utility function to save data to storage
export const saveToStorage = (key: string, value: unknown) => {
    try {
        const jsonValue = JSON.stringify(value);
        void SecureStore.setItemAsync(key, jsonValue);
    } catch (e) {
        console.error(e);
    }
};

// Utility function to load data from storage
export const loadFromStorage = async (key: string): Promise<unknown> => {
    try {
        const jsonValue = await SecureStore.getItemAsync(key);
        return jsonValue != null ? (JSON.parse(jsonValue) as unknown) : null;
    } catch (e) {
        console.error(e);
        return null;
    }
};
