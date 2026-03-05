
import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import fondo from "../../../../assets/after.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "1234") {
      navigate("/admin");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="overlay"></div>
      <div className="background-shapes"></div>

      <div className="login-card">
        <h1 className="login-title">AFTER</h1>
        <p className="login-subtitle">by Experiencias Ámbar</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Usuario</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Contraseña</label>
          </div>

          <button type="submit" className="login-btn">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
