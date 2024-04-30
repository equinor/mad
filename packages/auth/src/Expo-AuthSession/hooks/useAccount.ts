import { useAuth } from "../store/authStore";

export const useAccount = () => {
    const authState = useAuth();
    return authState.userData;
};
