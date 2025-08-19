"use client";

// TENDRE QUE MODIFICAR VARIAS COSAS UNA VEZ QUE LA DB ESTE CREADA (ARCHIVO.JSON)

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
            router.push("./indexReservas");
        } else {
            setMensaje("Correo o contraseña incorrecta");
        }
    };

    return (
      <center>
        <div className="flex flex-col gap-4 p-6 rounded-xl shadow-md bg-gray-100 max-w-sm mx-auto mt-20">
          <div className="space-y-2">
            <Label htmlFor="correoRegistro">Ingrese su correo</Label>
            <Input
              type="email"
              id="correoRegistro"
              value={correoRegistro}
              onChange={(e) => setCorreoRegistro(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contraseñaRegistro">Ingrese su contraseña</Label>
            <Input
              type="password"
              id="contraseñaRegistro"
              value={contraseñaRegistro}
              onChange={(e) => setContraseñaRegistro(e.target.value)}
            />
          </div>

          <Button
            type="button"
            onClick={validarVaciosRegistro}
            className="transition-transform hover:scale-110"
          >
            Ingresar
          </Button>

          {mensaje && (
            <h3 className="text-center text-red-500 transition-transform hover:scale-125">
              {mensaje}
            </h3>
          )}
        </div>
    </center>
  );
}