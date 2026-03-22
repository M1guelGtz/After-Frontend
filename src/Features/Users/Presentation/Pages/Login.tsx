import fondo from "../../../../assets/after.jpg";
import { useAuth } from "../ViewModels/UseAuth";
import "./login.css";

export default function Login() {
  const { handleSubmit, username, password, setPassword, setUsername, loading, error } = useAuth()

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

        {error && (
          <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
            />
            <label>Usuario</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <label>Contraseña</label>
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (
              <div className="loading-container">
                <div className="spinner"></div>
                <span>Iniciando sesión...</span>
              </div>
            ) : (
              'Iniciar Sesión'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}