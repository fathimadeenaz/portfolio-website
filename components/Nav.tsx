"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";
import { useWindowScroll } from "react-use";
import { navLinks } from "@/constants/config";

const Nav = () => {
    const { y: currentScrollY } = useWindowScroll();
    const router = useRouter();

    const [toggleMenu, setToggleMenu] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navContainerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (toggleMenu) return;

        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef?.current?.classList.remove("floating-nav");
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef?.current?.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef?.current?.classList.add("floating-nav");
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY, toggleMenu]);

    useEffect(() => {
        if (toggleMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [toggleMenu]);

    return (
        <>
            <header
                ref={navContainerRef}
                className={`mb-6 fixed top-0 left-0 w-full z-50 flex px-8 py-4 justify-between items-center transition-all duration-500 ease-in-out
                        ${isNavVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} floating-nav`}
            >
                <Link
                    href="/#hero"
                    className="text-lg lg:text-2xl font-light tracking-[2px]"
                >
                    DEENAZ FATHIMA
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className="text-base text-white transition duration-300 hover:text-[var(--col-6)]"
                        >
                            <Link href={`/#${nav.id}`}>
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden">
                    <IoMenu
                        color="#fff"
                        fontSize={27}
                        className="cursor-pointer"
                        onClick={() => setToggleMenu(true)}
                    />
                </div>
            </header>

            {toggleMenu && (
                <div className="slide-bottom fixed top-0 left-0 w-full h-screen bg-black/30 backdrop-blur-2xl transition-all duration-500 ease-in-out flex justify-center items-center flex-col z-[60] p-8">
                    <IoClose
                        fontSize={27}
                        className="absolute top-6 right-8 cursor-pointer"
                        onClick={() => setToggleMenu(false)}
                    />
                    <ul className="text-center">
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className="m-4 text-lg hover:text-[var(--col-6)]"
                            >
                                <Link href={`/#${nav.id}`} onClick={() => setToggleMenu(false)}>
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Nav;
