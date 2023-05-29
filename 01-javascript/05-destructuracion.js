// 05-destructuracion.js
const adrian= {
    nombre: "Adrian",
};
const carolina = {
    nombre: "Carolina",
    apellido: "Eguez",
};
const adrianCarolina = {  // crea una nueva REFERENCIA (VALOR)
    ...carolina, // 1 el orden es importante para propiedades que se repiten
    ...adrian, // El ultimo reempolaza a los anteriores
};
console.log('adrianCarolina', adriancarolina);

// Destructuracion de arreglos
const arregloUno = [1 , 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo = [
    ...arregloUno, // El orden importa
    ...arregloDos,
]; // [1, 2, 3, 4, 5. 6. 7, 8, 9, 10];
console.log('superArreglo', superArreglo);
