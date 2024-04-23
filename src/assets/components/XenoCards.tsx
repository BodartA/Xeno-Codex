import React from 'react';
import titanImage from '../images/titan.png'

const XenoCards = () => {
  return (
    <>
      <div className='flex m-4'>
        <div className='h-72 w-64 rounded-lg bg-gradient-to-tl from-purple-950 to-purple-800 absolute z-0'></div>
        <div className='h-72 w-64 rounded-lg border-2 border-zinc-800 bg-yellow-400 text-center content-center z-10 -translate-x-1.5 -translate-y-1.5 hover:translate-x-0 hover:translate-y-0 duration-150'>
          <h2 className='font-mono font-bold uppercase text-zinc-800 text-4xl'>Titan</h2>
          <img src={titanImage} className='object-center w-full object-contain p-2'></img>
          <h3 className='text-zinc-800 font-mono font-semibold'>Terminides</h3>
        </div>
      </div>
    </>
  );
};

export default XenoCards;