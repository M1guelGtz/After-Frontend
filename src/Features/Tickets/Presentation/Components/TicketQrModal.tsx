import QRCode from "qrcode";
import { useEffect, useState } from "react";
import type { TicketDTO } from "../../Data/Models/Ticket";

type TicketQrModalProps = {
  ticket: TicketDTO;
  eventName?: string;
  onClose: () => void;
};

function getQrContent(ticket: TicketDTO) {
  if (ticket.qr_payload?.trim()) {
    return ticket.qr_payload;
  }

  return JSON.stringify({
    codigo: ticket.codigo,
    nombre: ticket.cliente_nombre ?? "",
    telefono: ticket.cliente_telefono ?? "",
    rp_id: ticket.rp_id,
    rp_nombre: ticket.rp_nombre ?? "",
    codigo_evento: ticket.codigo_evento ?? "",
    tipo_boleto: ticket.tipo_boleto ?? "GENERAL",
    estado: ticket.estado,
  });
}

export default function TicketQrModal({ ticket, eventName, onClose }: TicketQrModalProps) {
  const [qrUrl, setQrUrl] = useState("");
  const [qrError, setQrError] = useState("");
  const publicTicketUrl = ticket.public_url?.trim() ?? "";

  useEffect(() => {
    let cancelled = false;

    const generateQr = async () => {
      try {
        const url = await QRCode.toDataURL(getQrContent(ticket), {
          width: 320,
          margin: 2,
          color: {
            dark: "#07111f",
            light: "#ffffff",
          },
        });

        if (!cancelled) {
          setQrUrl(url);
          setQrError("");
        }
      } catch (error) {
        if (!cancelled) {
          setQrError(error instanceof Error ? error.message : "No fue posible generar el QR.");
        }
      }
    };

    void generateQr();

    return () => {
      cancelled = true;
    };
  }, [ticket]);

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="ticket-qr-title">
      <section className="modal-card">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">Boleto generado</span>
            <h2 id="ticket-qr-title">QR listo para mostrar</h2>
          </div>
          <button type="button" className="ghost-button" onClick={onClose}>
            Cerrar
          </button>
        </div>

        <div className="qr-ticket-preview">
          <div className="qr-code-frame">
            {qrUrl ? <img src={qrUrl} alt={`QR del boleto ${ticket.codigo}`} /> : null}
          </div>

          {qrError ? <p className="inline-error">{qrError}</p> : null}

          <div className="qr-ticket-meta">
            <strong>{ticket.cliente_nombre ?? `Cliente #${ticket.cliente_id}`}</strong>
            <span>{eventName ?? `Evento #${ticket.evento_id}`}</span>
            <small>{ticket.codigo}</small>
          </div>

          <div className="qr-ticket-grid">
            <div className="qr-ticket-chip">
              <small>Teléfono</small>
              <strong>{ticket.cliente_telefono ?? "No disponible"}</strong>
            </div>
            <div className="qr-ticket-chip">
              <small>Precio</small>
              <strong>${Number(ticket.precio).toFixed(2)}</strong>
            </div>
            <div className="qr-ticket-chip">
              <small>Código evento</small>
              <strong>{ticket.codigo_evento ?? "Sin código"}</strong>
            </div>
            <div className="qr-ticket-chip">
              <small>Estado</small>
              <strong>{ticket.estado}</strong>
            </div>
            <div className="qr-ticket-chip">
              <small>Tipo</small>
              <strong>{ticket.tipo_boleto ?? "GENERAL"}</strong>
            </div>
            <div className="qr-ticket-chip">
              <small>RP</small>
              <strong>{ticket.rp_nombre ?? `RP #${ticket.rp_id}`}</strong>
            </div>
            <div className="qr-ticket-chip">
              <small>Fecha venta</small>
              <strong>{ticket.fecha_venta ? new Date(ticket.fecha_venta).toLocaleString("es-MX") : "-"}</strong>
            </div>
            {publicTicketUrl ? (
              <div className="qr-ticket-chip qr-ticket-public-route">
                <small>Ruta pública</small>
                <a
                  className="qr-ticket-public-link"
                  href={publicTicketUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {publicTicketUrl}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
