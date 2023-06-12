// 04-clases.ts
class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido = ''; //Duck Typing
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ){
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }

    private mostrarNombreApellido():string{
        return this.nombreYApellido;
    }
}
class Usuario extends Persona {
    constructor(
        nombreParametro: string, // Parametros del constructor
        apellidoParametro: string, // Parametros del constructor
        public cedula: string, // Modificador acceso --> Propiedad de la clase
        public estadoCivil: string, // Modificador de acceso --> Propiedad de la clase
    ) {
        super(nombreParametro, apellidoParametro);
        this.cedula;
        this.estadoCivil;
    }
}
const joffre = new Usuario(
    'Joffre',
    'Cóndor',
    '1743542482',
    'soltero'
);
joffre.nombre;
joffre.apellido;
joffre.cedula;
joffre.estadoCivil;