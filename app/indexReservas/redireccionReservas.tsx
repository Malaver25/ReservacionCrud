"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Award, Shield, Users, Clock } from "lucide-react";

export default function IndexPrincipal() {
  const router = useRouter();
  const features = [
    { icon: Award, title: "Calidad Premium", color: "#d97706" },
    { icon: Shield, title: "Ambiente Seguro", color: "#2563eb" },
    { icon: Users, title: "Equipo Experto", color: "#059669" },
    { icon: Clock, title: "Atención 24/7", color: "#7c3aed" }
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg,#1e3a8a,#3730a3)", color: "#fff", padding: "5rem 1.5rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>Experiencia de <span style={{ color: "#60a5fa" }}>Calidad Superior</span></h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem", opacity: 0.9 }}>Servicios de comodidad y limpieza con los más altos estándares</p>
        <Button onClick={() => router.push("/sistemaFormulario")} style={{ background: "#2563eb", color: "#fff", fontSize: "1.125rem", padding: "0.75rem 2rem", borderRadius: "0.5rem", border: "none" }}>Reservar Ahora →</Button>
      </div>

      {/* Features */}
      <div style={{ padding: "4rem 1.5rem", maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {features.map((f, i) => (
            <div key={i} style={{ background: "#fff", padding: "1.5rem", borderRadius: "0.75rem", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)", textAlign: "center" }}>
              <f.icon style={{ color: f.color, width: "3rem", height: "3rem", margin: "0 auto 1rem" }} />
              <h3 style={{ fontWeight: "bold", fontSize: "1.125rem" }}>{f.title}</h3>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>¿Quiénes Somos?</h2>
          <p style={{ color: "#4b5563", marginBottom: "2rem", lineHeight: 1.6 }}>
            Nos especializamos en <strong style={{ color: "#2563eb" }}>servicios de comodidad y limpieza premium</strong>, garantizando experiencias únicas con ambiente seguro y equipo experto.
          </p>
          <Button onClick={() => router.push("/sistemaFormulario")} style={{ background: "#2563eb", color: "#fff", fontSize: "1.125rem", padding: "0.75rem 2rem", borderRadius: "0.5rem", border: "none" }}>¡RESERVE AHORA!</Button>
        </div>
      </div>
    </div>
  );
}