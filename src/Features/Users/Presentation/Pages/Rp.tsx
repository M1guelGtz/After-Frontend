import React from "react";
import Card from "../Components/Card";
import StatBox from "../Components/StatBox";
import ButtonPrimary from "../Components/ButtonPrimary";
import "./RP.css";

const RP: React.FC = () => {
  return (
    <div className="rp-container">

      <div className="rp-header">
        <h1>Panel del RP</h1>
        <p className="rp-subtitle">
          Gestión de ventas
        </p>
      </div>

      <div className="rp-stats">
        <StatBox title="Total Vendido" value="$12,000" />
        <StatBox title="Boletos Generados" value="85" />
        <StatBox title="Comisión 10%" value="$1,200" />
      </div>

      <Card className="rp-section">
        <h3>Crear Boleto</h3>

        <div className="rp-form-group">
          <label>Nombre Cliente</label>
          <input placeholder="Ej. Juan Pérez" />
        </div>

        <div className="rp-form-group">
          <label>Lugar</label>
          <input placeholder="VIP / General" />
        </div>

        <ButtonPrimary>Generar Boleto</ButtonPrimary>
      </Card>

    </div>
  );
};

export default RP;


