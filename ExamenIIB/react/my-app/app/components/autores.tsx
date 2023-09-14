import {useState} from "react";
import {AutorType} from "@/app/types/AutorType";
import axios from 'axios';
const db = 'http://localhost:3001/autor'
export default function Autores(){

    const [autores, setAutores] = useState([]as AutorType[])

    async function getAutores(){
        const response = await axios.get(db)
        if(response.statusText === 'OK'){
            setAutores(response.data)
        }
    }
    const crearAutor = () =>{

    }
    return (
        <>

        </>
    )
}