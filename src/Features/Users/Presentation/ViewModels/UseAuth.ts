import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate()
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
            value?.setUser(response)
            const user_rol = response.rol_id
            user_rol === 1 ? navigate("/dashboard"):navigate("/rp") 
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