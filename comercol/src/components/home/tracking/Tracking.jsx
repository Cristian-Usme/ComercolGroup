import { useState } from 'react';
import styles from './Tracking.module.css';

export default function Tracking() {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingInfo, setTrackingInfo] = useState(null);

    const handleTracking = () => {
        // Aquí se podría hacer una llamada a una API para obtener información de tracking
        // Por ahora, simularemos una respuesta con datos de ejemplo
        const dummyInfo = {
            status: 'En tránsito',
            estimatedDelivery: '2024-10-28',
            location: 'Centro de distribución, Medellín',
        };
        setTrackingInfo(dummyInfo);
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
            <button className={styles.button} onClick={handleTracking}>Rastrear</button>
            

            {trackingInfo && (
                <div className={styles.trackingResult}>
                    <h3>Estado del envío: {trackingInfo.status}</h3>
                    <p>Entrega estimada: {trackingInfo.estimatedDelivery}</p>
                    <p>Última ubicación: {trackingInfo.location}</p>
                </div>
            )}
        </div>
    );
}
