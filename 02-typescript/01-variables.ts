// 01-variables.ts
// npm install -g typescript
// tsc
let nombre: string = 'Joffre'; // primitivo
let nombre2: String = 'Joffre2'; // clase String
// tsc 01-variables.ts --target es3
// tsc 01-variables.ts --target es6
// nombre = 1

let edad:number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;

// Duck typing
let apellido = 'Condor'; // string ->
// spellido = 1; // Error, no es un string
apellido = 'Tipan';
apellido.toUpperCase();

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';
let edadMultiple: number| string| Date = '2'; // 2 / new Date()
edadMultiple = '2';
edadMultiple = 'dos';
edadMultiple = new Date();
edadMultiple = 2222;
let numeroUnico: number = 1; // para igualar a otros se castea
numeroUnico = numeroUnico + Math.pow((edadMultiple as number),2);