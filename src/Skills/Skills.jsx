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
      <div className="skills p-20">
        {skills.map((skill, index) => (
          <div className="flex flex-col p-5 gap-10" key={index}>
            <h1 className="text-2xl font-semibold self-center">
              {skill.desc}
            </h1>
            <TechContainer  skills={skill.skills} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
