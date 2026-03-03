import { Route, Routes } from "react-router-dom";

export default function RouterAdmin () {
    return(
        <Routes>
            <Route element={} >
                <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                <Route path="/create-rp" element={<h1>create rp route</h1> } />
            </Route>
        </Routes>
    )
}