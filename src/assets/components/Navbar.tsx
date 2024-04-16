import React, { useState } from 'react';
import codexImage from '../images/codex.png'
import { Link } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

  const Links = [
    { name: "Automatons", link: "/" },
    { name: "Termitides", link: "/" },
  ]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className=' bg-yellow-400 shadow-md w-full fixed left-0 top-0'>

      <div className='font-mono text-zinc-800 md:px-5 py-4 px-3 md:flex justify-between items-center'>

        <div className='flex text-4xl items-center gap-2'>
          <img src={codexImage} className='w-10 h-10'></img>
          <span className=' font-bold'>Xeno Codex</span>
        </div>

        <div onClick={() => setIsOpen(!isOpen)} className='w-7 h-7 absolute right-4 top-4 cursor-pointer md:hidden'>
          {
            isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>

        <ul className={`md:flex md:px-0 px-3 md:pl-0 md:items-center ${isOpen ? '' : 'hidden'}`}>
          {
            Links.map(link => (
              <li className=' font-semibold my-5 md:my-0 md:ml-8'>
                <a href='/'>{link.name}</a>
              </li>))
          }
          <button className='btn bg-zinc-800 text-yellow-400 py-1 px-3 md:ml-8 rounded md:static'>Connexion</button>
        </ul>

      </div>

    </div>
  );
};

export default Navbar;