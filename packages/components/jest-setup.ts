import "@testing-library/react-native/extend-expect";
import "react-native-gesture-handler/jestSetup";
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-worklets', () => ({
    createWorkletRuntime: jest.fn(),
    runOnJS: jest.fn(fn => fn),
    runOnUI: jest.fn(fn => fn),
    createSerializable: jest.fn()
}))

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

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
