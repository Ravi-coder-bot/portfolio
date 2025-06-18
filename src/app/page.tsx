import React from 'react'
import Top from '../components/Top'
import Hero from '../components/Hero'
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


const page = () => {
  return (
    <main className='bg-black min-h-screen'> 
      <Top/>
       <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </main>
  )
}

export default page