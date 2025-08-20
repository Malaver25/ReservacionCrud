"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import usuarios from "@/data/usuarios.json";


export default function loginCuentas(){

    const router = useRouter();
    const [correoRegistro, setCorreoRegistro] = useState("");
    const [contraseñaRegistro, setContraseñaRegistro] = useState("");
    const [mensaje, setMensaje] = useState("");
    
    // EN ESTA VALIDACION ME HACE FALTA VALIDAR SI EL CORREO Y CONTRASEÑA ES IGUAL A 
    // EL CORREO Y CONTRASEÑA POR DEFECTO EN LA BASE DE DATOS .JSON
    // ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
    const validarVaciosRegistro = () => {
        if (correoRegistro.trim() === "" || contraseñaRegistro.trim() === ""){
            setMensaje("El campo correo o contraseña no puede estar vacio");
            return ;
        }

        const user = usuarios.find(
            (u) => u.correo === correoRegistro && u.contraseña === contraseñaRegistro
        );

        if (user) {
            setMensaje("Bienvenido");
            localStorage.setItem("isLoggedIn", "true");
            router.push("/indexReservas");  // Cambiado a ruta absoluta
        } else {
            setMensaje("Correo o contraseña incorrecta");
            console.log("Usuario no encontrado. Datos ingresados:", { correoRegistro, contraseñaRegistro });
            console.log("Usuarios disponibles:", usuarios);
        }
    };

    return (
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/fondo.jpg)',
        }}
      >
        <div 
          style={{ 
            backgroundColor: '#FFFFFF',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '350px',
            borderRadius: '30px'
          }}
        ></div>
        <div className="relative z-10 w-[400px] space-y-20">
          <h1 className="text-4xl text-center font-bold mb-20" style={{ color: '#000000' }}>Iniciar sesión</h1>
          <div className="space-y-24 px-8 mt-16">
            <div>
              <div className="text-base mb-8" style={{ color: '#000000' }}>Introducir usuario:</div>
              <input
                type="email"
                id="correoRegistro"
                className="w-full p-4 border border-gray-300"
                value={correoRegistro}
                onChange={(e) => setCorreoRegistro(e.target.value)}
              />
            </div>
            <div className="mt-16">
              <div className="text-base mb-8" style={{ color: '#000000' }}>Introducir contraseña:</div>
              <input
                type="password"
                id="contraseñaRegistro"
                className="w-full p-4 border border-gray-300"
                value={contraseñaRegistro}
                onChange={(e) => setContraseñaRegistro(e.target.value)}
              />
            </div>
            <button
              onClick={validarVaciosRegistro}
              className="w-full bg-black text-white p-4 mt-20"
            >
              Ingresar
            </button>
            {mensaje && (
              <p className={`text-center mt-2 ${mensaje === "Bienvenido" ? "text-green-600" : "text-red-500"}`}>
                {mensaje}
              </p>
            )}
          </div>
        </div>
      </div>
    );
}