"use client"

import { useEffect } from "react";
import { skills } from "@/constants/config"

const Skills = () => {
    useEffect(() => {
        const skills = document.querySelectorAll(".skills");

        const handleMouseMove = (e: Event) => {
            const target = e.currentTarget as HTMLElement;
            const mouseEvent = e as MouseEvent;
            const rect = target.getBoundingClientRect();
            const x = mouseEvent.clientX - rect.left;
            const y = mouseEvent.clientY - rect.top;
            target.style.setProperty("--x", `${x}px`);
            target.style.setProperty("--y", `${y}px`);
        };

        skills.forEach((skill) => {
            skill.addEventListener("mousemove", handleMouseMove);
        });

        return () => {
            skills.forEach((skill) => {
                skill.removeEventListener("mousemove", handleMouseMove);
            });
        };
    }, []);

    return (
        <section
            id="skills"
            className="min-h-screen w-full px-8 mt-12 md:mt-24 pt-24 md:pt-12 flex flex-col items-center justify-center"
        >
            <h3 className="mb-6 text-center text-3xl lg:text-5xl font-semibold bg-gradient-to-b from-white to-[var(--col-4)] text-transparent bg-clip-text uppercase">skills & technologies</h3>
            <p className="text-center mb-12 text-base md:text-lg lg:text-xl">From Vision to Execution — <span className="text-[var(--col-7)]">My Stack</span>.</p>
            <div className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="p-[1px] rounded-xl bg-gradient-to-r from-[var(--col-6)] via-white to-[var(--col-7)] transition-transform duration-300 hover:animate-gradient hover:scale-[1.05]"
                    >
                        <div className="p-4 lg:p-6 rounded-xl bg-black text-center skills relative overflow-hidden z-2">
                            <h3 className="text-base md:text-lg text-center text-white">{skill}</h3>
                            <img
                                src="/assets/gradient.png"
                                className="absolute inset-0 w-full h-full object-cover rounded-xl -z-10"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills