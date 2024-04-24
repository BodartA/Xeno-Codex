import { AdjustmentsHorizontalIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Navbar = () => {


  return (
    <div className='flex mx-auto h-14 w-1/3 bg-white rounded-full'>
      <input className=" focus:outline-none pl-4 bg-transparent w-full font-mono" type='text' placeholder='Entrez votre menace ...'/>
      <AdjustmentsHorizontalIcon className='' />
      <MagnifyingGlassCircleIcon className='' />
    </div>
  );
};

export default Navbar;