import React from "react";

import AnimationComponent from "./Animation/AnimationComponent";
import Skills from "./Skills/Skills"
import EntryComponent from "./Entry/EntryComponent";
import Projects from "./Projects/Projects";

import "./App.css"
import ContactForm from "./Contact/ContactForm";



export default function App() {


  return (
    <div className="app">
    <EntryComponent />
    <AnimationComponent />
    <section className="spikes"></section>
    <section className="wavecontainer">
    <div className="text-gray-900 w-full">
      <Skills />
    </div>
      <div className="wave"></div>
    </section>
    <Projects />
    <div className="">
      <ContactForm />
    </div>
    </div>


  );
}
