// app/componentes/c_menu.component.tsx
export default function C_menuComponent(){
    return(
        <>
            <ul>
                <li><a href={"/"}>Inicio</a> </li>
                <li><a href={"/a_hola_mundo"}>A Hola Mundo</a> </li>
                <li><a href={"/b_hola_mundo"}>B Hola Mundo</a> </li>
                <li><a href={"/c_coponentes"}>C Componentes</a> </li>
                <li><a href={"/d_use_state"}>D Use State</a> </li>
                <li><a href={"/e_custom_hook"}>E Custom Hook</a> </li>
                <li><a href={"/f_use_context"}>F Use Context</a> </li>
                <li><a href={"/g_ejemplo_criptomoneda"}>G Ejemplo Criptomoneda</a> </li>
                <li><a href={"/h_mui_konsta"}>H Mui Konsta</a> </li>
                <li><a href={"/i_react_hook_form"}>I React Forms</a> </li>
                <li><a href={"/j_ruta/[idUsuario]"}>J Ruta</a> </li>
                <li><a href={"/k_websockets"}>K websockets</a> </li>
            </ul>
        </>
    )
}