import React from "react";

function Project({ logo: LogoComponent , project}) {
  return (
    <a href={project.link} className="semi-black py-4 px-6 text-shadow-inner-md bg-gradient-to-tr from-yellow-400 via-yellow-200 to-amber-500 rounded-lg">
      <span className="flex gap-8">
        <LogoComponent size={64} color="black" className="inner-shadow-icon" />
        <h1 className="text-2xl self-center">{project.title}</h1>
      </span>
      <p dangerouslySetInnerHTML={{ __html: project.desc }}></p>
      <p>
        <b>Tecnologias:</b> {project.skills}
      </p>
    </a>
  );
}

export default Project;
