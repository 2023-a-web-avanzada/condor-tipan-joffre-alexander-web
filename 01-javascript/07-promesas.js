// 07-promesas.js

const fs = require('fs');

function promesaEsPar(numero){
    const miPrimerPromesa = new Promise(
        (resolve, reject)=>{
            if(numero % 2 == 0){
                resolve(numero); /* return (then) */
            }else {
                reject(':( no es par');/* throw (catch) */
            }
        }
    );
    return miPrimerPromesa
}

function promesaElevarAlCuadrado(numero){
    return new Promise((res)=> res(Math.pow(numero,2)));
}
promesaEsPar(4)
    .then( // try
        (data)=>{
            console.log('DATA', data); // 4
            return promesaElevarAlCuadrado(data);
        }
    )
    .then(  // try
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

