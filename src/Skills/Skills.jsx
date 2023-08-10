import React from "react";
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoVuejs,
  BiLogoBootstrap,
  BiLogoTailwindCss,
  BiLogoJava,
  BiLogoPython,
  BiLogoSpringBoot,
  BiLogoDjango,
  BiLogoPhp,
  BiLogoFirebase,
  BiLogoVisualStudio,
  BiLogoGit,
  BiLogoGithub,
} from "react-icons/bi";
import { FaDatabase, FaLinux } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import {
  SiHibernate,
  SiApachetomcat,
  SiEclipseide,
  SiAzuredevops,
} from "react-icons/si";
import { DiNetbeans } from "react-icons/di";
import TechContainer from "./TechContainer";

const skills = [
  {
    desc: "Front-End Tech",
    skills: [
      { title: "React", logo: BiLogoReact },
      { title: "Vue", logo: BiLogoVuejs },
      { title: "JavaScript", logo: BiLogoJavascript },
      { title: "HTML5", logo: BiLogoHtml5 },
      { title: "CSS3", logo: BiLogoCss3 },
      { title: "BootStrap", logo: BiLogoBootstrap },
      { title: "Tailwind", logo: BiLogoTailwindCss },
    ],
  },
  {
    desc: "Back-End Tech",
    skills: [
      { title: "Java", logo: BiLogoJava },
      { title: "Python", logo: BiLogoPython },
      { title: "PHP", logo: BiLogoPhp },
      { title: "Spring", logo: BiLogoSpringBoot },
      { title: "Django", logo: BiLogoDjango },
      { title: "SQL/PLSQL", logo: FaDatabase },
      { title: "MySQL", logo: TbBrandMysql },
      { title: "FireBase", logo: BiLogoFirebase },
      { title: "JPA", logo: SiHibernate },
    ],
  },
  {
    desc: "Other Skills",
    skills: [
      { title: "Git", logo: BiLogoGit },
      { title: "GitHub", logo: BiLogoGithub },
      { title: "AzureDevOps", logo: SiAzuredevops },
      { title: "Linux", logo: FaLinux },
      { title: "VSCode", logo: BiLogoVisualStudio },
      { title: "Eclipse", logo: SiEclipseide },
      { title: "NeatBeans", logo: DiNetbeans },
      { title: "Tomcat", logo: SiApachetomcat },
    ],
  },
];

function Skills() {
  return (
    <>
      {skills.map((skill, index) => (
        <div className="py-5" key={index}>
          <h1 className="text-2xl font-semibold text-center py-4">{skill.desc}</h1>
          <div className="flex flex-wrap justify-center p-4 md:p-10 sm:p-6 gap-5 sm:gap-8">
            {skill.skills.map((tech, techIndex) => (
              <div className="w-fit" key={techIndex}>
                <TechContainer skills={[tech]} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Skills;
