"use client";

import { useState, useEffect } from "react";

export function useFormularioRegistro() {
    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [habitacion, setHabitacion] = useState("simple");
    const [fechaEntrada, setFechaEntrada] = useState("");
    const [fechaSalida, setFechaSalida] = useState("");
    const [precio, setPrecio] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        switch (habitacion) {
            case "simple":
                setPrecio(50);
                break;
            case "doble":
                setPrecio(80);
                break;
            case "suite":
                setPrecio(120);
                break;
            default:
                setPrecio(0);
        }
    }, [habitacion]);

    // Calcula total (solo 1 noche por ahora)
    useEffect(() => {
        if (precio > 0) {
            setTotal(precio); // Puedes cambiar esto si agregas lógica por días
        }
    }, [precio]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const datosReserva = {
            nombre,
            documento,
            telefono,
            habitacion,
            fechaEntrada,
            fechaSalida,
            precio,
            total,
        };

        console.log("📌 Reserva enviada:", datosReserva);
        alert("✅ Reserva registrada correctamente");
    };

    return {
        nombre, setNombre,
        documento, setDocumento,
        telefono, setTelefono,
        habitacion, setHabitacion,
        fechaEntrada, setFechaEntrada,
        fechaSalida, setFechaSalida,
        precio,
        total,
        handleSubmit,
    };
}
