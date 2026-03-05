import { Routes, Route } from "react-router-dom";
import RPProtected from "../Protected/RPProtected";

export default function RouterRP() {
  return (
    <Routes>
      <Route element={<RPProtected />}>
        <Route path="" element={<span>Welcome RP</span>} />
      </Route>
    </Routes>
  );
}