"use client";

import { useState } from "react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import Planet from "./Planet";

const Hero = () => {
    const [splineLoaded, setSplineLoaded] = useState(false);

    return (
        <main
            id="hero"
            className="overflow-hidden flex flex-1 flex-col justify-between min-h-screen w-full pt-10 px-8"
        >
            <div className="mt-12">
                <h1 className="text-center text-3xl md:text-5xl lg:text-8xl font-extrabold tracking-[5px] leading-none bg-gradient-to-b from-white to-[var(--col-4)] text-transparent bg-clip-text">
                    WEB DEVELOPER
                </h1>
                <div className="mt-8 flex flex-col items-start">
                    <p className="text-md md:text-xl lg:text-2xl bg-gradient-to-r from-[var(--col-6)] via-white to-[var(--col-7)] text-transparent bg-clip-text">
                        BASED<br />In<br />USA
                    </p>
                </div>
            </div>

            <div className="uppercase mt-auto mb-8">
                <p className="text-sm md:text-md lg:text-lg leading-[1.6] font-light tracking-[1px] max-md:max-w-3/4 md:max-w-[22rem]">
                    I build <span className="text-[var(--col-6)]">intuitive, beautiful websites</span> that blend <span className="text-[var(--col-7)]">design, experience, and technology</span>.
                </p>
            </div>

            <div
                className="absolute bottom-5 right-5 w-full flex justify-end items-end z-2"
            >
                <Link
                    className="cursor-pointer w-[35px] h-[64px] rounded-3xl shadow-[0_0_10px_rgba(255,255,255,0.5)] flex justify-center items-start p-2"
                    href="#skills"
                >
                    <div className="w-4 h-4 rounded-full bg-gray-400 mb-1 animate-bounce-custom" />
                </Link>
            </div>

            {!splineLoaded && (
                <div className="absolute inset-0 flex justify-center items-center z-50">
                    <p className="text-white/50 text-base animate-pulse">Loading 3D...</p>
                </div>
            )}
            <Spline
                className="absolute -top-[15%] right-0 h-[120vh]!"
                scene="https://prod.spline.design/exYFM4saDefkkg59/scene.splinecode"
                onLoad={() => setSplineLoaded(true)}
            />
            {/* <Planet /> */}
        </main>
    );
};

export default Hero;
