import React from 'react'
import {TiLocation} from 'react-icons/ti'
import {BsFillBookmarkStarFill, BsBuildings} from 'react-icons/bs'
function CardStudy({study}) {
  return (
    <div className='flex flex-col gap-2 px-5 py-3 '>
        <h2 className='border-b-2 pb-0.5 text-lg'>Desarrollo de Aplicaciones Multiplataforma (DAM)</h2>
        <div className="flex justify-start">
            <BsBuildings size={32}/>
            <h4 className='pl-2 self-center'>IES AZARQUIEL</h4>
        </div>

        <div className="flex justify-start">
            <TiLocation size={32}/>
            <h4 className='pl-2 self-center'>Toledo, Castilla-La-Mancha, Spain</h4>
        </div>
        <div className='flex justify-start'>
            <BsFillBookmarkStarFill size={32} />
            <h6 className='pl-2 self-center'>Titulacion: 8</h6>
        </div>
    </div>
  )
}

export default CardStudy