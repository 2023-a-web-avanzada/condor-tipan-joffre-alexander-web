// 08-promesas.js
const fs = require('fs');
/*
* Una funcion que acepte como parametro una variable
* del "path" del archivo y otra variable con el "contenidoArchivo".
* Utilizar el modulo 'fs' para leer el archivo en ese "path" y anadir el
* "contenidoArchivo" a ese archivo.
* */
function leerArchivo(path){
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path, // Nombre o path del archivo
                'utf-8', // codificacion
                (errorLectura, contenido)=>{
                    if(errorLectura){
                        console.error(errorLectura);
                        reject('Error leyendo primer archivo');
                    }else{
                        resolve(contenido)
                    }
                }
            );
        }
    );
}
function escribirArchivo(path, contenido){
    return new Promise(
        (res, rej)=>{
            fs.writeFile(
                path,
                contenido,
                (errorEscritura) => {
                    if (errorEscritura) {
                        console.error(errorEscritura)
                        rej('Error escribiendo archivo')
                    } else {
                        res("El archivo se escribio correctamente ")
                    }
                }
            )
        }
    )
}
function ejercicio(path1, path2, pathE){
    var contenido;
    leerArchivo(path1)
        .then(
            (data)=>{
                contenido = data;
                return leerArchivo(path2);
            }
        )
        .then(
            (data)=>{
                contenido += data;
                return escribirArchivo(pathE, contenido)
            }
        )
        .then(
            (data)=>{
                console.log('DATA',data);
            }
        )
        .catch( //catch
            (error)=>{
                console.error('ERROR', error); // string...
            }
        )
        .finally( // finally
            ()=>{
                console.log('Finally');
            }
        );
}
ejercicio('./06-ejemplo.txt','./01-variables.js','./06-nuevo-archivo.txt' )