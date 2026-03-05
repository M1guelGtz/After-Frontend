import React from "react";
import Card from "../../../../Components/UI/Card";
import StatBox from "../../../../Components/UI/StatBox";
import ButtonPrimary from "../../../../Components/UI/ButtonPrimary";
import "./Admin.css";

const Admin: React.FC = () => {
  return (
    <div className="admin-container">

      <div className="admin-header">
        <h1>Panel de Administración</h1>
        <p className="admin-subtitle">
          Control general del sistema
        </p>
      </div>

      <div className="admin-stats">
        <StatBox title="Ganancia Total" value="$45,000" />
        <StatBox title="Boletos Vendidos" value="320" />
        <StatBox title="Comisión 10%" value="$4,500" />
      </div>

      <Card className="admin-section">
        <h3>Crear Usuario</h3>

        <div className="admin-form-group">
          <label>Nombre</label>
          <input placeholder="Nombre" />
        </div>

        <div className="admin-form-group">
          <label>Email</label>
          <input placeholder="Correo" />
        </div>

        <ButtonPrimary>Crear Usuario</ButtonPrimary>
      </Card>

    </div>
  );
};

export default Admin;