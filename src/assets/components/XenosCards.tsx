import React from 'react';
import titanImage from '../images/titan.png'

export function XenosCards({ data }) {

  return (
    <>
      {data.map((threat) => {

        const {id, name, race, color, image} = threat

        return (
          <div key={id} className='grid m-4'>
            <div className={`max-h-72 max-w-64 rounded-lg bg-red-600 col-start-1 row-start-1`} />
            <div className='max-h-72 max-w-64 rounded-lg border-2 border-zinc-800 bg-slate-50 text-center content-center z-10 -translate-x-1.5 -translate-y-1.5 hover:translate-x-0 hover:translate-y-0 duration-150 col-start-1 row-start-1'>
              <h2 className='font-mono font-bold uppercase text-zinc-800 text-4xl'>{name}</h2>
              <img src={image} alt={name} className='object-center w-full object-contain p-2'></img>
              <h3 className='text-zinc-800 font-mono font-semibold'>{race}</h3>
            </div>
          </div>
        )
      })}

    </>
  )
}

export default XenosCards;