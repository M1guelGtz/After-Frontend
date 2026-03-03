import { Route, Routes } from "react-router-dom";

export default function RouterPublic () {
    return(
        <Routes>
            <Route path="/" element={<h1>Login</h1>} />
            {
                // queda abierto para posibles rutas publicas.
            }
        </Routes>
    )
}