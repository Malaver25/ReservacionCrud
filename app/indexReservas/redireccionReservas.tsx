
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function indexPrincipal(){

    const router = useRouter();
    
    const validarButton = () => {}

    return(
        <>
            <center>
                <div>
                    <div>
                        <h1>Biografia / Reservas</h1>
                    </div>
                    <div>
                        <h2>¿Qué somos?, ¿A qué nos dedicamos?</h2>
                    </div>
                    <div>
                        <center>
                            <p>
                                En nuestra empresa nos especializamos en ofrecer <strong>servicios de comodidad y limpieza de la más alta calidad</strong>, 
                                diseñados para garantizar una experiencia única y placentera a cada uno de nuestros clientes. 
                                Nuestro compromiso es brindar un ambiente seguro, ordenado y confortable, 
                                donde cada detalle está cuidadosamente pensado para superar sus expectativas.
                            </p>
                        </center>
                    </div>
                    <div>
                        <center>
                            <p>
                                Creemos firmemente que la verdadera satisfacción se encuentra en la <strong>tranquilidad y el bienestar</strong>, 
                                por eso trabajamos con un equipo altamente capacitado, productos de primera calidad 
                                y un enfoque personalizado que se adapta a las necesidades de cada usuario.
                            </p>
                        </center>
                    </div>
                    <div>
                        <center>
                                <p>
                                Al realizar una <strong>reserva con nosotros</strong>, no solo asegura un servicio, 
                                sino también una experiencia integral que combina confianza, eficiencia y dedicación. 
                                Nuestro objetivo es que cada visita se convierta en un momento memorable, 
                                reforzando así la fidelidad y preferencia de quienes confían en nosotros.
                            </p>
                        </center>
                    </div>
                    <div>
                        <center>
                            <p>
                                Porque más que un servicio, ofrecemos una experiencia de <strong>comodidad, higiene y excelencia</strong>.
                            </p>
                            </center>
                    </div>
                    <div>
                        <center>
                            <Button
                                type="button"
                                className="transition-transform hover:scale-110"
                                >
                                <strong>¡RESERVE AHORA!</strong>
                            </Button>
                        </center>
                    </div>
                </div>
            </center>
        </>
    );
}