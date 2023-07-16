import {AiFillFacebook} from "react-icons/ai";
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs";
import {useState} from "react";
import {SlLike} from "react-icons/sl";
import {BiSolidLike} from "react-icons/bi";
import {ArrowRightIcon, ChevronRightIcon, Square2StackIcon} from "@heroicons/react/20/solid";

export default function Footer() {
    const [faceHover, setFaceHover] = useState(false);

    function mouseEnterFace () {
        setFaceHover(true);
    }

    function mouseLeaveFace(){
        setFaceHover(false);
    }
    const [twittHover, setTwittHover] = useState(false);

    function mouseEnterTwitt () {
        setTwittHover(true);
    }

    function mouseLeaveTwitt(){
        setTwittHover(false);
    }
    const [ytHover, setYtHover] = useState(false);

    function mouseEnterYt () {
        setYtHover(true);
    }

    function mouseLeaveYt(){
        setYtHover(false);
    }
    const [instaHover, setInstaHover] = useState(false);

    function mouseEnterInsta () {
        setInstaHover(true);
    }

    function mouseLeaveInsta(){
        setInstaHover(false);
    }

    const [visible, setVisible] = useState(false);
    const divStyle = {
        display: visible ? 'block' : 'none'
    };

    const cambiarVisibilidad = () => {
        setVisible(!visible);
    };
    function facebookHover(){
        return(
            <div className="absolute bottom-[41px] right-[-120px]">
            <div className="flex flex-col bg-white w-[275px] h-[162px] pt-[30px] pl-[20px] pb-[30px] pr-[10px]">
                <p className="text-[16px] text-[#878792]">Unete a nosostros en Facebook</p>
                <div className=" pt-[20px] pl-[15px]">
                <button className="flex items-center bg-blue-500 gap-[4px] w-[100px] text-[12px] pl-[3px]">
                    <BiSolidLike></BiSolidLike>
                    Seguir 6,1 mill
                </button>
                </div>
                <div className="flex items-center pt-[20px]">
                    <button className="flex items-center">
                <nav>
                    <ul>
                        <li>
                            <a className="text-blue-500 text-[12px]">Visitanos en facebook</a>
                        </li>
                    </ul>
                </nav>
                    <Square2StackIcon className="text-blue-500 w-[15px] h-[15px] pl-[3px]"></Square2StackIcon>
                    <ChevronRightIcon className="text-blue-500 w-[15px] h-[15px]"></ChevronRightIcon>
                    </button>
                </div>
            </div>
            </div>

        )
    }
    function twitterHover(){
        return(
            <div className="absolute bottom-[41px] right-[-80px]">
                <div className="flex flex-col bg-white w-[198px] h-[142px] pt-[15px] pl-[20px] pb-[30px] pr-[10px]">
                    <p className="text-[16px] text-[#878792]">Siguenos en twitter</p>
                    <div className="flex items-center pt-[20px]">
                        <nav>
                            <ul>
                                <li>
                                    <a className="text-blue-500 text-[12px]">Twittear</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center pt-[20px]">
                        <nav>
                            <ul>
                                <li>
                                    <a className="text-blue-500 text-[12px]">Visitanos en Twitter</a>
                                </li>
                            </ul>
                        </nav>
                        <Square2StackIcon className="text-blue-500 w-[15px] h-[15px]"></Square2StackIcon>
                        <ChevronRightIcon className="text-blue-500 w-[15px] h-[15px]"></ChevronRightIcon>
                    </div>
                </div>
            </div>
        )
    }
    function youtubeHover(){
        return(
            <div className="absolute bottom-[200px] right-[55px]">
                <div className="flex flex-col bg-white w-[380px] h-[152px] pt-[15px] pl-[20px] pb-[30px] pr-[10px]">
                    <p className="text-[16px] text-[#878792]">Suscríbete en Youtube</p>
                    <div className="flex pt-[20px] text-[12px]">
                    <div className="flex bg-red-600 items-center pr-[5px]">
                        <BsYoutube className="w-[30px] h-[30px] pl-[5px] pr-[5px]"></BsYoutube>
                        YouTube
                    </div>
                    <div className="flex items-center border-solid border-[1px] text-[#828297]">74k</div>
                    </div>
                    <div className="flex items-center pt-[20px]">
                        <nav>
                            <ul>
                                <li>
                                    <a className="text-blue-500 text-[12px]">Visitanos en YouTube</a>
                                </li>
                            </ul>
                        </nav>
                        <Square2StackIcon className="text-blue-500 w-[15px] h-[15px]"></Square2StackIcon>
                        <ChevronRightIcon className="text-blue-500 w-[15px] h-[15px]"></ChevronRightIcon>
                    </div>
                </div>
            </div>
        )
    }
    function instagramHover(){
        return(
            <div className="absolute bottom-[200px] right-[20px]">
                <div className="flex flex-col bg-white w-[220px] h-[128px] text-[16px] justify-center">
                    <p className="text-[#878792] pb-[20px] pl-[20px]">Síguenos en Instagram</p>
                    <div className="flex text-[12px] text-blue-500 pl-[20px]">
                    <button>
                    <nav>
                        <ul>
                            <li>
                                <a>Venos en Instagram</a>
                            </li>
                        </ul>
                    </nav>
                    </button>
                </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="relative">
            <div className="flex flex-col bg-black pl-[100px] pr-[100px] h-[477px]">
                <div className="flex h-[480px] text-white ">
                    <div className="flex justify-between flex-grow pt-[60px]">
                        <div className="flex flex-col  pl-[40.4px] pr-[200px]">
                            <p className="pb-[20px] text-[15px] text-[#878792]">Busca un distribuidor</p>
                            <div className="flex border-solid border-[#878792] border-[3px] p-[6px]">
                                <input className="bg-black border-white w-[190px] h-[43,2px] text-[#878792] text-[12px] text-white mr-[15px]" onClick={cambiarVisibilidad} value=""/>
                                <button className="bg-blue-500 w-[92px] h-[28px] p-[4px] text-[12px] justify-center"> Buscar
                                </button>
                            </div>
                            <nav>
                                <ul>
                                    <li><a className="text-[12px] text-white" href="">Tienda y Distribuidores</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex flex-grow flex-col">
                            <p className="pb-[20px] text-[15px] text-[#878792] ">Comunidad</p>
                            <nav>
                                <ul>
                                    <li><a className="text-[12px] text-white" href="">Comunidad Alpha</a></li>
                                </ul>
                            </nav>
                            <nav>
                                <ul>
                                    <li><a className="text-[12px] text-white" href="">Blog PlayStation</a></li>
                                </ul>
                            </nav>
                            <nav>
                                <ul>
                                    <li><a className="text-[12px] text-white" href="">Ayuda con Mi Producto</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex flex-grow flex-col">
                            <p className="pb-[20px] text-[15px] text-[#878792] ">Noticias e Información</p>
                            <nav>
                                <ul>
                                    <li><a className="text-[12px] text-white" href="">Información Corporativa</a></li>
                                </ul>
                            </nav>
                            <nav>
                                <ul>
                                    <li><a className="text-[12px] text-white" href="">Centro de Prensa</a></li>
                                </ul>
                            </nav>
                            <nav>
                                <ul>
                                    <li><a className="text-[12px] text-white" href="">Sony y el Medio Ambiente</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-end">
                        <div className="flex ">
                            <nav>
                                <ul>
                                    <li><a className="text-[12px] text-white pr-[30px]" href="">Productos & soluciones
                                        profesionales</a></li>
                                </ul>
                            </nav>
                            <nav>
                                <ul>
                                    <li><a className="text-[12px] text-white" href="">Contacto</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="flex flex-grow text-white pt-[30px] pl-[40.4px] ">
                        <button
                            className="bg-[#3C3C42] w-[70,74px] h-[33px] text-[13px] pt-[5px] pb-[12px] pl-[6px] pr-[10px]">Ecuador
                        </button>
                        <div className="flex flex-grow justify-end gap-[3px]">
                            <div className="relative">
                                <button
                                    className="bg-[#3C3C42] text-[28px] p-[5px]" onMouseEnter={mouseEnterFace}
                                    onMouseLeave={mouseLeaveFace}><BsFacebook></BsFacebook>
                                </button>
                                {faceHover && (
                                    facebookHover()
                                )}
                            </div>
                            <div className="relative">
                            <button
                                className="bg-[#3C3C42] text-[28px] p-[5px]" onMouseEnter={mouseEnterTwitt}
                                onMouseLeave={mouseLeaveTwitt}><BsTwitter></BsTwitter>
                            </button>
                            {twittHover && (
                                twitterHover()
                            )}
                            </div>
                            <div className="relative">
                            <button
                                className="bg-[#3C3C42] text-[28px] p-[5px]" onMouseEnter={mouseEnterYt}
                                onMouseLeave={mouseLeaveYt}><BsYoutube></BsYoutube>
                            </button>
                            </div>
                            {ytHover && (
                                youtubeHover()
                            )}
                            <div className="relative">
                            <button
                                className="bg-[#3C3C42] text-[28px] p-[5px]" onMouseEnter={mouseEnterInsta}
                            onMouseLeave={mouseLeaveInsta}><BsInstagram></BsInstagram>
                            </button>
                            </div>
                            {instaHover && (
                                instagramHover()
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex text-white mt-[30px] font-bold pt-[30px] pb-[10px] border-t">
                    <nav>
                        <ul>
                            <li><a className="text-[11px] text-white  pl-[50px] pr-[12px]" href="">POLÍTICA DE
                                PRIVACIDAD EN LÍNEA DE SONY LATIN AMERICA, INC</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            <li><a className="text-[11px] text-white" href="">© 2023 SONY LATIN AMERICA, INC. TODOS LOS
                                DERECHOS RESERVADOS</a></li>
                        </ul>
                    </nav>

                </div>
                <div className="flex flex-grow justify-end  items-start text-[10px] text-[#878792] pb-[50px] pr-[40px]">
                    <div className="flex">
                    <button className="flex justify-center items-center w-[150px] h-[14px] rounded-[2px] bg-white">
                        <ChevronRightIcon className="flex w-[15px] h-[15px]"></ChevronRightIcon>
                        Sony Group Portal Site
                    </button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}