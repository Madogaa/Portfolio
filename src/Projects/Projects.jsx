import React from "react";
import { BiLogoVuejs,BiLogoReact } from "react-icons/bi";
import "./Projects.css";
import Project from "./Project";

const projects = [
    {
        logo: BiLogoVuejs,
        title: "DotShare",
        desc:"Demo de una red social de compartición de apuntes, desarrollada para el TFG del grado en Desarrollo de Aplicaciones Multiplataforma. <br />Titulación obtenida: <b>10</b>",
        skills: "Vue, Spring, HTML, CSS, JS, BS, SQL, MySQL, Tomcat, Web Scraping",
    },
    {
        logo: BiLogoReact,
        title: "Shopycheep",
        desc:"Demo de un comparador de precios de productos de momento de supermercados como Dia y condis",
        skills: "React, Django, HTML, CSS, JS, TailwindCss, SQL, MySQL, Web Scraping",
    },
]

function Projects() {
  return (
    <div className="flex flex-col pt-48 gap-10">
    <h1 className="text-center text-3xl font-bold">Projects</h1>
    <div className="px-36 grid grid-cols-3 gap-16">
        {projects.map((project,index) => (
            <Project key={index} logo={project.logo} project={project} />
        ))
        }
    </div>
    <a href="https://github.com/Madogaa" target="_blank" rel="noopener noreferrer" className="py-2 px-4 bg-gradient-to-tr from-yellow-400 via-yellow-200 to-amber-500 rounded-lg text-shadow-inner-md semi-black self-center">Ver más</a>
    </div>

  );
}

export default Projects;