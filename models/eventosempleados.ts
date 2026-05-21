interface Dialogo {
    id: string;
    texto: string;
    Opciones: Boolean;
    
}

interface empleado {
    nombre: string;
    idempleado: number;
    dialogos: Dialogo[];
    situacion: string;
    estado: string;
}

const empleados: empleado[] = [
    {
        nombre: "Superior",
        dialogos: [
            { id: "g1", texto: "Recuerda que formas parte del CBTIS 270.", Opciones: false },
            { id: "g2", texto: "Tu trabajo es importante, solo filtra los correos y mantente seguro.", Opciones: false },
            { id: "g3", texto: "Tienes alguna otra duda.", Opciones: true }
        ],
        idempleado: 0,
        situacion: "Introduccion",
        estado: "Positivo"
    },
    {
        
        nombre: "Urita",
        dialogos: [
            { id: "a1", texto: "El internet esta fallando.", Opciones: false },
            { id: "a2", texto: "Me puedes pasar tu red", Opciones: true },
            // ehhh necesitamos un metodo por si  seleccionamos si o no para esta
            { id: "a3", texto: "Te voy a reportar por no pasarme internet.", Opciones: false },
            // si se llego a aceptar
            { id: "a4", texto: "Listo, adios.", Opciones: false }
        ],
        idempleado: 1,
        situacion: "Problema de internet",
        estado: "Neutral"
    },
    {
        
        nombre: "Fatima",
        dialogos: [
            { id: "b1", texto: "De casualidad sabe si este link es seguro?", Opciones: true },
            // ehhh necesitamos un metodo por si  seleccionamos si o no para esta
            { id: "b3", texto: "Ok ya veo, gracias.", Opciones: false },
            // si se llego a decir que si esta seguro
            { id: "b4", texto: "Me hackearon...", Opciones: false }
        ],
        idempleado: 1,
        situacion: "Problema de seguridad",
        estado: "Neutral"
    },
        
]