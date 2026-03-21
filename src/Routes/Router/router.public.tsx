import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../Features/Users/Presentation/Pages/Login";

export default function RouterPublic () {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            {
                // queda abierto para posibles rutas publicas.
            }
            
        </Routes>
    )
}