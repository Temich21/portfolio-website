"use client"
import { About } from "@/components/About/About"
import { Contact } from "@/components/Contact/Contact"
import { Education } from "@/components/Education/Education"
import { Footer } from "@/components/Footer/Footer"
import { HomeContent } from "@/components/HomeContent/HomeContent"
import { NavigationBar } from "@/components/NavigationBar/NavigationBar"
import { Projects } from "@/components/Projects/Projects"
import { Skills } from "@/components/Skills/Skills"
import { ActivePathProvider } from "@/context/ActivePath"

export default function Home() {
  return (
    <>
      <ActivePathProvider>
        <NavigationBar />
        <HomeContent />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </ActivePathProvider>
    </>
  )
}
