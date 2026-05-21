//Variables
let decisionA: string = "Has decidido aceptar el correo, ten cuidado con los enlaces y archivos adjuntos.";
let decisionB: string = "Has decidido rechazar el correo, es importante mantener tu bandeja de entrada segura.";

//Interfaces
interface contenido {
    id: string;
    texto: string; 
    Opciones: Boolean;

}

interface email {
    datos: string;
    estado: boolean;
    asunto: string;
    destinario: string;
    mandatario: string;
    Contenidos: contenido[];
    multimedia: string;
}
//Arreglos
const emails: email[] = [
    {
        datos: "Correo de prueba",
        estado: false,
        asunto: "Asunto de prueba",
        destinario: "destinatario@example.com",
        mandatario: "mandatario@example.com",
        Contenidos: [
            {
                id: "E1",
                texto: "Contenido del correo",
                Opciones: true
            }
        ],
        multimedia: "ruta/a/multimedia"
    }
];


const respuestas: string[] = [
    "Has decidido aceptar el correo, ten cuidado con los enlaces y archivos adjuntos.",
    "Has decidido rechazar el correo, es importante mantener tu bandeja de entrada segura."
];

//Funciones
export class decisionEvento {
    static decidirEvento(decision: boolean): string {
        if (decision === true) {
            return decisionA;
        } else {
            return decisionB;
        }
    }
}

