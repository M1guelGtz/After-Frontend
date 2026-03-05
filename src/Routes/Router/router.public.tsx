import { Link, Route, Routes } from "react-router-dom";
import Login from "../../Features/Users/Presentation/Pages/Login";

export default function RouterPublic () {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={
                <div style={{ textAlign: "center", padding: "50px" }}>
                    <h2>Error 404</h2>
                    <p>La página que buscas no existe o fue movida.</p>
                    <Link to="/">Volver al inicio</Link>
                </div>
            } />
            {
                // queda abierto para posibles rutas publicas.
            }
            
        </Routes>
    )
}