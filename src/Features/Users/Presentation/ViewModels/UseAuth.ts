import React, { useContext, useState } from "react";
import UserContext from "../../../../Core/Context/UserContext";
import type { LoginResponseDTO } from "../../Data/Models/LoginResponseDTO";
import { loginUseCase } from "../../Domain/LoginUseCase";

export function useAuth () {
    const [user, setUser] = useState<LoginResponseDTO | null>(null);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const value = useContext(UserContext);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        //setError("")
        //setLoading(true)
        try {
            const response = await loginUseCase.loginUseCase(username, password)
            if (!response.success) {
                throw new Error('Credenciales inválidas');
            }
            console.log(response)
        } catch {

        }
    }
    return {
        user,
        setUser,
        handleSubmit,
        error, 
        loading, 
        username, 
        setUsername, 
        password, 
        setPassword 

    }
}