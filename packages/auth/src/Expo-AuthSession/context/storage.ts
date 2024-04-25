import * as SecureStore from "expo-secure-store";

// Utility function to save data to storage
export const saveToStorage = async (key: string, value: unknown) => {
    try {
        const jsonValue = JSON.stringify(value);
        await SecureStore.setItemAsync(key, jsonValue);
    } catch (e) {
        console.error(e);
    }
};

// Utility function to load data from storage
export const loadFromStorage = async (key: string) => {
    try {
        const jsonValue = await SecureStore.getItemAsync(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error(e);
    }
};
