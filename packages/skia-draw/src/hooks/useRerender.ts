import { useState } from "react";

export const useRerender = () => {
    const [, setNumberOfRerenders] = useState<number>(0);
    return () => setNumberOfRerenders(state => state + 1);
};
