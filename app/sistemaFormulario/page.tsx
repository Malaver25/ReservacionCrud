"use client";

import { useFormularioRegistro } from "./formularioRegistro";
import "./page.css";

export default function Page() {
    const {
        nombre, setNombre,
        documento, setDocumento,
        telefono, setTelefono,
        habitacion, setHabitacion,
        fechaEntrada, setFechaEntrada,
        fechaSalida, setFechaSalida,
        precio,
        total,
        handleSubmit,
    } = useFormularioRegistro();

    return (
        <div className="page-container">
            <h1 className="page-title">Reserva de Habitación</h1>
            <form onSubmit={handleSubmit}>

                <div className="page-card">
                    <label>Nombre Completo:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>DNI:</label>
                    <input
                        type="text"
                        value={documento}
                        onChange={(e) => setDocumento(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Teléfono:</label>
                    <input
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Tipo de Habitación:</label>
                    <select
                        value={habitacion}
                        onChange={(e) => setHabitacion(e.target.value)}
                    >
                        <option value="simple">Simple</option>
                        <option value="doble">Doble</option>
                        <option value="suite">Suite</option>
                    </select>
                </div>

                <div>
                    <label>Precio por noche:</label>
                    <input
                        type="text"
                        value={`$${precio.toFixed(2)}`}
                        disabled
                    />
                </div>

                <div>
                    <label>Fecha de Entrada:</label>
                    <input
                        type="date"
                        value={fechaEntrada}
                        onChange={(e) => setFechaEntrada(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Fecha de Salida:</label>
                    <input
                        type="date"
                        value={fechaSalida}
                        onChange={(e) => setFechaSalida(e.target.value)}
                        required
                    />
                </div>

                <button className="boton" type="submit">Registrar Reserva</button>
            </form>

            {/* Mostrar boleta si hay datos básicos */}
            {nombre && fechaEntrada && fechaSalida && (
                <div className="boleta-container">
                    <h2>🧾 Boleta de Reserva</h2>
                    <p><strong>Nombre:</strong> {nombre}</p>
                    <p><strong>DNI:</strong> {documento}</p>
                    <p><strong>Teléfono:</strong> {telefono}</p>
                    <p><strong>Tipo de Habitación:</strong> {habitacion}</p>
                    <p><strong>Precio por noche:</strong> ${precio.toFixed(2)}</p>
                    <p><strong>Fecha de Entrada:</strong> {fechaEntrada}</p>
                    <p><strong>Fecha de Salida:</strong> {fechaSalida}</p>
                    <p><strong>Total a Pagar:</strong> <span style={{ fontWeight: "bold", color: "green" }}>${total.toFixed(2)}</span></p>
                </div>
            )}
        </div>
    );
}
