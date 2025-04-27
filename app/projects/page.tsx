"use client"

import Link from "next/link";
import { projects } from "@/constants/config"

interface ProjectCardProps {
    name: string;
    description: string;
    tags: { name: string; color: string }[];
    image: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    name,
    description,
    tags,
    image,
    link,
}) => {
    return (
        <div className="bg-[var(--col-12)] rounded-xl p-4 lg:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-transform ease-in duration-300 hover:-scale-[1.05]">
            <div className="relative w-full h-[230px]">
                <img
                    src={image}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-xl overflow-hidden"
                />

                <div className="absolute inset-0 flex justify-end m-3 card-img_hover z-5">
                    <div
                        onClick={() => window.open(link, "_blank")}
                        className="bg-black/60 text-white w-16 h-10 rounded-full flex justify-center items-center cursor-pointer font-semibold text-sm hover:bg-[var(--col-7)] transition-colors ease-in duration-300"
                    >
                        Demo
                    </div>
                </div>

                <div className="absolute inset-0 bg-black/30 rounded-xl" />
            </div>

            <div className="mt-5">
                <div className="text-white font-bold text-lg lg:text-xl">{name}</div>
                <p className="mt-2 text-sm lg:text-base">{description}</p>
            </div>

            <div className="text-base mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <p
                        key={`${name}-${tag.name}`}
                        className={`text-sm lg:text-base text-[var(--col-${tag.color})]`}
                    >
                        #{tag.name}
                    </p>
                ))}
            </div>
        </div>

    );
};

const Projects = ({ simplified = false }: { simplified: boolean }) => {
    return (
        <section
            id="projects"
            className="min-h-screen w-full px-8 mt-20 py-24 flex flex-col items-center justify-center"
        >
            <h3 className="mb-6 text-center text-3xl lg:text-5xl font-semibold bg-gradient-to-b from-white to-[var(--col-4)] text-transparent bg-clip-text uppercase">projects</h3>
            <p className="text-center mb-12 text-base md:text-lg lg:text-xl">A Showcase of <span className="text-[var(--col-6)]">Passion, Code and Creativity</span>.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(simplified ? [...projects].slice(0, 6) : projects).map((project, index) => (
                    <ProjectCard key={`project-${index}`} {...project} />
                ))}
            </div>
            {simplified && (<Link
                href="/projects"
                className="mt-16 px-8 py-2 text-sm lg:text-base bg-[var(--col-1)] border border-[var(--col-2)] rounded-full cursor-pointer text-[var(--foreground)] transition duration-300 hover:bg-[var(--col-3)]">
                There&apos;s More!
            </Link>)}

        </section>
    )
}

export default Projects