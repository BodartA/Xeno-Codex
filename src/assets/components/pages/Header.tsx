import React from 'react';
import codexImage from '../../images/codex.png'

const Header = () => {
  return (
    <div className='h-40 justify-center flex drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
      <img className=' mt-auto h-12 w-12 mx-4 my-2' src={codexImage}></img>
      <h1 className=" mt-auto uppercase text-6xl font-bold font font-roboto text-yellow-400 ">Xeno Codex</h1>
    </div>
  );
};

export default Header;