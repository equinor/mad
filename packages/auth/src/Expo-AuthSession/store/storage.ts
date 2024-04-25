import * as SecureStore from "expo-secure-store";

export const saveToStorage = (key: string, value: unknown) => {
    try {
        const jsonValue = JSON.stringify(value);
        void SecureStore.setItemAsync(key, jsonValue);
    } catch (e) {
        console.error(e);
    }
};

export const loadFromStorage = async (key: string): Promise<unknown> => {
    try {
        const jsonValue = await SecureStore.getItemAsync(key);
        return jsonValue != null ? (JSON.parse(jsonValue) as unknown) : null;
    } catch (e) {
        console.error(e);
        return null;
    }
};
