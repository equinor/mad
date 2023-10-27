import { createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createStorage = <T>() => createJSONStorage<T>(() => AsyncStorage);
