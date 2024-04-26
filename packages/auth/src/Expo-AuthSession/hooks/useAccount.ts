import { useAuth } from "../store";

export const useAccount = () => {
    const authState = useAuth();
    return authState.userData;
};
