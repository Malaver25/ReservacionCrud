// Interfaz Grafica (Front-END)
"use client"; //Codigo necesario para ejecucion en Next.js

import { useFormularioRegistro } from "./formularioRegistro";
import { useRouter } from "next/navigation"; // <-- nuevo hook para redirigir
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
    } = useFormularioRegistro();

    // Precios por tipo de habitación
    const precios = { simple: 100, doble: 250, suite: 500 };

    // Hook de navegación
    const router = useRouter();

    // Nuevo handleSubmit que registra y redirige
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Evita que la página se recargue
        alert("✅ Reserva registrada correctamente");
        router.push("/indexReservas"); // <-- redirigimos después del alert
    };

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
                    {/* Cuadro que muestra el precio según el tipo de habitación */}
                    <div className="price-box">
                        Precio: S/ {precios[habitacion]}
                    </div>
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

