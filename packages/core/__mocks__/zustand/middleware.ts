// It is hard to set up testing for persistance with async storage. For now we have disabled it by providing the mock functions below.
// However it might be worth looking into in the future
export const persist = (val: unknown) => val;
export const devtools = (val: unknown) => val;

export const createJSONStorage = () => undefined;
