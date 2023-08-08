import React, { useState } from 'react'
import Canvas3D from "../3DModels/Canvas3D";
import PersonalData from "../PersonalData/PersonalData";
import Typewriter from "typewriter-effect";

function EntryComponent() {

    const [isRotating, setIsRotating] = useState(false)

    const startRotation = () => {
      setIsRotating(!isRotating);
    }

  return (
    <div className="entrycont flex h-screen">
    <div className="w-1/2 flex">
      <div className="m-auto">
        <div className="font-bold mb-6 text-center text-4xl md:text-3xl">
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
        <div className="s-less md:s-half">
          <Canvas3D isRotating={isRotating} />
        </div>
        <div className='flex w-full justify-center pt-5'>
          <button className='boton bg-gray-800 shadow-lg shadow-gray-700 font-semibold' onClick={startRotation}>{isRotating ? 'Stop' : 'Rotate View'}</button>
        </div>
      </div>
    </div>
    <div className="w-1/2">
        <PersonalData />
    </div>
  </div>
  )
}

export default EntryComponent