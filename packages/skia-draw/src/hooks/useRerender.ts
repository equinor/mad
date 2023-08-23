import { useState } from "react";

export const useRerender = () => {
	const [numberOfRerenders, setNumberOfRerenders] = useState<number>(0);
	return () => setNumberOfRerenders(state => state + 1);
};
