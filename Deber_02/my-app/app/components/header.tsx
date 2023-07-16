'use client'
import {useState} from "react";
import css from "styled-jsx/css";
import {Bars3Icon, HeartIcon, ShoppingCartIcon, UserCircleIcon, UserIcon} from "@heroicons/react/20/solid";
import {FaMagnifyingGlass} from "react-icons/fa6";
export default function Header(){
    return(
        <>
            <div className="flex gap-2 bg-black justify-around h-[64px] pr-[140px] pl-[145px]">
                <div className="flex items-center w-[750px] ">
                    <button>
                    <img src="/img.png" alt="Logo" className="w-[100px] h-[21,66px]"/>
                    </button>
                </div>
                <div>
                    <button className="flex items-center h-[64px] gap-2 bg-black  hover:bg-[#44444B] text-white text-[12px] py-2 px-4">
                        <UserIcon ></UserIcon>
                        My Sony
                    </button>
                </div>
                <div>
                    <button className="flex items-center h-[64px] gap-2 bg-black  hover:bg-[#44444B] py-2 px-4">
                        <HeartIcon className="h-[26px] w-[26px] text-white"></HeartIcon>
                    </button>
                </div>
                <div>
                    <button className="flex items-center h-[64px] gap-2 bg-black  hover:bg-[#44444B] py-2 px-4">
                        <ShoppingCartIcon className="h-[26px] w-[26px] text-white"></ShoppingCartIcon>
                    </button>
                </div>
                <div>
                    <button className="flex items-center h-[64px] gap-2 bg-black  hover:bg-[#44444B] py-2 px-4">
                        <FaMagnifyingGlass className="h-[26px] w-[26px] text-white"></FaMagnifyingGlass>

                    </button>
                </div>
                <div>
                    <button className="flex items-center h-[64px] gap-2 bg-black  hover:bg-[#44444B] py-2 px-4">
                        <Bars3Icon className="h-[26px] w-[26px] text-white"></Bars3Icon>
                    </button>
                </div>
            </div>

        </>
    )
}