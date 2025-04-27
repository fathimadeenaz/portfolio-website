"use client";

import Script from "next/script";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/app/projects/page";
import Contact from "@/components/Contact";
import { Toaster } from "@/components/ui/sonner"

function MainPage() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects simplified />
      <Contact />
      <Toaster richColors />
      <Script src="https://unpkg.com/@splinetool/viewer@1.9.87/build/spline-viewer.js" />
    </>
  );
}

export default MainPage;
