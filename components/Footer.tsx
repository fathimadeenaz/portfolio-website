"use client"

import Link from "next/link"
import { socials } from "@/constants/config"

const Footer = () => {
    return (
        <footer className="flex max-md:flex-col w-full justify-between p-4 bg-[var(--col-15)]">
            <div className="text-base md:text-md text-center max-md:mb-4">&copy; 2025 Deenaz Fathima. All Rights Reserved.</div>
            <div className="flex items-center justify-center gap-4">
                {socials.map(({ icon: Icon, url }, index) => (
                    <Link key={index} href={url} target="_blank" rel="noopener noreferrer">
                        <Icon className="text-white cursor-pointer text-2xl transition-colors duration-500 hover:text-[var(--col-6)]" />
                    </Link>
                ))}
            </div>
        </footer>
    )
}

export default Footer