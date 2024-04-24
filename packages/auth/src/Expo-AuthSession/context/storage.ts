import AsyncStorage from "@react-native-async-storage/async-storage";

// Utility function to save data to storage
export const saveToStorage = async (key: string, value: unknown) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error(e);
    }
};

// Utility function to load data from storage
export const loadFromStorage = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error(e);
    }
};
