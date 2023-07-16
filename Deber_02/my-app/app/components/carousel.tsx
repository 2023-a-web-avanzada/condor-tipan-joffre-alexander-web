import {
    ArrowRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EllipsisHorizontalIcon,
    XCircleIcon
} from "@heroicons/react/20/solid";
import {useEffect, useState} from "react";
import css from "styled-jsx/css";

export default function Carousel() {
    const [activo1, setActivo1] = useState(false);
    const [activo2, setActivo2] = useState(true);
    const[c, setC]=useState(1);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [ovr, setOvr] = useState('h-[14px] w-[14px] rounded-3xl bg-[#31353D]')
    const [ovr2, setOvr2] = useState('h-[7px] w-[7px] rounded-3xl bg-[#BCBCCA]')
    const [ovr3, setOvr3] = useState('h-[7px] w-[7px] rounded-3xl bg-[#BCBCCA]')
    function cambioStilo(){
        if(ovr === "h-[7px] w-[7px] rounded-3xl bg-[#BCBCCA]"){
            return "h-[14px] w-[14px] rounded-3xl bg-[#31353D]"
        }else{
            return "h-[7px] w-[7px] rounded-3xl bg-[#BCBCCA]"
        }
    }
    function cambioStilo2(){
        if(ovr2 === "h-[7px] w-[7px] rounded-3xl bg-[#BCBCCA]"){
            return "h-[14px] w-[14px] rounded-3xl bg-[#31353D]"
        }else{
            return "h-[7px] w-[7px] rounded-3xl bg-[#BCBCCA]"
        }
    }

    function cambioStilo3(){
        if(ovr3 === "h-[7px] w-[7px] rounded-3xl bg-[#BCBCCA]"){
            return "h-[14px] w-[14px] rounded-3xl bg-[#31353D]"
        }else{
            return "h-[7px] w-[7px] rounded-3xl bg-[#BCBCCA]"
        }
    }
    useEffect(()=>{
        console.log('Cambio elemento', c)
        },[c]
    )
    function handleScrollP () {
        if(c === 1) {
            setC(c+1)
            setOvr2(cambioStilo2)
            setOvr(cambioStilo())
            setActivo1(true)
            setScrollPosition(scrollPosition - 400);
        }else if(c === 2){
            setC(c+1)
            setScrollPosition(scrollPosition - 400);
            setActivo2(false)
            setOvr2(cambioStilo2())
            setOvr3(cambioStilo3())
        }
    }
    function handleScrollN () {
        if(c === 3) {
            setC(c-1)
            setScrollPosition(scrollPosition + 400);
            setOvr2(cambioStilo2())
            setOvr3(cambioStilo3())
            setActivo2(true)
        }else if(c === 2){
            setC(c-1)
            setScrollPosition(scrollPosition + 400);
            setOvr2(cambioStilo2())
            setOvr(cambioStilo())
            setActivo1(false)
        }
    }



    return (
        <>
            <p className="text-[22px] font-bold pt-[10px] pb-[20px] pl-[120px] bg-white">LO MAS RECIENTE</p>
            <div className="flex flex-col">
            <div className="overflow-hidden bg-white pl-[110px] w-[2000px]">
                <div className="h-[480px]">
                    <div className="absolute overflow-hidden top-[622px] left-[90px]">
                        <div className="flex-col" style={{transform: `translateX(${scrollPosition}px)`}}>
                            <div className="relative">
                                <div className="flex flex-grow white overflow-hidden ">
                                    <div className=" flex gap-[30px] pl-[30px] ">
                                        <div>
                                            <button>
                                                <div className="relative w-[380px] h-[480px]">
                                                    <img src="/img_15.png"
                                                         className="absolute object-cover h-full w-full"
                                                         style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}}/>
                                                </div>
                                            </button>
                                        </div>

                                        <div>
                                            <button>
                                                <div className="relative w-[380px] h-[480px]">
                                                    <img src="/img_16.png"
                                                         className="absolute object-cover h-full w-full"
                                                         style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}}/>
                                                </div>
                                            </button>
                                        </div>

                                        <div>
                                            <button>
                                                <div className="relative w-[380px] h-[480px]">
                                                    <img src="/img_17.png"
                                                         className="absolute object-cover h-full w-full"
                                                         style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}}/>
                                                </div>

                                            </button>
                                        </div>

                                        <div>
                                            <button>
                                                <div className="relative w-[380px] h-[480px]">
                                                    <img src="/img_18.png"
                                                         className="absolute object-cover h-full w-full"
                                                         style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}}/>
                                                </div>
                                            </button>
                                        </div>

                                        <div>
                                            <button>
                                                <div className="relative w-[380px] h-[480px]">
                                                    <img src="/img_19.png"
                                                         className="absolute object-cover h-full w-full"
                                                         style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}}/>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-[0px] left-[0px]">
                                    <button>
                                        <div className="absolute top-[390px] left-[40px] text-white pl-[10px]">
                                            <div className="flex w-[380px] items-center">
                                                <p className="text-[22px] font-bold">Recomendados para Vloggers </p>
                                                <ChevronRightIcon className="w-[30px] h-[30px]"></ChevronRightIcon>
                                            </div>
                                            <div className="flex items-start">
                                                <p className="text-[15px] ">Potencia tus contenidos</p>
                                            </div>
                                        </div>
                                    </button>
                                    <button>
                                        <div
                                            className="absolute top-[370px] left-[440px] text-white pl-[10px] w-[380px] h-[110px] bg-black bg-opacity-80">
                                            <div className="flex items-start">
                                                <p className="text-[15px] font-bold">Ht-A9</p>
                                            </div>
                                            <div className="flex">
                                                <p className="text-[22px] font-bold">Un nuevo camino del sonido</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="text-[22px] font-bold">Surround</p>
                                                <ChevronRightIcon className="w-[30px] h-[30px]"></ChevronRightIcon>
                                            </div>
                                        </div>
                                    </button>
                                    <button>
                                        <div
                                            className="absolute top-[370px] left-[850px] text-black pl-[10px] w-[380px] h-[134px] bg-white bg-opacity-80">
                                            <div className="flex items-start">
                                                <p className="text-[15px] font-bold">WF-C700N</p>
                                            </div>
                                            <div className="flex">
                                                <p className="text-[22px] font-bold">Diseño comodo sonido</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="text-[22px] font-bold">envolvente</p>
                                                <ChevronRightIcon className="w-[30px] h-[30px]"></ChevronRightIcon>
                                            </div>
                                        </div>
                                    </button>
                                    <button>
                                        <div className="absolute top-[370px] left-[1260px] text-white">
                                            <div className="flex items-start">
                                                <p className="text-[15px] pl-[10px] font-bold">FX-30</p>
                                            </div>
                                            <p className="text-[22px] font-bold">Un salto al mundo</p>
                                            <div className="flex items-center">
                                                <p className="text-[22px] font-bold pl-[10px]">cinematografico</p>
                                                <ChevronRightIcon className="w-[30px] h-[30px]"></ChevronRightIcon>
                                            </div>
                                        </div>
                                    </button>
                                    <button>
                                        <div className="absolute top-[390px]  left-[1670px] text-black pl-[10px]">
                                            <div className="flex items-start">
                                                <p className="text-[22px] font-bold">SRS-XG300</p>
                                            </div>
                                            <div className="flex items-center w-[380px]">
                                                <p className="text-[15px]">Lleva el sonido a todas partes </p>
                                                <ChevronRightIcon className="w-[30px] h-[30px]"></ChevronRightIcon>
                                            </div>

                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="flex bg-white justify-center items-center pt-[35px] pb-[25px] gap-[10px]">
            <div className={ovr}>
            </div>
            <div className={ovr2}>
            </div>
            <div className={ovr3}>
            </div>
            </div>
            {activo1 &&(<div className="absolute top-[830px] left-[107px] w-[48px] h-[76px] bg-black bg-opacity-30 rounded-[5px]">
                <button onClick={handleScrollN}>
                    <div className="flex flex-grow items-center justify-center w-[48px] h-[76px]">
                        <ChevronLeftIcon className="w-[35px] h-[35px] text-white"></ChevronLeftIcon>

                    </div>
                </button>
            </div>)}
            {activo2 && (<div className="absolute top-[830px] left-[1307px] w-[48px] h-[76px] bg-black bg-opacity-30 rounded-[5px]" >
                <button onClick={handleScrollP}>
                    <div className="flex flex-grow items-center justify-center w-[48px] h-[76px]">
                        <ChevronRightIcon className="w-[35px] h-[35px] text-white"></ChevronRightIcon>
                    </div>
                </button>
            </div>)}
        </>
    )
}