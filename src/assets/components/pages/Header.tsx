import React from 'react';
import codexImage from '../../images/codex.png'

const Header = () => {
  return (
    <div className='h-40 justify-center flex'>
      <img className=' mt-auto h-16 w-16 mx-4' src={codexImage}></img>
      <h1 className=" mt-auto uppercase text-6xl font-bold font font-roboto">Xeno Codex</h1>
    </div>
  );
};

export default Header;