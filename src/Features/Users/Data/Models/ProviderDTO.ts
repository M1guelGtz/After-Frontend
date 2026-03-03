import type { LoginDTO } from "./LoginDTO";

export interface ProviderDTO {
    user: LoginDTO | null;
    setUser: (user: LoginDTO | null) => void
}
