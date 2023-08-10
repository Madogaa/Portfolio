import React, { useState } from "react";
import Canvas3D from "../3DModels/Canvas3D";
import PersonalData from "../PersonalData/PersonalData";
import Typewriter from "typewriter-effect";
import './EntryComponent.css'

function EntryComponent() {
  const [isRotating, setIsRotating] = useState(false);

  const startRotation = () => {
    setIsRotating(!isRotating);
  };

  return (
    <div className="entrycont grid grid-cols-12 min-h-screen">
      <div className="col-span-12 lg:col-span-6 2xl:col-span-5 flex">
        <div className="w-full sm:m-auto">
          <div className="font-bold mb-4 md:mb-6 text-center text-2xl md:text-3xl">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Mario Dominguez Garcia")
                  .pauseFor(8000)
                  .start();
              }}
            />
          </div>
          <div className="m-auto s-xl lg:p-8">
            <Canvas3D isRotating={isRotating} />
          </div>
          <div className="flex w-full justify-center pt-5">
            <button
              className="boton bg-gray-800 shadow-lg shadow-gray-700 font-semibold hidden md:block"
              onClick={startRotation}
            >
              {isRotating ? "Stop" : "Rotate View"}
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 2xl:col-span-7">
        <PersonalData />
      </div>
    </div>
  );
}

export default EntryComponent;
