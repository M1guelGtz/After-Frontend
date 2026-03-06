import { Route, Routes } from "react-router-dom";
import AdminProtected from "../Protected/AdminProtected";

export default function RouterAdmin() {
  return (
    <Routes>
      <Route element={<AdminProtected />}>

        <Route path="/dashboard" element={<h1>Dashboard</h1>} />

        <Route path="/create-rp" element={<h1>Create RP</h1>} />

      </Route>
    </Routes>
  );
}