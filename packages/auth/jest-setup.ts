// Import Jest Native matchers
import "@testing-library/jest-native/extend-expect";
import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

jest.mock("expo-auth-session");
jest.mock("expo-font");
jest.mock("react-native-reanimated");
jest.mock("react-native-gesture-handler");
jest.mock("react-native-gesture-handler/Swipeable");
jest.mock("@expo/vector-icons");
jest.mock("expo-web-browser");
