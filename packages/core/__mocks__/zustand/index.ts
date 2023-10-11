// this is a mock of zustand that helps resetting zustand between each test. It is copied directly from zustand's website.
// See https://docs.pmnd.rs/zustand/guides/testing

import * as zustand from "zustand";
import { act } from "@testing-library/react-native";

const { create: actualCreate, createStore: actualCreateStore } =
    jest.requireActual<typeof zustand>("zustand");

// a variable to hold reset functions for all stores declared in the app
export const storeResetFns = new Set<() => void>();

// when creating a store, we get its initial state, create a reset function and add it in the set
export const create = (<T>() => {
    console.log("zustand create mock");

    return (stateCreator: zustand.StateCreator<T>) => {
        const store = actualCreate(stateCreator);
        const initialState = store.getState();
        storeResetFns.add(() => {
            store.setState(initialState, true);
        });
        return store;
    };
}) as typeof zustand.create;

// when creating a store, we get its initial state, create a reset function and add it in the set
export const createStore = (<T>(stateCreator: zustand.StateCreator<T>) => {
    console.log("zustand createStore mock");

    const store = actualCreateStore(stateCreator);
    const initialState = store.getState();
    storeResetFns.add(() => {
        store.setState(initialState, true);
    });
    return store;
}) as typeof zustand.createStore;

// reset all stores after each test run
afterEach(() => {
    act(() => {
        storeResetFns.forEach(resetFn => {
            resetFn();
        });
    });
});
