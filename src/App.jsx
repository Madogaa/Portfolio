import React from "react";

import AnimationComponent from "./Animation/AnimationComponent";

import "./App.css"
import Skills from "./Skills/Skills"
import EntryComponent from "./Entry/EntryComponent";


export default function App() {


  return (
    <>
    <EntryComponent />
    <AnimationComponent />
    <section className="spikes"></section>
    <section className="wavecontainer">
    <div className="text-gray-900 w-full">
      <Skills />
    </div>
      <div className="wave"></div>
    </section>
    </>
  );
}
