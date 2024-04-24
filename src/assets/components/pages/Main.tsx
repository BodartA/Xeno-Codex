import React from 'react';
import XenoCards from '../XenoCards';

const Main = () => {
  return (
    <>
      <div className=' w-10/12 mx-auto'>
        <div className='grid grid-cols-2 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-6 2xl:grid-cols-6 2xl:gap-8'>
          <XenoCards />
          <XenoCards />
          <XenoCards />
          <XenoCards />
          <XenoCards />
          <XenoCards />
          <XenoCards />
          <XenoCards />
        </div>
      </div>
    </>
  );
};

export default Main;