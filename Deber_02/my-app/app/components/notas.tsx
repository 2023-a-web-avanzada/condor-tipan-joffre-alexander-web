import {ArrowDownIcon, ArrowDownOnSquareStackIcon, ChevronDownIcon} from "@heroicons/react/20/solid";
import NotasC from "@/app/components/notasC";
import {useState} from "react";

export default function Notas(){
    const [isVisible, setIsVisible] = useState(false);
    const divStyle = {
        display: isVisible ? 'block' : 'none'
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return(
        <>
            <button onClick={toggleVisibility}>
            <div className="flex text-[13px] justify-end pt-[18px] pb-[30px] pl-[100px] pr-[100px]">
                Notas a pie de pagina
                <ChevronDownIcon className="w-[10px] h-[10px"></ChevronDownIcon>
            </div>
            </button>
            <div style={divStyle}><NotasC/></div>
        </>
    )
}