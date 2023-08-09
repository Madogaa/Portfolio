import React from "react";
import { BsFillPersonFill, BsLinkedin, BsGithub } from "react-icons/bs";
import "./PersonalData.css";

function PersonalData() {
  return (
    <div className="flex flex-col h-screen p-20">
      <div className="m-auto">
        <div className="border border-2 border-white w-fit rounded-full p-1">
          <BsFillPersonFill color="white" size={32} />
        </div>
        <div className="border-t-2 border-white w-full p-2 mt-2.5"></div>
        <p className="text-lg">
          Soy un Desarrollador Full Stack, apasionado del proceso resolutivo de
          retos complejos e innovadores. Soy una persona muy curiosa e inquieta
          que disfruta aprendiendo. Actualmente me encuentro en constante
          formación intentando profundizar y abarcar en la variedad de
          tecnologias del mercado. Asi mismo, otra parte de mi tiempo la dedico
          buscando una oportunidad para satisfacer mis ganas de desarrollarme
          profesionalmente. Si os interesa mi perfil, no dudeis en{" "}
          <a href="#">contactarme</a>
        </p>
        <div className="flex gap-12 p-12 w-full justify-center">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mario-dominguez-garcia-dg/">
            <BsLinkedin
              className="changeColor"
              size={32} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Madogaa">
            <BsGithub
              className='changeColor'
              size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PersonalData;
