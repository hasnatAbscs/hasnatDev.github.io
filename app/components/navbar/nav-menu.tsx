"use client";
import { FC, useState } from "react";
import Image from "next/image";
import NavItem from "../common/nav-item";
import MobileNavMenu from "./mobile-nav-menu";

const MENUITEMS = [
    {
        name: "Portfolio",
        link: "#portfolio",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Contact",
        link: "#contact",
    },
];

const NavMenu: FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='hidden sm:block'>
                <ul className='flex justify-between items-center space-x-4'>
                    {MENUITEMS.map((item) => (
                        <NavItem
                            index={item.name}
                            name={item.name}
                            link={item.link}
                        />
                    ))}
                </ul>
            </div>
            <div className='block sm:hidden'>
                <span
                    className='cursor-pointer	p-1	'
                    onClick={() => setOpen(!open)}
                >
                    <Image
                        src='/menu.svg'
                        alt='Logo - Hasnat Amir'
                        width={25}
                        height={25}
                    />
                </span>
            </div>
            {open && (
                <MobileNavMenu items={MENUITEMS} close={() => setOpen(false)} />
            )}
        </>
    );
};

export default NavMenu;