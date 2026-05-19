// Import Jest Native matchers
import "@testing-library/jest-native/extend-expect";
import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";
import "react-native-gesture-handler/jestSetup";


jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

jest.mock('react-native-worklets', () => ({
    createWorkletRuntime: jest.fn(),
    runOnJS: jest.fn(fn => fn),
    runOnUI: jest.fn(fn => fn),
    createSerializable: jest.fn()
}))

jest.mock("expo-auth-session");
jest.mock("expo-font");

jest.mock('react-native-gesture-handler/src/RNGestureHandlerModule', () => ({
    __esModule: true,
    default: {
        Direction: { RIGHT: 1, LEFT: 2, UP: 4, DOWN: 8 },
        State: { UNDETERMINED: 0, FAILED: 1, BEGAN: 2, CANCELLED: 3, ACTIVE: 4, END: 5 },
        attachGestureHandler: jest.fn(),
        createGestureHandler: jest.fn(),
        dropGestureHandler: jest.fn(),
        updateGestureHandler: jest.fn(),
        flushOperations: jest.fn(),
        install: jest.fn(),
    }
}));

jest.mock("@expo/vector-icons");
jest.mock("expo-web-browser");
