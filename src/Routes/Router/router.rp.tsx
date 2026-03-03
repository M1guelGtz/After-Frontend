import { Route, Routes } from "react-router-dom";
import RPProtected from "../Protected/RPProtected";

export default function RouterRP (){
    return (
        <Routes>
            <Route element={<RPProtected></RPProtected>}>
                <Route path="/rp" element={<span> welcome RP </span>} />
            </Route>
        </Routes>
    )
}