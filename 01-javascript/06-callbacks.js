const fs = require('fs'); // file system
                          // Importar modulo fs
//Caramelo: se puede hacer en el propio proceso
//Pan: necesita otro proceso
console.log('PRIMERO');
//const a = 1 + 1;

fs.readFile(
    './06-ejemplo.txt', // Nombre o path del archivo
    'utf-8', //codificacion
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        console.log('SEGUNDO')
        if(errorLecturaPrimerArchivo){
            console.error(errorLecturaPrimerArchivo)
            throw new Error('Error leyendo primer archivo')
        }else{
            fs.readFile(
                './01-variables.js', // Nombre o path del archivo
                'utf-8', // codificacion
                (errorLecturaSegundoArchivo, contenidoSegundoArchivo)=>{
                }
            )
        }
    }
);
console.log('TERCERO');


// 06-ejemplo.txt -> Hola

// 1) Leer archivo:06-ejemplo.txt,
// luego imprimir en consola
// 2) Despues del paso 1, Leer archivo:01-variables.js
// , luego imprimir en consola
// 3) Crear un nuevo archivo llamaddo 06-nuevo-archivo.txt
// con el contenido de los otros dos archivos.


fs.readFile(
    './06-ejemplo.txt', // Nombre o path del archivo
    'utf-8', //codificacion
    (errorLecturaArchivo, contenidoArchivo) => {
        if (errorLecturaArchivo) {
            console.error(errorLecturaArchivo)
            throw new Error('Error leyendo archivo 06-ejemplo.txt')
        } else {
            console.log("Lectura exitosa de archivo 06-ejemplo.txt")
            fs.readFile(
                './01-variables.js', // Nombre o path del archivo
                'utf-8', //codificacion
                (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
                    if (errorLecturaPrimerArchivo) {
                        console.error(errorLecturaPrimerArchivo)
                        throw new Error('Error leyendo archivo')
                    } else {
                        console.log("Lectura exitosa de archivo 01-variables.js")
                        var nuevoContenido = contenidoArchivo + contenidoPrimerArchivo
                        fs.writeFile(
                            './06-nuevo-archivo.txt',
                            nuevoContenido,
                            (errorEscritura) => {
                                if (errorEscritura) {
                                    console.error('Error al escribir')
                                }else{
                                    console.log("Escritura exitosa del archivo 06-nuevo-archivo.txt")
                                }
                            }
                        )
                    }
                }
            )
        }
    }
    )