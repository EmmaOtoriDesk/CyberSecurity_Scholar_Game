let decisionA: string = "Has decidido aceptar el correo, ten cuidado con los enlaces y archivos adjuntos.";
let decisionB: string = "Has decidido rechazar el correo, es importante mantener tu bandeja de entrada segura.";

export class decisionEvento {
    static decidirEvento(decision: boolean): string {
        if (decision === true) {
            return decisionA;
        } else {
            return decisionB;
        }
    }
}