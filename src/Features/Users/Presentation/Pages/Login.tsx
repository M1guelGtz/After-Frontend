
import "./Login.css";
import fondo from "../../../../assets/after.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {

      const response = await fetch("http://18.210.101.203:3000/users/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      if (!response.ok) {
        throw new Error("Credenciales incorrectas");
      }

      const data = await response.json();

      localStorage.setItem("token", data.access_token);

      navigate("/admin");

    } catch (err) {
      setError("Usuario o contraseña incorrectos");
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
              type="text"
              required
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
            <label>Usuario</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <label>Contraseña</label>
          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="login-btn"
          >
            Iniciar Sesión
          </button>

        </form>

      </div>
    </div>
  );
}
