import type { LoginResponseDTO } from "../Models/LoginResponseDTO"

const url = import.meta.env.VITE_API_URL
export class UserRepository {
    async login (username: string, password: string): Promise<LoginResponseDTO>{
        const response = await fetch (`${url}users/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
            throw new Error('Credenciales inválidas');
        }
        const autenticated_user: LoginResponseDTO = await response.json();
        return autenticated_user;
    }
}