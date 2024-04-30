// Import Jest Native matchers
import "@testing-library/jest-native/extend-expect";

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("react-native-msal");
jest.mock("expo-font");
jest.mock("react-native-reanimated");
jest.mock("react-native-gesture-handler");
jest.mock("react-native-gesture-handler/Swipeable");
jest.mock("@expo/vector-icons");
jest.mock("expo-web-browser");
