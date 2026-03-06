import React, { useState, useEffect } from "react";
import StatBox from "../Components/StatBox";
import Card from "../Components/Card";
import ButtonPrimary from "../Components/ButtonPrimary";
import "../../Presentation/Pages/Admin.css";

const API = "http://localhost:3000/api";

interface RP {
  id: number;
  nombre: string;
  telefono: string;
  username: string;
  activo: boolean;
  boletosVendidos: number;
}

interface Evento {
  id: number;
  nombre: string;
  fecha: string;
  lugar: string;
  activo: boolean;
}

interface Fase {
  id: number;
  nombre: string;
  precio: number;
  inicio: string;
  fin: string;
  activa: boolean;
}

const Admin: React.FC = () => {

  const [rps,setRps] = useState<RP[]>([]);
  const [eventos,setEventos] = useState<Evento[]>([]);
  const [fases,setFases] = useState<Fase[]>([]);

  const [ventaActiva,setVentaActiva] = useState(true);

  const [nombreRP,setNombreRP] = useState("");
  const [telefonoRP,setTelefonoRP] = useState("");
  const [usernameRP,setUsernameRP] = useState("");

  const [nombreEvento,setNombreEvento] = useState("");
  const [fechaEvento,setFechaEvento] = useState("");
  const [lugarEvento,setLugarEvento] = useState("");

  const [nombreFase,setNombreFase] = useState("");
  const [precioFase,setPrecioFase] = useState("");
  const [inicioFase,setInicioFase] = useState("");
  const [finFase,setFinFase] = useState("");

  const comision = 0.10;

  /* ================================
     CARGAR DATOS DEL BACKEND
  ================================= */

  useEffect(() => {

    cargarRPs();
    cargarEventos();
    cargarFases();

  }, []);

  const cargarRPs = async () => {

    const res = await fetch(`${API}/rps`);
    const data = await res.json();
    setRps(data);

  };

  const cargarEventos = async () => {

    const res = await fetch(`${API}/eventos`);
    const data = await res.json();
    setEventos(data);

  };

  const cargarFases = async () => {

    const res = await fetch(`${API}/fases`);
    const data = await res.json();
    setFases(data);

  };

  /* =========================
      CREAR RP
  ========================= */

  const crearRP = async () => {

    if(!nombreRP || !telefonoRP || !usernameRP) return;

    await fetch(`${API}/rps`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        nombre:nombreRP,
        telefono:telefonoRP,
        username:usernameRP
      })
    });

    cargarRPs();

    setNombreRP("");
    setTelefonoRP("");
    setUsernameRP("");

  };

  const toggleRP = async (id:number) => {

    await fetch(`${API}/rps/${id}`,{
      method:"PATCH"
    });

    cargarRPs();

  };

  /* =========================
      CREAR EVENTO
  ========================= */

  const crearEvento = async () => {

    if(!nombreEvento || !fechaEvento || !lugarEvento) return;

    await fetch(`${API}/eventos`,{

      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        nombre:nombreEvento,
        fecha:fechaEvento,
        lugar:lugarEvento
      })

    });

    cargarEventos();

    setNombreEvento("");
    setFechaEvento("");
    setLugarEvento("");

  };

  const toggleEvento = async (id:number) => {

    await fetch(`${API}/eventos/${id}`,{
      method:"PATCH"
    });

    cargarEventos();

  };

  /* =========================
      CREAR FASE
  ========================= */

  const crearFase = async () => {

    if(!nombreFase || !precioFase) return;

    await fetch(`${API}/fases`,{

      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        nombre:nombreFase,
        precio:Number(precioFase),
        inicio:inicioFase,
        fin:finFase
      })

    });

    cargarFases();

    setNombreFase("");
    setPrecioFase("");
    setInicioFase("");
    setFinFase("");

  };

  const toggleFase = async (id:number) => {

    await fetch(`${API}/fases/${id}`,{
      method:"PATCH"
    });

    cargarFases();

  };

  /* =========================
      ESTADISTICAS
  ========================= */

  const totalBoletos = rps.reduce((acc,rp)=>acc+rp.boletosVendidos,0);

  const precioActual = fases.find(f=>f.activa)?.precio || 0;

  const ingresosTotales = totalBoletos * precioActual;

  const comisionesPagadas = ingresosTotales * comision;

  return(

  <div className="admin-container">

  {/* HEADER */}

  <div className="admin-header">

  <h1>Panel de Administración</h1>

  <p className="admin-subtitle">

  Control general del sistema

  </p>

  </div>

  {/* ESTADISTICAS */}

  <div className="admin-stats">

  <StatBox title="Total boletos vendidos" value={`${totalBoletos}`} />

  <StatBox title="Total ingresos" value={`$${ingresosTotales}`} />

  <StatBox title="Comisiones pagadas" value={`$${comisionesPagadas}`} />

  </div>

  {/* CONTROL VENTAS */}

  <div className="admin-toggle">

  <button
  className={ventaActiva ? "btn-stop":"btn-start"}
  onClick={()=>setVentaActiva(!ventaActiva)}
  >

  {ventaActiva
  ? "Cancelar venta de boletos"
  : "Activar venta de boletos"}

  </button>

  </div>

  {/* CREAR RP */}

  <Card className="admin-section">

  <h3>Crear RP</h3>

  <div className="admin-form-group">
  <label>Nombre</label>
  <input
  value={nombreRP}
  onChange={e=>setNombreRP(e.target.value)}
  />
  </div>

  <div className="admin-form-group">
  <label>Teléfono</label>
  <input
  value={telefonoRP}
  onChange={e=>setTelefonoRP(e.target.value)}
  />
  </div>

  <div className="admin-form-group">
  <label>Username</label>
  <input
  value={usernameRP}
  onChange={e=>setUsernameRP(e.target.value)}
  />
  </div>

  <ButtonPrimary onClick={crearRP}>Crear RP</ButtonPrimary>

  </Card>

  {/* LISTA RPS */}

  <Card className="admin-section">

  <h3>RPs</h3>

  {rps.map(rp=>(

  <div key={rp.id} className="rp-item">

  <div>

  <h4>{rp.nombre}</h4>

  <p>{rp.username}</p>

  </div>

  <div className="rp-stats">

  <span>🎟 {rp.boletosVendidos}</span>

  <button
  className={rp.activo ? "btn-start":"btn-stop"}
  onClick={()=>toggleRP(rp.id)}
  >
  {rp.activo ? "Activo":"Inactivo"}
  </button>

  </div>

  </div>

  ))}

  </Card>

  {/* EVENTOS */}

  <Card className="admin-section">

  <h3>Crear Evento</h3>

  <div className="admin-form-group">
  <label>Nombre</label>
  <input
  value={nombreEvento}
  onChange={e=>setNombreEvento(e.target.value)}
  />
  </div>

  <div className="admin-form-group">
  <label>Fecha</label>
  <input
  type="date"
  value={fechaEvento}
  onChange={e=>setFechaEvento(e.target.value)}
  />
  </div>

  <div className="admin-form-group">
  <label>Lugar</label>
  <input
  value={lugarEvento}
  onChange={e=>setLugarEvento(e.target.value)}
  />
  </div>

  <ButtonPrimary onClick={crearEvento}>
  Crear Evento
  </ButtonPrimary>

  </Card>

  {/* LISTA EVENTOS */}

  <Card className="admin-section">

  <h3>Eventos</h3>

  {eventos.map(ev=>(

  <div key={ev.id} className="rp-item">

  <div>

  <h4>{ev.nombre}</h4>

  <p>{ev.fecha} - {ev.lugar}</p>

  </div>

  <button
  className={ev.activo ? "btn-start":"btn-stop"}
  onClick={()=>toggleEvento(ev.id)}
  >
  {ev.activo ? "Activo":"Inactivo"}
  </button>

  </div>

  ))}

  </Card>

  {/* FASES */}

  <Card className="admin-section">

  <h3>Crear Fase</h3>

  <div className="admin-form-group">
  <label>Nombre</label>
  <input
  value={nombreFase}
  onChange={e=>setNombreFase(e.target.value)}
  />
  </div>

  <div className="admin-form-group">
  <label>Precio</label>
  <input
  type="number"
  value={precioFase}
  onChange={e=>setPrecioFase(e.target.value)}
  />
  </div>

  <div className="admin-form-group">
  <label>Inicio</label>
  <input
  type="date"
  value={inicioFase}
  onChange={e=>setInicioFase(e.target.value)}
  />
  </div>

  <div className="admin-form-group">
  <label>Fin</label>
  <input
  type="date"
  value={finFase}
  onChange={e=>setFinFase(e.target.value)}
  />
  </div>

  <ButtonPrimary onClick={crearFase}>
  Crear Fase
  </ButtonPrimary>

  </Card>

  </div>

  );

};

export default Admin;