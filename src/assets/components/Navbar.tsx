import { AdjustmentsHorizontalIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

  return (
    <div className='flex mx-auto h-14 w-1/3 bg-white'>
      <input className="p-1 bg-transparent w-full" type='text' placeholder='Entrez votre menace ...' />
      <AdjustmentsHorizontalIcon className='p-1' />
      <MagnifyingGlassCircleIcon className='p-1' />
    </div>
  );
};

export default Navbar;