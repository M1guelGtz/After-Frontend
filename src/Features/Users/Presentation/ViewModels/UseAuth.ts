import { useState } from "react";
import type { LoginDTO } from "../../Data/Models/LoginDTO";

export function useAuth () {
    const [user, setUser] = useState<LoginDTO | null>(null);
    return {
        user,
        setUser
    }
}