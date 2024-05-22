import { AdjustmentsHorizontalIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

  return (
    <div className='flex justify-center pt-2 pb-16'>
      <div className='flex h-14 w-1/3 bg-white rounded-full border-zinc-800 border-2'>
        <input className=" focus:outline-none pl-4 bg-transparent w-full font-mono" type='text' placeholder='Entrez votre menace ...' />
        <AdjustmentsHorizontalIcon className='' />
        <MagnifyingGlassCircleIcon className='' />
      </div>
    </div>
  );
};

export default Navbar;