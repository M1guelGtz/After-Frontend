import { Routes, Route } from "react-router-dom";
import Login from "../../Features/Users/Presentation/Pages/Login";

export default function RouterPublic() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}