// Logica interna (BACK-END)
"use client";  //Codigo necesario para ejecucion en Next.js

import { useState } from "react";

// Estados que almacenan los datos ingresados por el usuario
export function useFormularioRegistro() {
    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [habitacion, setHabitacion] = useState("simple");
    const [fechaEntrada, setFechaEntrada] = useState("");
    const [fechaSalida, setFechaSalida] = useState("");

    // Función que simula el envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Evita que la página se recargue

        const datosReserva = {
            nombre,
            documento,
            telefono,
            habitacion,
            fechaEntrada,
            fechaSalida,
        };
        // MENSAJE DEL BOTON
        console.log("📌 Reserva enviada:", datosReserva);
        alert("✅ Reserva registrada correctamente");
    };
    // Retornamos las variables y funciones para que el FRONT las use
    return {
        nombre, setNombre,
        documento, setDocumento,
        telefono, setTelefono,
        habitacion, setHabitacion,
        fechaEntrada, setFechaEntrada,
        fechaSalida, setFechaSalida,
        handleSubmit,
    };
}
