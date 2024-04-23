import React from 'react';
import codexImage from '../../images/codex.png'

const Header = () => {
  return (
    <div className='h-40 justify-center flex'>
      <img className=' mt-auto h-12 w-12 mx-4 my-2' src={codexImage}></img>
      <h1 className=" mt-auto uppercase text-6xl font-bold font font-roboto text-yellow-400">Xeno Codex</h1>
    </div>
  );
};

export default Header;