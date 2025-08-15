"use client";

import { useState } from "react";

export default function loginCuentas(){
    const [correoRegistro, setCorreoRegistro] = useState("");
    const [contraseñaRegistro, setContraseñaRegistro] = useState("");
    const [mensaje, setMensaje] = useState("");
    
    // EN ESTA VALIDACION ME HACE FALTA VALIDAR SI EL CORREO Y CONTRASEÑA ES IGUAL A 
    // EL CORREO Y CONTRASEÑA POR DEFECTO EN LA BASE DE DATOS .JSON
    // ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
    const validarVaciosRegistro = () => {
        if (correoRegistro.trim() === "" || contraseñaRegistro.trim() === ""){
            setMensaje("El campo correo o contraseña no puede estar vacio")
        } else {
            setMensaje("¡Bienvenido!")
        }
    }

    return (
    <>
        <div className="principal">
            <div>
                <label htmlFor="correoRegistro">Ingrese su correo: </label>
                <input className="correoRegistro" type="text" id="correoRegistro" value={correoRegistro} onChange={(e) => setCorreoRegistro(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="contraseñaRegistro">Ingrese su contraseña: </label>
                <input className="contraseñaRegistro" type="password" id="contraseñaRegistro" value={contraseñaRegistro} onChange={(e) => setContraseñaRegistro(e.target.value)}/>
            </div>
            <div>
                <button type="button" id="btnRegistro" onClick={validarVaciosRegistro}>Ingresar</button>
                {<h3>{mensaje}</h3>}
            </div>
        </div>
    </>
    );
}