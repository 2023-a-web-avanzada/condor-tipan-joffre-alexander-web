import {useState} from "react";
import css from "styled-jsx/css";
import {ChevronRightIcon, HeartIcon} from "@heroicons/react/20/solid";

export default function News() {
    const [isClicked1, setIsClicked1] = useState(false);

    const handleClick1 = () => {
        setIsClicked1(!isClicked1);
    };

    const buttonStyle1 = {
        color: isClicked1 ? 'red' : '#83838F',
    };
    const [isClicked2, setIsClicked2] = useState(false);

    const handleClick2 = () => {
        setIsClicked2(!isClicked2);
    };

    const buttonStyle2 = {
        color: isClicked2 ? 'red' : '#83838F',
    };
    const [isClicked3, setIsClicked3] = useState(false);

    const handleClick3 = () => {
        setIsClicked3(!isClicked3);
    };

    const buttonStyle3 = {
        color: isClicked3 ? 'red' : '#83838F',
    };
    const [isClicked4, setIsClicked4] = useState(false);

    const handleClick4 = () => {
        setIsClicked4(!isClicked4);
    };

    const buttonStyle4 = {
        color: isClicked4 ? 'red' : '#83838F',
    };
    return (
        <>
            <div className=" pl-[120px] bg-white">
                <h1 className="text-[22px] font-bold">NOVEDADES</h1>
                <div className="relative">
                <div className="flex  gap-8 bg-white pl-[30px] pt-[30px]">
                    <div className="flex flex-col gap-[30px]">
                    <div className=" flex grow flex-col bg-[#A46900] gap-8 w-[550px] h-[183px] p-[30px]">
                        <h4 className="text-white text-[26px] font-bold">Portabilidad por tu día a día</h4>
                        <p className="text-white text-[15px]">Tus compañeros ideales</p>
                    </div>
                        <div className="flex gap-[20px]">
                    <div className="flex flex-col">
                        <button>
                            <img src="/img_10.png" alt="Logo" className="w-[169px] h-[164px]"/>
                            <h5 className="flex justify-start text-[12px] text-[#2f353d] p-0">Parlante inalámbrico portátil</h5>
                            <h5 className="flex justify-start text-[12px] text-[#2f353d]">XE300 de la serie X</h5>
                            <span className="flex justify-start font-bold text-[15px]">SRS-XE300 </span>
                            <div className="flex">
                                <img src="/img_8.png" alt="Logo" className="w-[78px] h-[18px]"/>
                                <p className="text-[12px] text-[#6B6B7B]">(254)</p>
                            </div>
                            <p className="flex justify-start text-[15px] text-[#6B6B7B] pb-[5px]">$ 169.0</p>
                        </button>
                        <div className="flex flex-grow items-end">
                        <button onClick={handleClick1}>
                            <HeartIcon className="w-[15px] h-[15px]" style={buttonStyle1}></HeartIcon>
                        </button>
                        </div>
                    </div>
                        <div className="flex flex-col">
                            <button>
                                <img src="/img_11.png" alt="Logo" className="w-[169px] h-[164px]"/>
                                <h5 className="flex justify-start text-[12px] text-[#2f353d]">Cámara APS-C con AF rápido</h5>
                                <h5 className="flex justify-start text-[12px] text-[#2f353d]">Alpha 6100</h5>
                                <span className="flex justify-start font-bold text-[15px]">ILCE-6100L/ILCE-<br/>6100Y </span>
                                <div className="flex">
                                    <img src="/img_8.png" alt="Logo" className="w-[78px] h-[18px]"/>
                                    <p className="text-[12px] text-[#6B6B7B]">(44)</p>
                                </div>
                                <p className="flex justify-start text-[15px] text-[#6B6B7B] pb-[5px]">Desde<br/>$ 899.0</p>
                            </button>
                            <button onClick={handleClick2}>
                                <HeartIcon className="w-[15px] h-[15px]" style={buttonStyle2}></HeartIcon>
                            </button>
                        </div>

                        <div className="flex flex-col">
                            <button>
                                <img src="/img_12.png" alt="Logo" className="w-[169px] h-[164px] justify-center"/>
                                <h5 className="flex justify-start text-[12px] text-[#2f353d]">Audífonos "True Wireless"</h5>
                                <h5 className="flex justify-start text-[12px] text-[#2f353d]">WF-C500</h5>
                                <span className="flex justify-start font-bold text-[15px]">WF-C500</span>
                                <div className="flex">
                                    <img src="/img_8.png" alt="Logo" className="w-[78px] h-[18px]"/>
                                    <p className="text-[12px] text-[#6B6B7B]">(816)</p>
                                </div>
                                <p className="flex justify-start text-[15px] text-[#6B6B7B] pb-[5px]">$ 79.9</p>
                            </button>
                            <div className="flex flex-grow items-end">
                            <button onClick={handleClick3}>
                                <HeartIcon className="w-[15px] h-[15px]" style={buttonStyle3}></HeartIcon>
                            </button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col">
                        <button>
                            <img src="/img_7.png" alt="Logo" className="w-[470px] h-[388px]"/>
                            <h5 className="flex justify-start text-[12px] text-[#2f353d]">LinkBuds S</h5>
                            <span className="flex justify-start font-bold text-[15px]">LinkBuds S</span>
                            <div className="flex">
                                <img src="/img_8.png" alt="Logo" className="w-[78px] h-[18px]"/>
                                <p className="text-[12px] text-[#6B6B7B]">(383)</p>
                            </div>
                            <p className="flex justify-start text-[15px] text-[#6B6B7B] pb-[5px]">$ 169.9</p>
                        </button>
                        <button onClick={handleClick4}>
                            <HeartIcon className="w-[15px] h-[15px]" style={buttonStyle4}></HeartIcon>
                        </button>
                    </div>
                </div>
            </div>

            </div>
        </>
    )
}