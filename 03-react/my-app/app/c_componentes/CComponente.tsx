import {useState} from "react";

export type PropiedadesComponente = {
    url: string;
    iteraciones: number;
    mostrar?: boolean;
}
export default function CComponente(
    props: PropiedadesComponente
) {
    //const url = props.url
    //const iteraciones = props.iteraciones
    //const mostrar = props.mostrar
    const {url, iteraciones, mostrar} = props
    // const numeroUno = arreglo[0]
    // const numeroDos = arreglo[1]
    const arreglo = [0, 1]
    const [numeroUno, numeroDos] = arreglo
    const contenidoAdicional = () => {
        if (mostrar) {
            return <p> Mostrar</p>
        }
        return <p>Ocultar</p>
    }
    const objeto = {}
    const [iteracionLocal,setIteracionLocal] = useState(
        iteraciones
    )
    const [color, setColor] = useState(
        'bg-red-500',
    )
    function cambioColor(){
        if(color === 'bg-red-500'){
            return 'bg-yellow-500'
        }else{
            return 'bg-red-500'
        }
    }
    return (
        <div className="border border-solid border-black p-3 m-2">
            <a target={"_blank"} href={url}> IR A URL</a>
            <p className= {color}> Iteracion: {iteraciones} {iteracionLocal}</p>
            <p>Mostrar: {mostrar}</p>
            {contenidoAdicional()}
            {mostrar && <p>Mostrar rapido</p>}

            <button className="border border-solid border-black bg-blue-500" onClick={
                (event) => {
                    console.log(event);
                    setIteracionLocal(iteracionLocal + 1)
                    setColor(cambioColor())
                }}>Aumentar
            </button>
        </div>
    )
}