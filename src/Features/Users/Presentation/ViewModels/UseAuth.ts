import { useState } from "react";
import type { LoginResponseDTO } from "../../Data/Models/LoginResponseDTO";

export function useAuth () {
    const [user, setUser] = useState<LoginResponseDTO | null>(null);
    return {
        user,
        setUser
    }
}