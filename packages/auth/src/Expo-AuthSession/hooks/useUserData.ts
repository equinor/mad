import { useState } from "react";
import { MadAccount } from "../../types";

export function useUserData() {
    const [userData, setUserData] = useState<MadAccount | null>(null);
    return { userData, setUserData };
}
