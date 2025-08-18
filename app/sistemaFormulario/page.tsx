// Interfaz Grafica (Front-END)
"use client"; //Codigo necesario para ejecucion en Next.js

import { useFormularioRegistro } from "./formularioRegistro";
import "./page.css";   // Importacion solo para el Css formulario

export default function Page() {
    // Extraemos los datos
    const {
        nombre, setNombre,
        documento, setDocumento,
        telefono, setTelefono,
        habitacion, setHabitacion,
        fechaEntrada, setFechaEntrada,
        fechaSalida, setFechaSalida,
        handleSubmit,
    } = useFormularioRegistro();

    return (
        <div className="page-container">
            <h1 className="page-title">Reserva de Habitación</h1>
            <form onSubmit={handleSubmit}>

                <div className="page-card">
                    <label>Nombre Completo:</label>
                    <input
                        type="text"   //Tipo Texto
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}
                        required //Obligatorio
                    />
                </div>

                <div>
                    <label>DNI:</label>
                    <input
                        type="text"    //Tipo Texto
                        value={documento}
                        onChange={(e) => setDocumento(e.target.value)}
                        required //Obligatorio
                    />
                </div>

                <div>
                    <label>Teléfono:</label>
                    <input
                        type="tel"     //Tipo Numero
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required //Obligatorio
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
                    <label>Fecha de Entrada:</label>
                    <input
                        type="date"     //Tipo fecha(Calendario)
                        value={fechaEntrada}
                        onChange={(e) => setFechaEntrada(e.target.value)}
                        required //Obligatorio
                    />
                </div>

                <div>
                    <label>Fecha de Salida:</label>
                    <input
                        type="date"       //Tipo fecha(Calendario)
                        value={fechaSalida}
                        onChange={(e) => setFechaSalida(e.target.value)}
                        required   //Obligatorio
                    />
                </div>

                <button className="boton" type="submit">Registrar Reserva</button>
            </form>
        </div>
    );
}
