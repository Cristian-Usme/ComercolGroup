import { useState } from "react";
import styles from "./Tracking.module.css";

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleTracking = async () => {
    try {
      const response = await fetch("http://localhost:4040/tracking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ t_num: trackingNumber }),
      });

      const data = await response.json();
      if (response.status === 200) {
        setTrackingInfo({
          status: data.status,
          estimatedDelivery: data.estimatedDelivery || "No disponible",
          transport: data.trans || "No disponible",
        });
        setError(null);
      } else if (response.status === 404) {
        setTrackingInfo(null);
        setError(data.message);
      } else if (response.status === 500) {
        setTrackingInfo(null);
        setError(data.message);
      } else {
        setTrackingInfo(null);
        setError("Hubo un problema al conectar con el servidor.");
      }
    } catch (error) {
      console.error("Error al realizar el seguimiento:", error);
      setError("Hubo un problema al conectar con el servidor.");
    }
  };

  return (
    <div className={styles.trackingContainer}>
      <h2 className={styles.title}>Rastrea tu producto</h2>
      <p className={styles.exampleText}>Ejemplo: 123456789</p>
      <input
        className={styles.input}
        type="text"
        placeholder="Introduce tu número de seguimiento"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
      />
      <button className={styles.button} onClick={handleTracking}>
        Rastrear
      </button>

      {error && <p className={styles.error}>{error}</p>}

      {trackingInfo && (
        <div className={styles.trackingResult}>
          <h3>Estado del envío: {trackingInfo.status}</h3>
          <p>Entrega estimada: {trackingInfo.estimatedDelivery}</p>
          <p>Empresa transportadora: {trackingInfo.transport}</p>
        </div>
      )}
    </div>
  );
}
