import React from 'react';
import codexImage from '../../images/codex.png'

const Header = () => {
  return (
    <>
        <div className='flex min-h-32 justify-center'>
      <div className='flex my-auto'>
          <img className='h-12 w-12 mx-4 my-2' src={codexImage}></img>
          <h1 className="uppercase text-6xl font-bold font font-roboto text-zinc-800">Xeno Codex</h1>
          </div>
        </div>
    </>
  );
};

export default Header;