import { Route, Routes } from "react-router-dom";
import Login from "../../Features/Users/Presentation/Pages/Login";
import Admin from "../../Features/Users/Presentation/Pages/Admin";

export default function RouterPublic () {
    return(
        <Routes>

            <Route path="/" element={<Login />} />

            {/* ruta para el admin */}
            <Route path="/admin" element={<Admin />} />

        </Routes>
    )
}