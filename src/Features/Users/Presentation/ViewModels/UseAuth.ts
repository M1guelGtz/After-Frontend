import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../../Core/Context/UserContext";
import { loginUseCase } from "../../Domain/LoginUseCase";

export function useAuth () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const value = useContext(UserContext);
    const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)
        try {
            const response = await loginUseCase.loginUseCase(username, password)
            if (!response.success) {
                throw new Error('Credenciales inválidas');
            }
            value?.setUser(response)
            const user_rol = response.rol_id
            if (user_rol === 1) {
                navigate("/dashboard")
            } else if (user_rol === 2) {
                navigate("/rp")
            } else if (user_rol === 3) {
                navigate("/manager")
            } else {
                throw new Error("Este usuario no tiene un rol habilitado en la plataforma.")
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error al iniciar sesión. Verifica tus credenciales.');
        } finally {
            setLoading(false)
        }
    }
    return {
        user: value?.user ?? null,
        handleSubmit,
        error, 
        loading, 
        username, 
        setUsername, 
        password, 
        setPassword 

    }
}
